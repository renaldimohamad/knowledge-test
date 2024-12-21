import {useEffect} from "react"
import {Login} from "../../../pages/auth/logn"
import useStore from "../../../stores/hook"
import {Navigate} from "react-router-dom"

const Index = ({setShowNavbar}: any) => {
   const {isLogin} = useStore()

   useEffect(() => {
      setShowNavbar(false)
      return () => {
         setShowNavbar(true)
      }
   }, [setShowNavbar])

   if (isLogin) {
      return <Navigate to="/posts" />
   }

   return (
      <>
         <Login />
      </>
   )
}

export default Index
