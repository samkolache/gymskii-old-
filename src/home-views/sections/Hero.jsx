import { NavLink } from "react-router-dom"

export default function Hero() {
    return(
        <>
        <div className="relative bg-[url(./assets/banner.jpg)] bg-center bg-cover h-[500px] w-full">
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative pl-12 justify-center flex flex-col items-start gap-4 h-full">
            <h1 className="text-white text-5xl font-bold leading-tight">
              Track <span className="text-brand">Smarter</span>, Train <span className="text-brand">Harder</span>
            </h1>
            <p className="text-white font-medium max-w-md hidden sm:block">
              With gymskii, track your workouts, crush your goals, and see real results—all in one place.
            </p>
            <NavLink
             to= "sign-up"
             className="text-white bg-brand hover:bg-brand600 transition duration-300 ease-in-out px-6 py-3 rounded-lg font-bold"
             >
                Log your first workout
             </NavLink>
          </div>
        </div>
        </>
    )

}