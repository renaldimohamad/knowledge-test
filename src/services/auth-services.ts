import db from "../libs/db"
import {IUserRegister} from "../types/auth"
import error from "../utils/constans/error_list"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import error_message from "../utils/constans/error_message"

export const register = async (user: IUserRegister) => {
   const existedUser = await db.user.findFirst({
      where: {
         OR: [
            {
               userName: user.userName,
               email: user.email,
            },
         ],
      },
   })

   if (existedUser) {
      throw new Error(error.USER_ALREADY_EXIST)
   }

   const hashedPassword = await bcrypt.hash(user.password, 10)
   user.password = hashedPassword

   const newUser = await db.user.create({
      data: user,
   })

   return newUser
}

export const login = async (email: string, password: string) => {
   const existedUser = await db.user.findFirst({
      where: {
         email: email,
      },
   })

   if (!existedUser) {
      throw new Error(error.AUTH_NOT_FOUND)
   }

   const isMatch = await bcrypt.compare(password, existedUser.password)

   if (!isMatch) {
      throw new Error(error_message.AUTH_NOT_FOUND)
   }

   const tokent = jwt.sign(existedUser, process.env.SECRET_KEY || "secret", {
      expiresIn: "1d",
   })

   return tokent
}
