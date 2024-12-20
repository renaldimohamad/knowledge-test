import {useEffect} from "react"
import {Register} from "../../../pages/auth/register"

const Index = ({setShowNavbar}: any) => {
   useEffect(() => {
      setShowNavbar(false)
      return () => {
         setShowNavbar(true)
      }
   }, [setShowNavbar])

   return (
      <>
         <Register />
      </>
   )
}

export default Index
