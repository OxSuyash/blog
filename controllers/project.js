import ErrorHandler from "../middlewares/error.js"
import {Project} from "../models/project.js"

export const newProject = async (req, res, next)=> {
    try {
        const {title, description, link} = req.body

        await Project.create({
            title,
            description,
            link
        })

        res.status(201).json({
            success: true, 
            message: "Your project is added successfully"
        })

    } catch (error) {
        next(error)
    }
}

export const getProjects = async (req, res, next)=>{
    try {
        const projects = await Project.find().sort({_id: -1})

        res.status(200).json({
            success: true,
            projects
        })
    } catch (error) {
        next(error)
    }
}

export const deleteProject = async (req, res, next) => {
    try {
        const {id} = req.params

        const project = await Project.findById(id)

        if(!project) {
            return next(new ErrorHandler("Project not found", 404))
        }

        await project.deleteOne()

        res.status(200).json({
            success: true,
            message: "Project Deleted!"
        })


    } catch (error) {
        next(error)
    }
}