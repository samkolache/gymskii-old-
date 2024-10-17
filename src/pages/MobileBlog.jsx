import Navbar from "../components/navbar/Navbar";
import Footer from "../home-views/sections/Footer";
import BlogRenderer from "../util/BlogRenderer";
import ProgressiveBlogData from "../data/blogData/progressiveBlogData.json"
import ProgImg from '../assets/prog-overload.avif'

const blogDataWithImage = {
    ...ProgressiveBlogData,
    coverImage: ProgImg  // Replace the coverImage placeholder with the actual imported image
};



export default function MobileBlog() {
    return(
        <>
            <Navbar />
            <BlogRenderer post = {blogDataWithImage} />
            <Footer />
        </>
    )
}