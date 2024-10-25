import { NavLink } from "react-router-dom";

export default function BlogRenderer({ post }) {
    return (
        <>
            {/* Hero Container */}
            <div className="max-w-4xl flex flex-col space-y-5 mx-auto mt-12 px-4">
                {/* Breadcrumb Container */}
                <div className="flex text-lg flex-wrap">
                    <NavLink to="/blog" className="text-brand font-semibold underline">
                        {post.breadcrumb.category}
                    </NavLink>
                    <span className="material-icons">chevron_right</span>
                    <p className="text-gray-600">{post.breadcrumb.title}</p>
                </div>

                {/* Start of Hero Content */}
                <h1 className="text-3xl md:text-5xl font-bold">{post.title}</h1>
                <p className="text-base md:text-lg">
                    By: <span className="text-brand font-bold">{post.author}</span>
                </p>
                <span className="h-[2px] bg-black w-[80px] block"></span>
                <p className="text-lg md:text-xl">{post.intro}</p>
                {/* End of Hero Content */}
            </div>

            {/* Hero Image */}
            <div className="max-w-4xl mx-auto mt-4 px-4 md:px-0">
                <img src={post.coverImage} className="w-full object-cover max-h-[300px] md:max-h-[500px]" alt="Blog Cover" />
            </div>

            {/* Blog Content Container */}
            <div className="max-w-4xl flex flex-col mx-auto gap-8 mt-8 px-4 md:px-0">
                {post.sections.map((section, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <h2 className="text-2xl md:text-3xl font-semibold text-brandHeading">{section.heading}</h2>

                        {/* Map through if section to get paragraphs */}
                        {section.type === "section" && (
                            <div className="flex flex-col gap-4">
                                {section.content.map((paragraph, index) => (
                                    <p key={index} className="text-base md:text-[18px]">{paragraph}</p>
                                ))}
                            </div>
                        )}

                        {/* Handle Tips Section */}
                        {section.type === "tips" && (
                            section.tips.map((tip, tipIdx) => (
                                <div key={tipIdx} className="flex flex-col gap-4">
                                    <h3 className="text-lg md:text-[23px] font-semibold">{tip.title}</h3>
                                    {tip.steps.map((step, index) => {
                                        const stepParts = step.split(":");
                                        if (stepParts.length > 1) {
                                            const stepTitle = stepParts[0];
                                            const stepDesc = stepParts[1];

                                            return (
                                                <p key={index} className="text-base md:text-[18px]">
                                                    <strong>{stepTitle}:</strong> {stepDesc}
                                                </p>
                                            );
                                        } else {
                                            return (
                                                <p key={index} className="text-base md:text-[18px]">{step}</p>
                                            );
                                        }
                                    })}
                                </div>
                            ))
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
