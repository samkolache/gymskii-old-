import { NavLink } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Footer from "../home-views/sections/Footer"
import BlogImg from '../assets/blog-ill.svg'
import ProgOverload from "../assets/prog-overload.avif"
import Mobile from "../assets/mobile.avif"
import ProtienImg from "../assets/meat.avif"

export default function Blog() {
    return(
        <>
            <Navbar />
            {/* Page Container */}
            <div className="mt-12">

                {/* Hero Container */}
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-10">

                    {/* Left side */}
                    <div className="flex flex-col space-y-5 w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Articles from gym<span className="text-brand">skii</span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-500">
                            gymskii is on a mission to simplify and supercharge your fitness journey. Explore the articles below to see what 
                            we’re building and discover helpful fitness tips to elevate your routine. Happy training!
                        </p>
                        <span className="h-[2px] bg-black w-[80px] block mx-auto md:mx-0"></span>
                    </div>

                        {/* Right Side */}
                    <img 
                            src={BlogImg} 
                            className="w-64 h-64 md:w-96 md:h-96 object-contain hidden md:block" 
                            alt="Blog Illustration" 
                    />
                </div>


                {/* Blog Posts Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mt-8 md:mt-16 mb-8 px-8">
                    <BlogCard img = {ProgOverload} cat = "Fitness Tips" title = "How to Progressive Overload in the Gym" path = "/blog/progressive-overload" 
                    desc = "What even is progressive overloading? In this article, we explore how to perform this technique correctly and how to best optimize it for your goals."
                    author = "Sam Kotecha"
                    />
                    <BlogCard img = {Mobile} cat = "gymskii HQ" title = "Mobile App for gymskii coming soon!" path = "/blog/mobile"
                    desc = "Come check out our plans for a gymskii mobile app! It'll be even easier to track your workouts while at the gym."
                    author = "Sam Kotecha"
                    />
                    <BlogCard img = {ProtienImg} cat = "Diet Tips" title = "How much Protein do I really need?" path = "/blog/protein"
                    desc = "A lot of people say different things about how much protein you really need to gain muscle. Dive into this article to learn from some official studies."
                    author = "Sam Kotecha"
                    />
                </div>
            </div>
            
            <Footer />
        </>
        
    )
}


function BlogCard({img, cat, title, path, desc, author}) {
    return(
        <>
        <div className="flex flex-col space-y-2 bg-s max-w-7xl">
            <img src={img} alt="" className="w-full h-60 object-cover rounded-lg" />
            <p className="text-sm text-gray-500">{cat}</p>
            <NavLink to = {path} className= "text-2xl font-bold">{title}</NavLink>
            <p className="text-gray-500">{desc}</p>
            <p className="text-[15px] text-brand font-semibold">{author}</p>
        </div>
            
        </>
    )
}