import mongoose from "mongoose";


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
   
})

export const Post = mongoose.model("Post", schema)