import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
   
})

export const Project = mongoose.model("Project", schema)