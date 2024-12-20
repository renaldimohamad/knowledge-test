export interface IPostForm {
   content: string
}

export interface IPostModel {
   id: number
   author: IAuthor
   content: string
   isRead: Boolean
   createdAt: string
}

export interface IAuthor {
   id: number
   userName: string
}
