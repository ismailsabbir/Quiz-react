import React from "react";
import Blog from "../Blog/Blog";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="container">
      <div className="blogs">
        <u>
          <h4>This is Blog </h4>
        </u>
        <Blog></Blog>
      </div>
    </div>
  );
};

export default Blogs;
