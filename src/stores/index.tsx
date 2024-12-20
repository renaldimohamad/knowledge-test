import {createContext, useState} from "react"
import {IUser, TStore} from "../services/types/store"

interface StoreProps {
   children: React.ReactNode
}

export const Store = createContext<TStore | null>(null)

export const StoreProvider: React.FC<StoreProps> = ({children}) => {
   const [user, setUserState] = useState<IUser>({
      id: "",
      email: "",
      userName: "",
      gender: "",
   })

   const [isLogin, setisLogin] = useState(false)
   const [isDarkMode, setIsDarkMode] = useState(false)
   const [posts] = useState([])

   const setUser = (user: IUser) => {
      setUserState(user)
      setisLogin(true)
   }

   const clearUser = () => {
      setUserState({
         id: "",
         userName: "",
         email: "",
         gender: "",
      })
      localStorage.removeItem("token")
      localStorage.clear()
      setisLogin(false)
   }

   const toggleTheme = () => {
      setIsDarkMode((Prev) => !Prev)
   }

   return (
      <>
         <Store.Provider
            value={{
               user,
               isLogin,
               setUser,
               clearUser,
               isDarkMode,
               toggleTheme,
               posts,
            }}
         >
            {children}
         </Store.Provider>
      </>
   )
}
