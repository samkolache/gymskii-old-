
export default function Features() {
    return(
        <>
        <div className="px-6 py-10 bg-gray-100">
        <h5 className = "text-xl text-stats font-semibold text-center mb-2">WHAT DO WE OFFER?</h5>
        <h2 className="text-4xl text-brandHeading font-bold text-center mb-6">Everything you need</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <Card icon = "trending_up" title = "Visual Progress Tracking" p = "Log every workout and see your progress unfold with detailed graphs and visuals." />
                <Card icon = "alarm" title = "Supplement Reminders" p = "Track every supplement and set timely reminders to stay on top of your routine." />
                <Card icon = "restaurant" title = "Diet Tracking" p = "Track your important macros to ensure you're properly fueled" />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <Card icon = "dashboard" title = "Workout Dashboard" p = "View every aspect of your routine, all in one central hub" />
                <Card icon = "school" title = "Learn Effectively" p = "Take advantage of our free resources to improve how you workout" />
                <Card icon = "groups" title = "Community" p = "Join a community of driven individuals all striving for daily improvement." />
            </div>
        </div>
        </>
    )
}

export function Card({icon, title, p}) {
    return(
        <>
            <div className="max-w-sm lg:max-w-md px-8 py-10 flex flex-col items-center gap-4">
                    <span className="material-icons text-6xl text-brand">{icon}</span>
                    <h3 className="text-2xl font-medium text-stats">{title}</h3>
                    <p className="text-center text-md leading-relaxed">{p}</p>
                </div>
        </>
    )

}