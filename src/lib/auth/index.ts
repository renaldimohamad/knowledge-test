import {api} from ".."
import {IRegisterForm} from "../../services/types/auth/register"

export const login = async (email: string, password: string) => {
   const res = await api.post("/auth/login", {email, password})
   return res.data
}

export const register = async (body: IRegisterForm) => {
   const res = await api.post("/auth/register", body)
   return res.data
}

export const checkAuth = async (token: string) => {
   const res = await api.get("/auth/me", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })

   return res.data
}
