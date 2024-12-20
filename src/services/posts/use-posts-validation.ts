import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {IPostForm} from "../types/posts/post"

export const usePostValidation = () => {
   const schema = yup.object().shape({
      content: yup.string().min(3).max(255).required("Content is required"),
   })

   return useForm<IPostForm>({
      resolver: yupResolver(schema),
      defaultValues: {
         content: "",
      },
      reValidateMode: "onSubmit",
      mode: "all",
   })
}
