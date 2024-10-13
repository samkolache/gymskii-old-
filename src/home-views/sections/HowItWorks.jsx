
export default function HowItWorks() {
    return(
        <>
            <h2 className="text-[40px] pt-10 font-bold">How it Works</h2>
            <div className="pt-5 flex justify-between items-center">
                <Step icon = "looks_one" title = "Crush your Workout" p = "Keep track of your best weight & rep combo for each exercise(mobile app coming soon!)" />
                <Step icon = "looks_two" title = "Log your Results" p = "Use gymskii to log your PRs and take notes, you’ll need about two weeks worth of data to get started" />
                <Step icon = "looks_3" title = "View your Data" p = "Analyze your progress visually to ensure you are getting stronger each week. Don’t forget to progressively overload!" />
            </div>
        </>
    )
}


function Step({icon,title,p }) {
    return(
        <>
            <div className="flex flex-col gap-4 items-center  max-w-md">
                <span className="material-icons text-5xl text-brand">{icon}</span>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm text-center leading-relaxed">{p}</p>
            </div>
        </>
    )
}