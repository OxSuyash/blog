import express from "express"
import userRouter from "./routes/user.js"
import postRouter from "./routes/post.js"
import projectRouter from "./routes/project.js"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"

import { config } from "dotenv"


export const app = express();

config({
    path: "./data/config.env",
})

//using middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],  // requests are allowed only from this url
    methods: ["GET", "POST", "PUT", "DELETE"], //only these methods are allowed from above url
    credentials: true // to access cookie on frontend
    


}))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL)
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    next()
})



//using router
app.use("/api/v1/user/", userRouter)
app.use("/api/v1/post/", postRouter)
app.use("/api/v1/project/", projectRouter)


//using error middleware
app.use(errorMiddleware)
