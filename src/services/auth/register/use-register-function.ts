import * as authAsync from "../../../lib/auth"
import {IRegisterForm} from "../../types/auth/register"

export const useRegisterFunction = () => {
   const register = async (body: IRegisterForm) => {
      try {
         const res = await authAsync.register(body)
         res.data
      } catch (error: any) {
         throw new Error(error.response?.data?.message)
      }
   }

   return {register}
}
