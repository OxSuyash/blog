import express from "express"
import { isAuthenticated } from "../middlewares/auth.js"
import { deletePost, getAllPosts, getMyPosts, newPost } from "../controllers/post.js"



const router = express.Router()

router.post("/new", isAuthenticated, newPost)

router.get("/myposts", isAuthenticated, getMyPosts)

router.get("/all", getAllPosts)

router.route("/delete/:id").delete(isAuthenticated, deletePost)

export default router