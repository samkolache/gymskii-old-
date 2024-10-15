import Navbar from "../components/navbar/Navbar";
import Footer from "../home-views/sections/Footer";
import aboutImg from '../assets/about-us-img.jpg'

export default function About() {
    return(
        <>
            <Navbar />
            <div className="mx-24 mt-10">
                <h2 className="text-[33px] font-bold mb-4">About Us</h2>
                <div className="grid grid-cols-2 gap-48 items-center">
                    <div className="font-light">
                        <p className="mb-4">gymskii was created to help you become the version you always wanted to be, in the most effective way.</p>

                        <p className="mb-4">The term "progressive overloading" is thrown around the fintess community alot. If you don't know, 
                        Progressive overloading is the method of gradually increaing the difficulty in your workouts to consitently 
                        improve your strength and build muscle gymskii was created to make this process more simpler and effective with 
                        visuals and stats created from your PRs. 
                        </p>

                        <p className="mb-4">
                            This idea came to me while tracking my own workouts within an excel sheet. I would view my progress each week and
                            make sure I lifted harder than last time. I always wanted to see my progress come to life in a line graph, hence 
                            this project began. I want everyone to understand the benefit of tracking your lifts in order to consistently hit
                            your fitness goals
                        </p>
                        <p className="mb-4">
                            gymskii plans to become the central hub for everything workout. The central dashboard, called The Gains Lab, is an area
                            where you can view and add *almost everything about your workout. This is somewhere you can come post-workout to see what you 
                            are doing good and what you can improve. As time goes on, features will be added to further make The Gains Lab an all in one 
                            stop for all your workout needs
                        </p>
                        <p className="mb-4">
                            gymskii is all about catering to the user, you. If you have anything you want to see in your dashboard, fill out the form below.
                            Any feedback is greatly appreciated!
                        </p>
                        <p className="font-bold">GYMSKII IS DRIVEN BY:</p>
                        <ul className="list-disc pl-8">
                            <li className=""> <span className="font-semibold text-gray-600">Sam Kotecha</span>  - Founder and Cheif Exectuive Officer</li>
                        </ul>
                    </div>
                    <img src= {aboutImg} alt="" className="rounded-lg" />
                </div>
                
            </div>
            <Footer />
        </>
    )
}