import {Response} from "express"
import error_code from "./constans/error_code"
import error_message from "./constans/error_message"

export default function errorHandler(res: Response, err: Error) {
   let message = err.message

   res.status(error_code[message] || 500).json({
      error: error_message[message] || message,
   })
}
