export interface IStoreState {
   user: IUser
   isLogin: boolean
   posts: IPostModel[]
}

export interface IStoreAction {
   setUser: (user: IUser) => void
   getPosts: (id: number) => Promise<void>
   clearUser: () => void
   isDarkMode: boolean
   toggleTheme: () => void
}

export interface IUser {
   id: String
   userName: String
   email: String
   gender: String
}

export type TStore = IStoreState & IStoreAction & IPostActions
