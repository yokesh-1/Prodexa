import express from 'express' ;
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors' ;
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes.js';
import {sql} from './config/db.js';
import {aj} from './lib/arcjet.js'

// CONFIG
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000

// middlewares 
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// apply arcjet using token bucket algorithm 
app.use(async (req, res , next) =>{
      try {
        const decision  = await aj.protect(req, {
            requested :1,

        })

        if (decision.isDenied()) {
           
            if(decision.reason.isRateLimit()) {
                res.status(429).json({error : "Too many requests"})
            } else if (decision.reason.isBot()) {
                res.status(403).json({error : "Bot access Denied"})
            } else {
                res.status(403).json({error : "Forbidden"})
            }
            return 
        }

        // check for spoofed bot 
        if(decision.results.some((result) =>result.reason.isBot()  && result.reason.isSpoofed())) {
            res.status(403).json({error : "Spoofed bot detected"})
            return
        }

        next()
      } catch (error) {
        console.log("Arcjet error " , error );
        next(error)
      }
})



// API
app.use('/api/products' ,productRoutes )


// DB connnection
async function initDb(params) {
try {
    await sql `
    CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT  CURRENT TIMESTAMP,
    )
    ` ;

    console.log("Database initialized")
} catch (error) {
    console.log("Error initDb" , error)
}
    
}


//PORT and DB connect

initDb().then( () =>{
    app.listen(PORT , ()=>{
    console.log("PORT RUNNING" , PORT)
})
})