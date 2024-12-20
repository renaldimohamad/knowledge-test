import * as postServices from "../services/posts-services"
import {Request, Response} from "express"
import errorHandler from "../utils/error_handler"
import {createPostSchema} from "../middlewares/validations/post"

export const getAllPostByUserId = async (req: Request, res: Response) => {
   const {userId} = req.params

   try {
      const posts = await postServices.getAllPostByUserId(parseInt(userId, 10))

      res.json(posts)
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}

export const findById = async (req: Request, res: Response) => {
   const posts = await postServices.findById(parseInt(req.params.id))

   res.json(posts)
}

export const createPost = async (req: Request, res: Response) => {
   await createPostSchema.validateAsync(req.body)

   try {
      const userId = res.locals.user.id
      req.body.userId = userId

      const post = await postServices.createPost(req.body)
      res.json({
         message: "post created successfully",
         data: post,
      })
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}

export const toggleReadStatus = async (req: Request, res: Response) => {
   const {id} = req.params

   try {
      const updatedPost = await postServices.toggleReadStatus(Number(id))
      res.status(200).json(updatedPost)
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}

export const updatePost = async (req: Request, res: Response) => {
   const posts = await postServices.updatePost(
      parseInt(req.params.id),
      req.body
   )

   res.json(posts)
}

export const removePost = async (req: Request, res: Response) => {
   const posts = await postServices.removePost(parseInt(req.params.id))

   res.status(200).json(posts)
}
