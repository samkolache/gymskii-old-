import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Hero from "../home-views/sections/Hero";
import Features from "../home-views/sections/Features";
import HowItWorks from "../home-views/sections/HowItWorks";

export default function Homepage() {
  return (
    <>
      <Navbar />
      {/* Section One */}
      <div className="mx-12 pt-10">
        <Hero />
        <Features />
        <HowItWorks />
      </div>
      <Outlet />
    </>
  );
}
