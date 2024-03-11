import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/blog-thumb-3.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-1.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Tech Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Alok Jha"
                    date="July 8 2023"
                    image={Blog1}
                    title="How to Upload project to Github"
                    description="Github Tips & Tricks"
                    blogLink = "https://youtu.be/jsKHRFYMb80?si=PBHgi8lT9f52daBd"
                />
                <BlogCard
                    user="Alok Jha"
                    date="Sept 18 2023"
                    image={Blog2}
                    title="The Complete Guide to Accessing Free Paid Courses on Coursera"
                    description="Unlock your free course."
                    blogLink = "https://youtu.be/rbb1yS1KMyo?si=gkYnieoI0PidZR8R"
                />
                <BlogCard
                    user="Alok Jha"
                    date="Sept 10 2023"
                    image={Blog3}
                    title="Learn Programming in hindi Website"
                    description="Programming concept in hindi."
                    blogLink = "https://youtu.be/oaQqG21E20c?si=WqcQOqjibvqfepbh"
                />
            </div>
        </Section>
    );
};

export default Blogs;
