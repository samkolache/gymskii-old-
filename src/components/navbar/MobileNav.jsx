import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";


export default function MobileNav({ isMenuOpen, toggleMenu }) {
    return (
        <div 
            className={`lg:hidden z-50 flex flex-col items-center gap-5 min-h-screen w-1/2 bg-gray-100 absolute top-0 right-0 pt-10 shadow-md 
                        transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
        >
            <ul className="flex flex-col gap-10">
                <li>
                    <NavItem name="About" path="about" />
                </li>
                <li>
                    <NavItem name="Features" path="features" />
                </li>
                <li>
                    <NavItem name="Blog" path="blog" />
                </li>
            </ul>
            <div className="flex mt-auto pb-10 gap-3">
                <NavLink 
                    to="sign-in" 
                    className="border border-brand px-4 py-2 rounded-lg font-medium hover:shadow-[0_0_0_2px_rgba(52,152,219,1)] text-brand transition-shadow duration-300"
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
            <span 
            className="material-icons cursor-pointer absolute top-4 right-4"
            onClick={toggleMenu}
            >close</span>
        </div>
    );
}