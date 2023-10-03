import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import coursesRoute from './routes/courses.js';
import examsRoute from './routes/exams.js';


import cors from 'cors';

const app = express();
dotenv.config();

async function connect () {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected to mongodb :)");
    }catch (err) {
        console.error(err);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected :(");
});

app.use(express.json());
app.use(cors());

app.use("/api/courses", coursesRoute);
app.use("/api/exams", examsRoute);

app.listen(8500, () => {
    connect();
    console.log("Connected to backend :)");
});