import ErrorHandler from "../middlewares/error.js"
import {Post} from "../models/post.js"


export const newPost = async (req, res, next) => {
    try {
        const {title, body} = req.body

        await Post.create({
            title,
            body,
            author: req.user._id
        })

        res.status(201).json({
            success: true,
            message: "Your blog post is published"
        })
        
    } catch (error) {
        next(error)
    }
}

export const getMyPosts = async (req, res, next)=> {
    try {
        const authorId = req.user._id

        const posts = await Post.find({author: authorId })

        res.status(200).json({
            success: true,
            posts
        })
        
    } catch (error) {
        next(error)
    }
}



export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().sort({_id: -1})

        res.status(200).json({
            success: true,
            posts
        })
    } catch (error) {
        next(error)
        
    }
}

export const deletePost = async (req, res, next) => {
    try {
        const {id} = req.params

        const post = await Post.findById(id)

        if(!post) {
            return next(new ErrorHandler("Post not found", 404))
        }

        await post.deleteOne()

        res.status(200).json({
            success: true,
            message: "Post deleted!"
        })


    } catch (error) {
        next(error)
    }
}