import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav >
      {/*<Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>*/}
      <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/about" className={({isActive}) => (isActive ? "active" : "")}>Sobre</NavLink>      
    </nav>
  )
}

export default Navbar