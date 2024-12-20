import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {ILoginForm} from "../../types/auth/login"

export const useLogin = () => {
   const schema = yup.object().shape({
      email: yup
         .string()
         .required("Email is required")
         .email("Email is invalid"),
      password: yup
         .string()
         .required("Password is required")
         .max(6, "The password must be a maximum of 6 characters")
         .max(50, "The password must be a maximum of 50 characters"),
   })

   const initialValues = {
      email: "",
      password: "",
   }

   return useForm<ILoginForm>({
      defaultValues: initialValues,
      resolver: yupResolver(schema),
      mode: "all",
   })
}
