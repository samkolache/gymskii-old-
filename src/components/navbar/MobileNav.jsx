import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";

export default function MobileNav({ isMenuOpen, toggleMenu }) {


    return (
        <div 
            className={`lg:hidden z-50 flex flex-col items-center gap-5 min-h-screen w-1/2 bg-gray-100 fixed top-0 right-0 pt-10 shadow-md 
                        transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
            <ul className="flex flex-col gap-10 mt-16 w-full">
                <li className="w-full flex justify-between items-center">
                    <NavLink 
                        to="/about" 
                        className="text-3xl w-full block px-4 py-2"
                        onClick={toggleMenu}
                    >
                        About
                    </NavLink>
                    <span className="material-icons">arrow_forward</span>
                </li>
                <li className="w-full flex justify-between items-center">
                    <NavLink 
                        to="/features" 
                        className="text-3xl w-full block px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Features
                    </NavLink>
                    <span className="material-icons">arrow_forward</span>
                </li>
                <li className="w-full flex justify-between items-center">
                    <NavLink 
                        to="/blog" 
                        className="text-3xl w-full block px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Blog
                    </NavLink>
                    <span className="material-icons">arrow_forward</span>
                </li>
            </ul>
            <div className="flex mt-16 pb-10 gap-3">
                <NavLink 
                    to="/sign-in" 
                    className="border border-brand px-4 py-2 rounded-lg font-medium hover:shadow-[0_0_0_2px_rgba(52,152,219,1)] text-brand transition-shadow duration-300"
                    onClick={toggleMenu}
                >
                    Sign in
                </NavLink>
                <NavLink 
                    to="/sign-up" 
                    className="bg-brand px-4 py-2 rounded-lg font-medium text-white hover:bg-brand600 transition duration-300 ease-in-out"
                    onClick={toggleMenu}
                >
                    Sign up
                </NavLink>
            </div>
            <span 
                className="material-icons cursor-pointer absolute top-4 right-4"
                onClick={toggleMenu}
            >
                close
            </span>
        </div>
    );
}
