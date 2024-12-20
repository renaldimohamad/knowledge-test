import * as PostAsync from "../../lib/posts"
import {IPostForm, IPostModel} from "../types/posts/post"

export const usePostFunction = () => {
   const createPost = async (body: IPostForm) => {
      try {
         const res = await PostAsync.createPost(body)

         return res
      } catch (error: any) {
         throw new Error(error)
      }
   }

   const getAllpost = async (userId: number) => {
      try {
         const res = await PostAsync.getAllpost(userId)

         return res
      } catch (error: any) {
         throw new Error(error)
      }
   }

   const getAllPostsByUserId = (userId: number) => {
      try {
         const res = PostAsync.getAllpost(userId)

         return res
      } catch (error: any) {
         throw new Error(error)
      }
   }

   const toggleReadStatus = (id: number): Promise<IPostModel> => {
      try {
         const res = PostAsync.toggleReadStatus(id)

         return res
      } catch (error: any) {
         throw new Error(error)
      }
   }

   const updatePost = async (id: number, body: IPostForm) => {
      try {
         const res = await PostAsync.updatePost(id, body)

         return res
      } catch (error: any) {
         throw new Error(error)
      }
   }

   const removePost = async (id: number) => {
      try {
         const res = await PostAsync.removePost(id)

         return res
      } catch (error: any) {
         throw new Error(error)
      }
   }

   return {
      createPost,
      getAllpost,
      updatePost,
      removePost,
      getAllPostsByUserId,
      toggleReadStatus,
   }
}
