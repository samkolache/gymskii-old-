import Navbar from "../components/navbar/Navbar";
import Footer from "../home-views/sections/Footer";
import aboutImg from '../assets/about-us-img.jpg'
import { NavLink } from "react-router-dom";
import OverloadImg from '../assets/workout-ill.svg'
import StatsImg from '../assets/stats-ill.svg'
import CeoIMG from '../assets/ceo-ill.png'

export default function About() {
    return(
        <>
            <Navbar />
            {/* hero */}
            <div className="mx-auto max-w-4xl mt-24 text-center space-y-4">
                <h1 className="text-5xl font-bold max-w-[605px]  mx-auto">Empowering you to Track, Visualize, and Elevate your Strength Jourey</h1>
                <p className="text-[23px] mt-2 max-w-3xl mx-auto">gymskii is your central platform for bringing together everything fitness related. Whether you are a beginner or a seasoned gym rat, anyone can benefit from gymskii's 
                    tracking and visuals
                </p>
            </div>
            {/* Progressive Overload Section */}
            <div className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                    Making Progressive Overload Simpler and Effective
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700">
                    Progressive overloading is the method of gradually increasing the difficulty in your workouts to consistently improve your strength and build muscle. With Gymskii, you can easily track your progress through charts and data, ensuring you're consistently getting stronger. We believe that achieving your fitness goals comes from pushing yourself to be better than your last session.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700">
                    <NavLink to='/blog' className="text-brand underline font-semibold">Visit this blog post</NavLink> to learn more about progressive overloading and how it can help on your journey.
                    </p>
                </div>
                <img src={OverloadImg} className="w-full max-w-sm mx-auto rounded-lg shadow-md" alt="Progressive Overload Illustration" />
            </div>
             {/* Hub Section */}
            <div className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <img src={StatsImg} className="w-[450px] h-[350px] mx-auto rounded-lg shadow-md" alt="Progressive Overload Illustration" />
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                    Creating a Hub for all your Workout Needs
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700">
                    Deemed the "Gains Lab", gymskii offers a central dashboard to keep track of everything fitness related. You can create and view workouts, track your progress, and even
                    keep track of your basic macros. gymskii wants to become the hub for keeping track of your fitness, in a smarter way
                    </p>
                </div> 
            </div>
            {/* Made my people who workout section */}
            <div className="max-w-5xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">
                    Made by People who Care and Know
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700">
                    gymskii was founded by Sam Kotecha, who tracked his progression through an excel sheet. He always wanted to see how his stats looked visually, hence gymskii was born
                                             He tried other tracking apps but most are made by people who don't truly appreciate fitness and understand how it works today. We hope gymskii delivers what you need. We
                                             are always looking to improve, so please email <a href="mailto:sameerzkotecha@gmail.com" className="text-brand underline font-semibold">sam@gymskii.com</a> with any feedback!                    
                                              </p>
                </div>
                <img src={CeoIMG} className="w-[450px] h-[350px] mx-auto rounded-lg shadow-md" alt="Progressive Overload Illustration" />
            </div>
            {/* CTA */}
            <div className="w-full mt-24 mb-24 bg-gray-200 py-12">
                <div className="flex flex-col items-center gap-5">
                    <h2 className="text-3xl font-bold">TRACK YOUR FIRST WORKOUT TODAY</h2>
                    <NavLink 
                            to="sign-up" 
                            className="bg-brand px-8 py-4 rounded-lg font-medium text-white text-xl hover:bg-brand600 transition duration-300 ease-in-out"
                        >
                        Log Workout
                    </NavLink>
                </div>
                
            </div>
                
            <Footer />
        </>
    )
}
