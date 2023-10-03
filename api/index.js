import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import coursesRoute from './routes/courses.js';



import cors from 'cors';

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb connected :)');
    }catch (err) {
        throw (err);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected :(");
});

app.use(express.json());
app.use(cors());

app.use("/api/courses", coursesRoute);

app.listen(8500, () => {
    connect();
    console.log("Connected to backend :)");
});