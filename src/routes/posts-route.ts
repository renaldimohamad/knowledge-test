import {Router} from "express"
import * as postControllers from "../controllers/posts-controllers"
import authorization from "../middlewares/authorization"

const postRoute = Router()

postRoute.get("/:userId", postControllers.getAllPostByUserId)
postRoute.get("/:id", postControllers.findById)
postRoute.patch("/:id/toggle-read", postControllers.toggleReadStatus)
postRoute.post("/", authorization, postControllers.createPost)
postRoute.put("/:id", postControllers.updatePost)
postRoute.delete("/:id", postControllers.removePost)

export default postRoute
