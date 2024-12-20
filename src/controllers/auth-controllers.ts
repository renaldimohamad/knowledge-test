import * as authServices from "../services/auth-services"
import {Request, Response} from "express"
import {IUserRegister} from "../types/auth"
import errorHandler from "../utils/error_handler"

export const register = async (req: Request, res: Response) => {
   try {
      const body = req.body

      const user = await authServices.register(body as IUserRegister)

      res.status(200).json({
         message: "User created successfully",
         token: user,
      })
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}

export const login = async (req: Request, res: Response) => {
   try {
      const {email, password} = req.body

      const user = await authServices.login(email, password)

      res.status(200).json({
         message: "User logged in successfully",
         data: user,
      })
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}

export const checkAuth = async (req: Request, res: Response) => {
   try {
      const user = res.locals.user

      res.json({
         data: user,
      })
   } catch (error) {
      errorHandler(res, error as unknown as Error)
   }
}
