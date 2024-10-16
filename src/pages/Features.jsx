import Navbar from "../components/navbar/Navbar"
import { Card } from "../home-views/sections/Features"
import Footer from "../home-views/sections/Footer"

export default function Features() {
    return(
        <>
            <Navbar />
            <div className="text-center flex flex-col gap-4 mt-24">
                <h1 className="text-5xl font-bold">What gym<span className="text-brand">skii</span> offers:</h1>
                <p className="text-[23px] text-gray-500">From visuals to your diet, gymskii offers a central dashboard called the "Gains Lab"</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 pt-5">
                <Card icon = "trending_up" title = "Visual Progress Tracking" p = "Log every workout and see your progress unfold with detailed graphs and visuals." />
                <Card icon = "alarm" title = "Supplement Reminders" p = "Track every supplement and set timely reminders to stay on top of your routine." />
                <Card icon = "restaurant" title = "Diet Tracking" p = "Track your important macros to ensure you're properly fueld" />
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 pt-5">
                <Card icon = "dashboard" title = "Workout Dashboard" p = "View every aspect of your routine, all in one central hub" />
                <Card icon = "school" title = "Learn Effectively" p = "Take advantage of our free resources to improve how your workout" />
                <Card icon = "groups" title = "Community" p = "Join a community of driven individuals all striving for daily improvement." />
            </div>
            
            <Footer />
        </>
        
    )
}