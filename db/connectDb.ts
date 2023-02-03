import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

export const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI!);
        console.log('connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}