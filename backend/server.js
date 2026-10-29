import express from 'express' ;
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors' ;
import dotenv from 'dotenv';

// CONFIG
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000

// middlewares 
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));



// Test API
app.get('/test' , (req,res) =>{
    res.send("1st Test API")
})


app.get('/learn' , (req,res) =>{
    res.send("Learning")
})


//PORT
app.listen(PORT , ()=>{
    console.log("PORT RUNNING" , PORT)
})