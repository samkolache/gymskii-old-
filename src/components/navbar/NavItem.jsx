import { NavLink } from "react-router-dom"
import './navbar.css';

export default function NavItem({name, path}) {
    return(
        <>
            <NavLink className = {({isActive}) => {
                return isActive ? "nav-link active" : "nav-link"
            }} to = {path}>
                <p className="font-medium hover:text-navHover">{name}</p>
            </NavLink>
        </>
    )
}