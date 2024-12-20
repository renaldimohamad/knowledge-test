import {Button} from "react-bootstrap"
import "./index.css"
import {useNavigate} from "react-router-dom"

interface CustomButtonProps {
   customtext: string
   path?: string
   className?: string
   type?: "button" | "submit" | "reset"
   onClick?: () => void
}

export const CustomButton = ({
   customtext,
   path,
   className,
   type = "button",
   onClick,
}: CustomButtonProps) => {
   const navigate = useNavigate()

   const handleClick = () => {
      if (onClick) {
         onClick()
      }
      if (path) {
         navigate(path)
      }
   }

   return (
      <Button className={className} type={type} onClick={handleClick}>
         <p className="m-0">{customtext}</p>
      </Button>
   )
}
