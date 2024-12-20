import {useNavigate} from "react-router-dom"
import {useState} from "react"
import {useRegisterFunction} from "../../../services/auth/register/use-register-function"
import {useRegister} from "../../../services/auth/register/use-register"
import {IRegisterForm} from "../../../services/types/auth/register"

export const useRegisterHook = () => {
   const navigate = useNavigate()

   const registerFunc = useRegisterFunction()
   const {
      control,
      handleSubmit,
      reset,
      formState: {errors},
   } = useRegister()

   const [alert, setAlert] = useState({
      show: false,
      message: "",
      variant: "",
   })

   const handleSubmitForm = async (data: IRegisterForm) => {
      try {
         await registerFunc.register(data)
         setAlert({
            show: true,
            message: "Registration successful!",
            variant: "success",
         })

         setTimeout(() => {
            setAlert((prevAlert) => ({...prevAlert, show: false}))
            navigate("/auth/login")
         }, 1500)

         reset()
      } catch (error: any) {
         setAlert({
            show: true,
            message: error.message || "User already exists.",
            variant: "danger",
         })

         setTimeout(() => {
            setAlert((prevAlert) => ({...prevAlert, show: false}))
            reset()
         }, 3000)
      }
   }

   return {
      control,
      handleSubmitForm,
      handleSubmit,
      reset,
      errors,
      alert,
      setAlert,
   }
}
