import Navbar from "../components/navbar/Navbar"
import Footer from "../home-views/sections/Footer"
import BlogImg from '../assets/blog-ill.png'
import ProgOverload from "../assets/prog-overload.avif"

export default function Blog() {
    return(
        <>
            <Navbar />
            {/* Hero */}
            <div className=" max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-12">
                <div className="flex flex-col gap-8">
                    <h1 className="text-5xl font-bold">Articles from gym<span className="text-brand">skii</span></h1>
                    <p>Gymskiii is on a mission to simplify and supercharge your fitness journey. Explore the articles below to see what 
                        we’re building and discover helpful fitness tips to elevate your routine. Happy training!
                    </p>
                    <span className="h-[2px] bg-black w-[80px] block"></span>
                </div>
                <img src= {BlogImg} alt="" className="w-full" />
            </div>
            <BlogCard />
            <Footer />
        </>
        
    )
}


function BlogCard() {
    return(
        <>
            <img src={ProgOverload} alt="" className="w-[380px] h-[200px]" />
        </>
    )
}