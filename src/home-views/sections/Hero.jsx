import { NavLink } from "react-router-dom"
import Mockup from "../../assets/macbook-mock.png"

export default function Hero() {
    return(
        <>
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center px-8 py-10">
          {/* Intro/left */}
          <div className="flex flex-col space-y-4 items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Track <span className="text-brand">Smarter</span>, 
              Train <span className="text-brand">Harder</span>
            </h1>
            <p className="text-xl max-w-lg">
              With gymskii, track your workouts, crush your goals, and see real results—all in one place.
            </p>
            <NavLink 
              to="/sign-up" 
              className="bg-brand px-6 py-3 rounded-lg font-semibold text-white hover:bg-brand600 transition duration-300 ease-in-out"
            >
              Log your first workout
            </NavLink>
          </div>

          {/* Image/right */}
          <div className="hidden md:flex justify-center">
            <img src={Mockup} alt="Product Mockup" className=" w-full max-w-full h-auto object-contain" />
          </div>
        </div>
        </>
    )

}