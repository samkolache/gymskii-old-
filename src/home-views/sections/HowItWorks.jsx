import WorkoutIll from "../../assets/workout-ill.svg"
import StatsIll from "../../assets/stats-ill.svg"
import PrIll from '../../assets/pr.svg'
import { NavLink } from "react-router-dom"


export default function HowItWorks() {
    return(
        <>
            {/* container */}
            <div className="px-6 py-10">
                {/* Title */}
                <h5 className = "text-lg md:text-xl text-stats font-semibold text-center mb-2">HOW DOES GYMSKII WORK?</h5>
                <h2 className="text-3xl md:text-4xl text-brandHeading font-bold text-center mb-6">Three steps to smarter tracking </h2>

                {/* How it works Container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
                    {/* How it works step 1 */}
                    <div className="flex flex-col items-center gap-5 max-w-lg p-8">
                        <i className="fa-solid fa-1 text-5xl text-brand"></i>
                        <h3 className="text-2xl md:text-3xl font-medium text-stats">Crush a Workout</h3>
                        <p className="text-center font-medium">Go hit your normal routine and keep track whatever you want to improve(weight, reps, time etc). Make sure to work harder than last time!</p>
                        <img src = {WorkoutIll} className="w-48 h-48 object-contain pt-4" />
                    </div>
                    {/* How it works step 2 */}
                    <div className="flex flex-col items-center justify-center gap-5 max-w-lg p-8">
                        <i className="fa-solid fa-2 text-5xl text-brand"></i>
                        <h3 className="text-2xl md:text-3xl font-medium text-stats">Enter your PRs</h3>
                        <p className="text-center font-medium">Login to your Gains Lab dashboard and enter your workout for the day. You can also add your macros for the day while you're at it.</p>
                        <img src = {PrIll} className="w-48 h-48 object-contain pt-4" />
                    </div>
                    {/* How it works step 3 */}
                    <div className="flex flex-col items-center justify-center gap-5 max-w-lg p-8">
                        <i className="fa-solid fa-3 text-5xl text-brand"></i>
                        <h3 className="text-2xl md:text-3xl font-medium text-stats">View your visuals</h3>
                        <p className="text-center font-medium">Check out your progression through charts and graphs to make sure you are getting stronger every week, that's progressive overload!</p>
                        <img src = {StatsIll} className="w-48 h-48 object-contain pt-4" />
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-6">
                    <h4 className=" text-2xl md:text-3xl font-semibold text-brandHeading">Ready for some gains?</h4>
                    <NavLink 
                    to="/sign-up" 
                    className="bg-brand px-6 py-3 rounded-lg font-semibold text-white hover:bg-brand600 transition duration-300 ease-in-out mx-auto"
                >
                    Track your next workout now
                    </NavLink>
                </div>
                

            </div>
            
       
        </>
    )
}


