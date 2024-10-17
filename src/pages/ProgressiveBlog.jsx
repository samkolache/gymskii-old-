import Navbar from "../components/navbar/Navbar";
import Footer from "../home-views/sections/Footer";
import ProgImg from '../assets/prog-overload.avif'
import { NavLink } from "react-router-dom";

export default function ProgressiveBlog() {
    return(
        <>
            <Navbar />
            {/* Hero/Title */}
            <div className=" max-w-4xl flex flex-col space-y-5 mx-auto mt-24">
                {/* Breadcrumbs */}
                <div className="flex text-lg">
                    <NavLink to = "/blog" className= "text-brand font-semibold underline">Blog</NavLink>
                    <span className="material-icons">chevron_right</span>
                    <p className="text-gray-600"> How to Progressive Overload in the Gym</p>
                </div>
                <h1 className="text-5xl font-bold">How to Progressive Overload in the Gym</h1>
                <p >By: <span className="text-brand font-bold">Sam Kotecha</span> </p>
                <span className="h-[2px] bg-black w-[80px] block"></span>
                <p className="text-xl">Ready to take your strength to the next level? Progressive overload is the key to consistent gains and long-term results. 
                    In this guide, we’ll break down what progressive overload really means, why it’s essential for building muscle and strength, and how to apply it to your workouts effectively. 
                    Let’s dive into the science of getting stronger, one rep at a time."</p>
            </div>
            <div className="max-w-4xl mx-auto mt-4">
                <img src= {ProgImg} className="w-full object-cover max-h-[500px]" />
            </div>
            {/* Actual Article Container */}
            <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8">
                {/* Article Section */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-[33px] font-bold">What even is Progressive Overloading?!</h2>
                    <div className="flex flex-col gap-4 ">
                        <p className="text-[18px]">Progressive overloading is a technique that involves increasing the intensity of your routine compared to the last session. 
                        This usually means increasing the weight/reps for each exercise as a way to “progressively overload” your muscles. 
                        </p>
                        <p className="text-[18px]">This technique allows you to overcome plateaus and continually get stronger as time goes on. The idea is to make the session 
                            harder than last time, causing your muscles to adapt to the new resistance you are placing.
                        </p>
                        <p className="text-[18px]">Progressive overloading isn’t limited to strength training. This principle can be applied to all forms of exercise, including running and swimming. 
                            You may be wondering about the science on exactly how this all works, let’s dive into that next(or you can skip and see how gymskii can help you 
                            progressive overload more effectively).
                        </p>
                    </div>
                    
                </div>
                {/* Article Section */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-[33px] font-bold">How does Progressive Overloading Work Behind the Scenes?</h2>
                    <div className="flex flex-col gap-2">
                        <p className="text-[18px]">Before we dive into Progressive Overload, we need to understand how our body builds muscle. When we workout our muscle fibers 
                            experience microscopic tears which causes our body to repair and reinforce these fibers. This process is known as “muscle protein synthesis”. 
                        </p>
                        <p className="text-[18px]">
                        Now that we understand how muscle fibers repair and grow, we can now dive into progressive overload. For muscles to continue growing and adapting, 
                        they need to face new challenges. If every session we use the same weight, perform the same amount of repetitions ect, our muscles have no reason to 
                        grow and adapt. Progressively overloading gives our muscles the stimulus they need to rebuild and strengthen the muscle fibers.
                        </p>
                        <p className="text-[18px]">It’s as simple as that, everytime you go into a new session, challenge yourself harder in order to force new muscle tears and repairs. Remember to make these 
                            increases gradual in order to be safe and not injure yourself!
                        </p>
                    </div>
                </div>
                {/* Article Section */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-[33px] font-bold">Different Ways of Progressive Overloading</h2>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[23px] font-semibold">Increase Volume</h3>
                            <p className="text-[18px]">Week 1: Perform 5-8 reps of a Bicep Curl at X weight</p>
                            <p className="text-[18px]">Week 2: Perform 8-12 reps of a Bicep Curl at X weight</p>
                            <p className="text-[18px]">Week 3: Perform 12-15 reps of a Bicep Curl at X weight</p>
                            <p className="text-[18px]">In this example, the weight stays the same but the reps gradually increase weekly</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[23px] font-semibold">Increase Weight</h3>
                            <p className="text-[18px]">Week 1: Perform Bicep Curls with 10-12 lb dumbbells</p>
                            <p className="text-[18px]">Week 2: Perform Bicep Curls with 12-15 lb dumbbells</p>
                            <p className="text-[18px]">Week 3: Perform Bicep Curls with 15-18 lb dumbbells</p>
                            <p className="text-[18px]">In this example, you are gradully increasing the weight instead of reps</p>
                        </div>
                      
                    </div>
                </div>
                {/* Article Section */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-[33px] font-bold">How can gymskii help?</h2>
                    <div className="flex flex-col gap-2">
                        <p className="text-[18px]">gymskii offers multiple features to ensure you are progressive overloading each week. It’s simple, you train hard, track your preferred method of 
                            overload(reps, weights), and view your stats! Gymskii offers visuals and statistics to make sure you are overloading each session
                        </p>
                        <p className="text-[18px]">
                        If gymskii notices that you haven’t increased in an exercise, it will notify you and suggest an increase you can do the following session. 
                        You will notice an increase of muscle and strength if you utilize gymskii’s Gains Lab dashboard consistently. 
                        </p>
                        <p className="text-[18px]">gymskii has multiple other features for your grind, read more about them here:  <NavLink to= "/features" className = "text-brand font-semibold">Features</NavLink>.
                         We hope this article explained Progressive Overload clearly, happy training! 
                        </p>
                    </div>
                </div>
            </div>
            
            
            <Footer />
        </>
    )
}