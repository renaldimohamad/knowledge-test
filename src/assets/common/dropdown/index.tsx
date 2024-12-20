import {Dropdown, ButtonGroup, Stack} from "react-bootstrap"
import useStore from "../../../stores/hook"
import {BiLogOut} from "react-icons/bi"
import {MdAlternateEmail} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import {RiMenu5Fill} from "react-icons/ri"

export const CustomDropdown = () => {
   const {clearUser, user} = useStore()

   return (
      <Dropdown as={ButtonGroup} align="end">
         <Dropdown.Toggle
            id="dropdown-button"
            variant="light"
            className="d-flex align-items-center"
            style={{
               borderRadius: "50%",
               padding: "0",
               border: "none",
            }}
         >
            <RiMenu5Fill size={30} color="rgb(106, 151, 151)" />
         </Dropdown.Toggle>

         <Dropdown.Menu
            style={{
               color: "#fff",
               borderRadius: "8px",
               boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            }}
         >
            <Dropdown.Item>
               <Stack direction="vertical" gap={2}>
                  <div className="d-flex align-items-center">
                     <CgProfile
                        size={20}
                        style={{color: "rgb(106, 151, 151)"}}
                     />
                     <span className="ms-2" style={{fontSize: "15px"}}>
                        {user.userName}
                     </span>
                  </div>
                  <div className="d-flex align-items-center">
                     <MdAlternateEmail
                        size={20}
                        style={{color: "rgb(106, 151, 151)"}}
                     />
                     <span
                        className="ms-2"
                        style={{
                           fontSize: "12px",
                        }}
                     >
                        {user.email}
                     </span>
                  </div>
               </Stack>
            </Dropdown.Item>

            <Dropdown.Divider
               style={{borderColor: "#A8A8A8", borderWidth: "0.5px"}}
            />

            <Dropdown.Item
               onClick={() => clearUser()}
               style={{cursor: "pointer"}}
            >
               <div className="d-flex align-items-center">
                  <BiLogOut size={20} style={{color: "rgb(106, 151, 151)"}} />
                  <span className="ms-2">Logout</span>
               </div>
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   )
}
