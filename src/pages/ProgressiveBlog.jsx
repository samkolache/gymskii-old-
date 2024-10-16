import Navbar from "../components/navbar/Navbar";
import Footer from "../home-views/sections/Footer";
import ProgImg from '../assets/prog-overload.avif'

export default function ProgressiveBlog() {
    return(
        <>
            <Navbar />
            <div className=" max-w-4xl flex flex-col space-y-5 mx-auto mt-24">
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
            <div className="max-w-4xl flex flex-col space-y-3 mx-auto">
                <p>Yo</p>

            </div>
            
            
            <Footer />
        </>
    )
}