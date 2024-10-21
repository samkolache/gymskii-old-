import MobileNav from "./MobileNav";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from '../../assets/logo.png'

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)

    const toggleMenu = () => setOpen(prev => !prev);
    
    return(
        <>
            <nav className="flex justify-between items-center px-12 py-4">
                {/* Logo */}
                <NavLink to= "/"> <img src= {Logo} alt="gymskii logo" className="w-[112px] h-[36px]" /> </NavLink>
                <span 
                onClick = {toggleMenu}
                className="material-icons lg:hidden cursor-pointer"
                >
                  menu
                </span>
            </nav>
            <MobileNav isMenuOpen = {isOpen} toggleMenu = {toggleMenu} />        
        </>
    )
}