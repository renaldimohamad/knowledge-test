import {api} from ".."
import {IPostForm} from "../../services/types/posts/post"

export const createPost = async (body: IPostForm) => {
   const res = await api.post("/posts", body)
   return res.data
}

export const getAllpost = async (userId: number) => {
   const res = await api.get(`/posts/${userId}`)

   return res.data
}

export const getUserById = async (userId: number) => {
   const response = await api.get(`/users/${userId}`)
   return response.data
}

export const toggleReadStatus = async (id: number) => {
   const res = await api.patch(`/posts/${id}/toggle-read`)

   return res.data
}

export const getPostById = async (id: number) => {
   const res = await api.get(`/posts/${id}`)

   return res.data
}

export const updatePost = async (id: number, body: IPostForm) => {
   const res = await api.put(`/posts/${id}`, body)

   return res.data
}

export const removePost = async (id: number) => {
   const res = await api.delete(`/posts/${id}`)

   return res.data
}
