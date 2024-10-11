import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return(
        <>
            <nav className="flex justify-between items-center px-12 py-4">
                <NavLink to= "/"><h1 className='text-xl font-bold'>gym<span className='text-brand'>skii</span></h1> </NavLink>
                
                <div className="flex justify-center items-center gap-6">
                <ul className="flex gap-10">
                    <li>
                        <NavItem name = "About" path = "about"  />
                    </li>
                    <li>
                        <NavItem name = "Features" path = "features"  />
                    </li>
                    <li>
                        <NavItem name = "Blog" path= "blog"  />
                    </li>
                </ul>
                <div className="flex gap-6">
                    <NavLink 
                        to="sign-in" 
                        className="border border-brand px-4 py-2 rounded-lg font-medium text-brand hover:bg-brand hover:text-white transition duration-300 ease-in-out"
                    >
                    Sign in
                    </NavLink>
                    <NavLink 
                        to="sign-up" 
                        className="bg-brand px-4 py-2 rounded-lg font-medium text-white hover:bg-brand600 transition duration-300 ease-in-out"
                    >
                    Sign up
                    </NavLink>
                </div>
                </div>
            </nav>
        </>
    )
}