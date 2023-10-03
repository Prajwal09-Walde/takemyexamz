import mongoose from "mongoose";

const examSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        totalMarks: {
            type: Number,
            required: true,
        },
        passMarks: {
            type: Number,
            required: true,
        },
        time: {
            type:Number,
            required: true,
        },
        questions: {
            required: [String],
        }
    },
    {timestamps: true},
);

export default mongoose.model("Exam", examSchema);