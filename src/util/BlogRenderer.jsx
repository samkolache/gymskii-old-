import { NavLink } from "react-router-dom"


export default function BlogRenderer({post}) {
    return(
        <>
            {/* Hero Container */}
            <div className=" max-w-4xl flex flex-col space-y-5 mx-auto mt-24">
                {/* Breadcrumb Container */}
                <div className="flex text-lg">
                    <NavLink to = "/blog" className= "text-brand font-semibold underline">{post.breadcrumb.category}</NavLink>
                    <span className="material-icons">chevron_right</span>
                    <p className="text-gray-600">{post.breadcrumb.title}</p>
                </div>

                {/* Start of Hero Content */}
                <h1 className="text-5xl font-bold">{post.title}</h1>
                <p >By: <span className="text-brand font-bold">{post.author}</span> </p>
                <span className="h-[2px] bg-black w-[80px] block"></span>
                <p className="text-xl">{post.intro}</p>
                {/* End of Hero Content */}
            </div>
            
             {/* Hero Image */}
            <div className="max-w-4xl mx-auto mt-4">
                <img src= {post.coverImage} className="w-full object-cover max-h-[500px]" />
            </div>
        </>
    )
}