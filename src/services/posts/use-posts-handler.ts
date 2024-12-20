import {useState, useEffect, useCallback} from "react"
import {usePostFunction} from "./use-posts-function"
import {IPostModel, IPostForm} from "../types/posts/post"

export const usePostsHandler = (userId: number) => {
   const postFunc = usePostFunction()
   const [posts, setPosts] = useState<IPostModel[]>([])
   const [updatedPost, setUpdatedPost] = useState<number | null>(null)

   // Fetch all posts
   const fetchPosts = useCallback(async () => {
      try {
         const res = await postFunc.getAllpost(userId)
         setPosts(res)
      } catch (error: any) {
         throw new Error(error)
      }
   }, [postFunc, userId])

   // Create or update post
   const handlePostSubmit = async (data: IPostForm) => {
      if (updatedPost) {
         await postFunc.updatePost(updatedPost, data)
         setUpdatedPost(null)
      } else {
         await postFunc.createPost(data)
      }

      await fetchPosts()
   }

   // Delete post
   const handlePostDelete = async (id: number) => {
      await postFunc.removePost(id)
      await fetchPosts()
   }

   // Edit post
   const handlePostEdit = async (
      post: IPostModel,
      setValue: any,
      inputRef: any
   ) => {
      setUpdatedPost(post.id)
      setValue("content", post.content)

      if (inputRef.current) {
         inputRef.current.focus()
      }
   }

   // Toggle read status
   const toggleReadStatus = async (id: number) => {
      try {
         const updatedPost = await postFunc.toggleReadStatus(id)
         setPosts((prevPosts) =>
            prevPosts.map((post) =>
               post.id === id ? {...post, isRead: updatedPost.isRead} : post
            )
         )
      } catch (error: any) {
         throw new Error(error)
      }
   }

   // Initial fetch
   useEffect(() => {
      fetchPosts()
   }, [fetchPosts])

   return {
      posts,
      updatedPost,
      fetchPosts,
      handlePostSubmit,
      handlePostDelete,
      handlePostEdit,
      toggleReadStatus,
   }
}
