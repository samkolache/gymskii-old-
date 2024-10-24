import { Link, NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full max-w-screen-lg mx-auto">  {/* Center on desktop */}
                
                {/* logo and socials */}
                <div className="flex flex-col gap-5 w-full md:w-1/3 py-5 items-center md:items-start">  {/* Adjust width for desktop */}
                    <div className="flex flex-col items-center md:items-start">
                        <NavLink to="/"><h1 className="text-xl font-bold">gym<span className="text-brand">skii</span></h1></NavLink>
                        <p className="font-semibold text-center md:text-left">Track <span className="text-brand">Smarter</span>, Train <span className="text-brand">Harder</span></p>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-6">
                        <a href="https://www.instagram.com/gymskii/"><i className="fa-brands fa-instagram text-4xl text-stats"></i></a>
                        <a href="https://x.com/gymskii_app"><i className="fa-brands fa-twitter text-4xl text-stats"></i></a>
                        <a href="https://www.linkedin.com/company/gymskii/about/"><i className="fa-brands fa-linkedin text-4xl text-stats"></i></a>
                    </div>
                </div>

                {/* quick links */}
                <div className="flex flex-col w-full md:w-1/3 py-5 items-center md:items-start">
                    <h6 className="font-semibold text-lg text-brandHeading">Quick Links</h6>
                    <ul className="text-center md:text-left">
                        <li><FooterLink title="About" path="/about" /></li>
                        <li><FooterLink title="Features" path="/features" /></li>
                        <li><FooterLink title="Blog" path="/blog" /></li>
                        <li><FooterLink title="Contact Us" path="/contact-us" /></li>
                    </ul>
                </div>

                {/* account */}
                <div className="flex flex-col w-full md:w-1/3 py-5 items-center md:items-start">
                    <h6 className="font-semibold text-lg text-brandHeading">Account Links</h6>
                    <ul className="text-center md:text-left">
                        <li><FooterLink title="Sign in" path="/sign-in" /></li>
                        <li><FooterLink title="Sign up" path="/sign-up" /></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

function FooterLink({ path, title }) {
    return (
        <Link className="hover:text-brand" to={path}>{title}</Link>
    );
}
