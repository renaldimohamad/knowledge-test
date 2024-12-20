import {useState} from "react"
import {SubmitHandler} from "react-hook-form"
import {useLogin} from "../../../services/auth/login/use-login"
import {useloginFunction} from "../../../services/auth/login/use-login-function"
import {ILoginForm} from "../../../services/types/auth/login"

export const useLoginHook = () => {
   const loginFunc = useloginFunction()
   const {
      control,
      handleSubmit,
      reset,
      formState: {errors},
   } = useLogin()

   const [alert, setAlert] = useState({
      show: false,
      message: "",
      variant: "",
   })

   const handleSubmitForm: SubmitHandler<ILoginForm> = async (data: any) => {
      try {
         await loginFunc.login(data.email, data.password)
         setAlert({
            show: true,
            message: "Login successful!",
            variant: "success",
         })

         reset()
      } catch (error: any) {
         console.log("Error during login:", error)
         setAlert({
            show: true,
            message: error.message || "Invalid Password or Email",
            variant: "danger",
         })

         setTimeout(() => {
            setAlert({...alert, show: false})
            reset()
         }, 3000)
      }
   }

   return {
      control,
      handleSubmitForm,
      handleSubmit,
      errors,
      alert,
      setAlert,
   }
}
