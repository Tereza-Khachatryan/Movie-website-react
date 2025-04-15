import React, { useState} from "react";
import blogData from '../data/blogData.json'
import BlogCard from "./BlogCard";

function Blog(){
    const [blogs, setBlogs] = useState(blogData)

    return (
        <section id="blogs" className="blogs">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Our blog</h4>
                </div>
                <div className="row mt-5">
                    {
                        blogs && 
                        blogs.length > 0 && 
                        blogs.map(blog=>{
                            return (
                                <BlogCard key={blog._id} blog={blog}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog