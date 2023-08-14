import mongoose from "mongoose";



let isConnected = false;

const MONGO = process.env.MONGODB_URL;

export const connectToDB = async() => {
   
    mongoose.set('strictQuery', true);

    if(!MONGO) return console.log('MONGODB URL not found.');

    if(isConnected) return console.log('Already connected to MONGODB');
    
    try {
        await mongoose.connect(MONGO, {dbName:'threads'});
        isConnected = true;
        console.log('successfully connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}
