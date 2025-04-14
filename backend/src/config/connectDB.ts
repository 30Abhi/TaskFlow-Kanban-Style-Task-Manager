import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const URL=process.env.MONGO_URL;


export const CONNECTDB=async()=>{

    try {
        await mongoose.connect(URL||"");
        console.log("Connected to DB successfully");
    } catch (error) {
        console.log(error);
    }

}