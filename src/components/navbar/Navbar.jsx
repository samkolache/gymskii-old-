import MobileNav from "./MobileNav";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from '../../assets/logo.png'

export default function Navbar() {
    const [isOpen, setOpen] = useState(true)

    const toggleMenu = () => setOpen(prev => !prev);
    
    return(
        <>
            <nav className="flex justify-between items-center px-12 py-4">
                {/* Logo */}
                <NavLink to= "/"> <img src= {Logo} alt="gymskii logo" className="w-[112px] h-[36px]" /> </NavLink>
                
                {/* Nav Links and CTAs */}
                <div className="lg:flex hidden justify-center items-center gap-6 ">
                <ul className="flex gap-10">
                    <li>
                        <NavItem name = "About" path = "/about"  />
                    </li>
                    <li>
                        <NavItem name = "Features" path = "/features"  />
                    </li>
                    <li>
                        <NavItem name = "Blog" path= "/blog"  />
                    </li>
                </ul>
                <div className="flex gap-6">
                    <NavLink 
                        to="/sign-in" 
                        className="border border-brand px-4 py-2 rounded-lg font-medium hover:shadow-[0_0_0_2px_rgba(52,152,219,1)] text-brand transition-shadow duration-300"
                    >
                    Sign in
                    </NavLink>
                    <NavLink 
                        to="/sign-up" 
                        className="bg-brand px-4 py-2 rounded-lg font-medium text-white hover:bg-brand600 transition duration-300 ease-in-out"
                    >
                    Sign up
                    </NavLink>
                </div>
                </div>
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