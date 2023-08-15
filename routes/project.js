import express from "express"
import { deleteProject, getProjects, newProject } from "../controllers/project.js"
import { isAuthenticated } from "../middlewares/auth.js"


const router = express.Router()

router.post("/new", isAuthenticated, newProject)

router.get("/all", getProjects)

router.route("/delete/:id").delete(isAuthenticated, deleteProject)



export default router