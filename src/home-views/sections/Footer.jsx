import { NavLink } from "react-router-dom"
import NavItem from "../../components/navbar/NavItem"

export default function Footer() {
    return(
        <>
            <div className="bg-gray-100 mt-10">
                <div className="flex justify-evenly">
                    {/* logo and socials */}
                    <div className="flex flex-col gap-7 max-w-md py-5">
                        <div className="flex flex-col">
                            <NavLink to= "/"><h1 className='text-xl font-bold'>gym<span className='text-brand'>skii</span></h1> </NavLink>
                            <p className="font-semibold">Track <span className="text-brand">Smarter</span> , Train <span className="text-brand">Harder</span> </p>
                        </div>
                        <div className="flex justify-start items-center gap-6">
                            <a href="https://www.instagram.com/gymskii/"><i className="fa-brands fa-instagram text-4xl "></i></a>
                            <a href="https://x.com/gymskii_app"><i className="fa-brands fa-twitter text-4xl "></i></a>
                            <a href="https://www.linkedin.com/company/gymskii/about/"><i className="fa-brands fa-linkedin text-4xl "></i></a>
                        </div>
                    </div>
                    {/* quick links */}
                    <div className="flex flex-col max-w-md py-5">
                        <h2 className="font-semibold">Quick Links</h2>
                        <ul>
                            <li><NavItem name = "About" path = "about"  /></li> 
                            <li><NavItem name = "Features" path = "features"  /></li>
                            <li><NavItem name = "Blog" path= "blog"  /></li>
                            <li><NavItem name = "Contact Us" path= "contact-us"  /></li>
                        </ul>
                    </div>
                    {/* account */}
                    <div className="flex flex-col max-w-md py-5">
                        <h2 className="font-semibold">Account Links</h2>
                        <ul>
                            <li><NavItem name = "Sign in" path = "sign-in"  /></li> 
                            <li><NavItem name = "Sign up" path = "sign-up"  /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}