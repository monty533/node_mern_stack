import express from 'express'
import colors from 'colors'
import { configDotenv } from 'dotenv';

//rest object
const app = express();
// config env
configDotenv();

//rest api
app.get('/',(req,res) => {
    res.send('<h1>welcome to ecommerce app</h1>');
});

// port node 
const PORT = process.env.POST || 8000;

// run listen
app.listen(PORT,() =>{
    console.log(`server running on ${process.env.DEV_MODE} port ${PORT}`.bgMagenta.white);
});
