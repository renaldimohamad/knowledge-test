import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {IRegisterForm} from "../../types/auth/register"

export const useRegister = () => {
   const schema = yup.object().shape({
      userName: yup
         .string()
         .required("User Name is required")
         .min(4, "User Name must be at least 4 characters"),
      email: yup
         .string()
         .required("Email is required")
         .email("Email is invalid"),
      gender: yup.string().required("Gender is required"),
      password: yup
         .string()
         .required("Password is required")
         .min(6, "Password must be at least 6 characters")
         .max(50, "Password must be at most 6 characters"),
   })

   return useForm<IRegisterForm>({
      defaultValues: {
         userName: "",
         email: "",
         password: "",
         gender: "male",
      },
      resolver: yupResolver(schema),
   })
}
