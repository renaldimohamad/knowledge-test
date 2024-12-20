import {forwardRef} from "react"
import {FormControl, FormControlProps} from "react-bootstrap"

interface InputProps extends FormControlProps {}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
   ({...rest}, ref) => {
      return (
         <FormControl
            {...rest}
            ref={ref}
            style={{
               width: "100%",
            }}
         />
      )
   }
)

export default CustomInput
