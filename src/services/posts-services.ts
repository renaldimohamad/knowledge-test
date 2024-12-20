import {Posts} from "@prisma/client"
import db from "../libs/db"
import {PostsModel} from "../models/posts-model"

export const getAllPostByUserId = async (userId: number) => {
   if (!userId) {
      throw new Error("User not found")
   }

   return await db.posts.findMany({where: {userId}})
}

export const findById = async (id: number) => {
   return await db.posts.findFirst({
      where: {
         id,
      },
      include: {
         author: true,
      },
   })
}

export const createPost = async (post: Posts) => {
   const newPost = await db.posts.create({
      data: post,
   })

   return newPost
}

export const toggleReadStatus = async (id: number) => {
   const existingPost = await db.posts.findFirst({
      where: {
         id,
      },
   })

   if (!existingPost) {
      throw new Error("Post not found")
   }

   const updatePost = await db.posts.update({
      where: {id},
      data: {
         isRead: !existingPost.isRead,
      },
   })

   return updatePost
}
export const updatePost = async (id: number, post: PostsModel) => {
   const existingPost = await db.posts.findFirst({
      where: {
         id,
      },
   })

   if (!existingPost) {
      throw new Error("Post not found")
   }

   const updatedPost = await db.posts.update({
      data: post,
      where: {id},
   })

   return updatedPost
}

export const removePost = async (id: number) => {
   await db.posts.delete({
      where: {
         id,
      },
   })

   return "Post deleted successfully"
}
