import { DB_name } from "../constants.js";
import mangooes from "mongoose";

const connectDB = async () => {
    try{
        const connection = await mangooes.connect(
            `${process.env.MONGO_URI}/${DB_name}`,
        );
        console.log(`\n MongoDB Connected: ${connection.connection.host}`);
    }
    catch(err){
        console.log("Error connection to MongoDB: ",err)
    }
};


export default connectDB;