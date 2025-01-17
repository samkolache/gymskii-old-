import Navbar from "../components/navbar/Navbar";
import Footer from "../home-views/sections/Footer";
import BlogRenderer from "../util/BlogRenderer";
import ProgressiveBlogData from "../data/blogData/progressiveBlogData.json"
import ProgImg from '../assets/prog-overload.avif'
import { Link } from "react-router-dom";

const blogDataWithImage = {
    ...ProgressiveBlogData,
    coverImage: ProgImg  // Replace the coverImage placeholder with the actual imported image
};

export default function ProgressiveBlog() {
    return(
        <>
            <Navbar />
            <BlogRenderer post = {blogDataWithImage} />
            <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8 mb-4 px-4 md:px-0">
                <div className="flex flex-col gap-2">
                        <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">How can gymskii help?</h2>
                        <div className="flex flex-col gap-4">
                            <p className="text-base md:text-[18px]">gymskii offers multiple features to ensure you are progressively overloading each week. It’s simple, you train hard, track your preferred method of 
                                overload(reps, weights), and view your stats! Gymskii offers visuals and statistics to make sure you are overloading each session.
                            </p>
                            <p className="text-base md:text-[18px]">
                            If gymskii notices that you haven’t increased in an exercise, it will notify you and suggest an increase you can do in the following session. 
                            You will notice an increase in muscle and strength if you utilize gymskii’s Gains Lab dashboard consistently. 
                            </p>
                            <p className="text-base md:text-[18px]">gymskii has multiple other features for your grind, read more about them here:  <Link to= "/features" className = "text-brand font-medium">Features</Link>.
                            We hope this article explained Progressive Overload clearly, happy training! 
                            </p>
                        </div>
                    </div>
            </div>
            
            <Footer />
        </>
    )
}