import Navbar from "../components/navbar/Navbar";
import Footer from "../home-views/sections/Footer";
import BlogRenderer from "../util/BlogRenderer";
import ProtienBlogData from "../data/blogData/protienBlogData.json"
import ProtienImg from '../assets/meat.avif'
import { NavLink } from "react-router-dom";

const blogDataWithImage = {
    ...ProtienBlogData,
    coverImage: ProtienImg  // Replace the coverImage placeholder with the actual imported image
};



export default function MobileBlog() {
    return(
        <>
            <Navbar />
            <BlogRenderer post = {blogDataWithImage} />
            <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8">
                <div className="flex flex-col gap-2">
                        <h2 className="text-[33px] font-bold">And the studies reveal!</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px]">Most studies reveal a higher amount of protein intake is beneficial for muscle gain. However, even with these studies, 
                            the number still remains a bit controversial

                            </p>
                            <p className="text-[18px]">
                            According to the <a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0177-8#Sec33" className="text-brand">International Society of Sports Nutrition</a>, individuals should consume 1.4 to 2.0 g of protein 
                            per kg(0.64 to 0.91 grams per lb) of bodyweight to optimize muscle gain. This recommendation aligns with the 
                            Institute of Medicine’s Acceptable Macronutrient Distribution Range and can vary depending on factors such as 
                            exercise intensity, protein quality, and overall energy intake. Additionally, consuming protein post-workout or 
                            before sleep can enhance muscle protein synthesis and recovery, further supporting improvements in muscle size, 
                            strength, and body composition over time.

                            </p>
                            <p className="text-[18px]">
                            Based on this study, a man weighing 180 lbs would need to consume between 115.2 to 163.8g of protein per day to 
                            build muscle. A way bigger jump from our .8kg from before, but studies lean towards a higher protein diet for 
                            optimal muscle gain. 
                            </p>
                            <p className="text-[18px]">This number should be evaluated and personalized based on your goals and current 
                            activity status. If you want suggestions on how much protein you should consume, log into your gymskii dashboard 
                            and use our diet tracker to optimize your amount!</p>
                        </div>
                    </div>
            </div>
            <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8">
                <div className="flex flex-col gap-2">
                        <h2 className="text-[33px] font-bold">What are some good sources of protein?</h2>
                        <div className="flex flex-col gap-2">
                            <p className="text-[18px]"> Below are some great sources of protein to add to your diet! </p>
                            <ul className="list-disc text-[18px] ml-8 flex flex-col gap-2">
                                <li>
                                    Chicken Breast(35g of protein per 4 oz)
                                </li>
                                <li>
                                    Salmon(25g of protein per 4 oz)
                                </li>
                                <li>
                                    Lean Ground Beef(24g of protein per 4 oz)
                                </li>
                                <li>
                                    Tuna(26g of protein per 4 oz)
                                </li>
                                <li>
                                    Eggs(13g of protein per 4 oz)
                                </li>
                            </ul>
                            <p className="text-[18px] pt-4"> Now you know the science, reccomended amount, and good sources of protein. 
                            Now go out there and crush your next workout!
                            </p>
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}