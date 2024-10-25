import Navbar from "../components/navbar/Navbar";
import Footer from "../home-views/sections/Footer";
import BlogRenderer from "../util/BlogRenderer";
import MobileBlogData from "../data/blogData/mobileBlogData.json"
import MobileImg from '../assets/mobile.avif'
import { NavLink } from "react-router-dom";

const blogDataWithImage = {
    ...MobileBlogData,
    coverImage: MobileImg  // Replace the coverImage placeholder with the actual imported image
};



export default function MobileBlog() {
    return(
        <>
            <Navbar />
            <BlogRenderer post = {blogDataWithImage} />
            <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8 mb-4 px-4 md:px-0">
                <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <p className="text-base md:text-[18px]">That's it for now folks, happy progressive overloading from all of us at gymskii!</p>
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}