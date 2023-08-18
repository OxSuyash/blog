import express from "express"
import { contact, getMyProfile, login } from "../controllers/user.js"
import { signUp } from "../controllers/user.js"
import { logout } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()



router.post("/konahe", signUp)

router.post("/login", login)

router.post("/contact", contact)

router.get("/logout",isAuthenticated, logout)

router.get("/profile", isAuthenticated, getMyProfile)


export default router