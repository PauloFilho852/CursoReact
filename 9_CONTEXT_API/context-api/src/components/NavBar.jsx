import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <NavLink to = "/" className = {({isActive})=> isActive ? "active" : ""}>Home</NavLink>
        <NavLink to = "/pageone" className = {({isActive})=> isActive ? "active" : ""}>Page One</NavLink>
        <NavLink to = "/pageTwo" className = {({isActive})=> isActive ? "active" : ""}>Page Two</NavLink>
        <NavLink to = "/pageThree" className = {({isActive})=> isActive ? "active" : ""}>Page Three</NavLink>
   </div>
  )
}

export default NavBar