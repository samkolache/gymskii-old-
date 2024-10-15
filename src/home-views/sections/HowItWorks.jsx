
export default function HowItWorks() {
    return(
        <>
        <div className="mt-10">
            <h2 className="text-[33px] font-bold">How it Works</h2>
            <div className="flex flex-col lg:flex-row justify-between items-center py-10 gap-10">
                <Step icon = "looks_one" title = "Crush your Workout" p = "Keep track of your best weight & rep combo for each exercise while you workout(mobile app coming soon!)" />
                <Step icon = "looks_two" title = "Log your Results" p = "Use gymskii to log your PRs and take notes, you’ll need about two weeks worth of data to get started" />
                <Step icon = "looks_3" title = "View your Data" p = "Analyze your progress visually to ensure you are getting stronger each week. Don't forget to progressively overload!" />
            </div>
        </div>
        </>
    )
}


function Step({icon,title,p }) {
    return(
        <>
            <div className="flex flex-col gap-4 items-center border-4 border-gray-100 max-w-md  px-8 py-16 h-80 rounded-lg">
                <span className="material-icons text-5xl text-brand">{icon}</span>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm text-center leading-relaxed max-w-sm">{p}</p>
            </div>
        </>
    )
}