
export default function Features() {
    return(
        <>
            <h2 className="text-[40px] pt-10 font-bold">Features</h2>
            <div className="flex justify-center items-center gap-5 pt-5">
                <Card icon = "trending_up" title = "Visual Progress Tracking" p = "Log every workout and see your progress unfold with detailed graphs and visuals." />
                <Card icon = "alarm" title = "Supplement Reminders" p = "Track every supplement and set timely reminders to stay on top of your routine." />
                <Card icon = "restaurant" title = "Diet Tracking" p = "Track your important macros to ensure you're properly fueld" />
            </div>
            <div className="flex justify-center items-center gap-5 pt-5">
                <Card icon = "dashboard" title = "Workout Dashboard" p = "View every aspect of your routine, all in one central hub" />
                <Card icon = "school" title = "Learn Effectively" p = "Take advantage of our free resources to improve how your workout" />
                <Card icon = "groups" title = "Community" p = "Join a community of driven individuals all striving for daily improvement." />
            </div>
        </>
    )
}

function Card({icon, title, p}) {
    return(
        <>
            <div className="bg-gray-100 max-w-sm px-8 py-10 flex flex-col items-center gap-4 rounded-lg">
                    <span className="material-icons text-5xl text-brand">{icon}</span>
                    <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
                    <p className="text-center text-gray-700 text-sm leading-relaxed">{p}</p>
                </div>
        </>
    )

}