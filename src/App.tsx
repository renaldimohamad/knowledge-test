import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {useEffect, useState} from "react"
import "./App.css"
import {api, setAuthToken} from "./lib"
import useStore from "./stores/hook"
import Home from "./components/home/index"
import Login from "./components/auth/login/index"
import Register from "./components/auth/register/index"
import Index from "./components/posts/index"
import Navigation from "./assets/common/navigation"

function App() {
   const [showNavbar, setShowNavbar] = useState(true)

   const {setUser} = useStore()

   async function checkAuth() {
      const token = localStorage.getItem("token")
      if (!token) {
         return <Navigate to="/" />
      }

      try {
         const res = await api.get("/auth/me", {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         setUser(res.data)
         setAuthToken(token)
      } catch (error) {
         throw error
      }
   }

   useEffect(() => {
      checkAuth()
   }, [])

   return (
      <Router>
         {showNavbar && <Navigation />}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/auth/login"
               element={<Login setShowNavbar={setShowNavbar} />}
            />
            <Route
               path="/auth/register"
               element={<Register setShowNavbar={setShowNavbar} />}
            />
            <Route path="/todo" element={<Index />} />
         </Routes>
      </Router>
   )
}

export default App
