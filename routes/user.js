import express from "express"
import { login } from "../controllers/user.js"
import { signUp } from "../controllers/user.js"
import { logout } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()



router.post("/signup", signUp)

router.post("/login", login)

router.get("/logout",isAuthenticated, logout)


export default router