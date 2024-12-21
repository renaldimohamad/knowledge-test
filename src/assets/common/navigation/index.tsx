import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import todoLogo from "/src/assets/images/todo-photo.png"
import "./index.css"
import {NavbarBrand} from "react-bootstrap"
import useStore from "../../../stores/hook"
import {CustomButton} from "../custom-button"
import {CustomDropdown} from "../dropdown"

const Navigation = () => {
   const {isLogin} = useStore()

   return (
      <div>
         <Navbar expand="lg" className="bg-body-tertiary ">
            <Container className="d-flex justify-content-between align-items-center">
               <div className="d-flex align-items-center">
                  <img src={todoLogo} alt="todo-logo" className="todo-logo" />

                  <NavbarBrand>
                     <div
                        style={{
                           display: "flex",
                           flexDirection: "row",
                           alignItems: "center",
                        }}
                     >
                        <span className="nav-todo-wrapper ms-2 me-1">
                           <span className="nav-todo">todolist</span>
                        </span>
                        <span className="header-text">.</span>
                        <span className="header-text">com</span>
                     </div>
                  </NavbarBrand>
               </div>
               {isLogin ? (
                  <>
                     <CustomDropdown />
                  </>
               ) : (
                  <>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse className="justify-content-end">
                        <CustomButton
                           customtext={"Login"}
                           className="custom-button-login me-3 rounded-5"
                           path="/auth/login"
                        />
                        <CustomButton
                           customtext={"Get Started"}
                           className="custom-button px-4 py-2 rounded-5"
                           path="/auth/register"
                        />
                     </Navbar.Collapse>
                  </>
               )}
            </Container>
         </Navbar>
      </div>
   )
}

export default Navigation
