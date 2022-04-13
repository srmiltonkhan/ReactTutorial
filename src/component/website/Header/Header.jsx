import { NavLink } from "react-router-dom"
function Header() {
  return (
    <nav>
        <ul>
            <li><NavLink to="home">Home</NavLink></li>
            <li><NavLink to="contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Header