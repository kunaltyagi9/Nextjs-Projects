import mongoose from "mongoose";

const Connection = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;