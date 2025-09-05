import { app } from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./db/index.js";



dotenv.config({path: "./.env",});

const port = process.env.PORT || 5000
connectDB();
try{
    
    app.listen(port, ()=>{
    console.log(`Server is running on port in index.js:  ${port}`);
    console.log(`Open http://localhost:${process.env.PORT} in your browser`);
    })
}
catch(err){ 
    console.log("Error in index.js starting server: ",err)
}
