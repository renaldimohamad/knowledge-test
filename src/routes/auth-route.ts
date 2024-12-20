import {Router} from "express"
import * as authControllers from "../controllers/auth-controllers"
import authorization from "../middlewares/authorization"

const authRoute = Router()

authRoute.post("/register", authControllers.register)
authRoute.post("/login", authControllers.login)
authRoute.get("/me", authorization, authControllers.checkAuth)

export default authRoute
