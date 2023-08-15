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
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",  //this is reference of the collection from which we want to save object id
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
   
})

export const Post = mongoose.model("Post", schema)