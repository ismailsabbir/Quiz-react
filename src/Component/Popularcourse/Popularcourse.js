import React from "react";
import "./Popularcourse.css";
import image from "../../../src/images/course.jpg";
const Popularcourse = () => {
  return (
    <div className="popular-container">
      <div className="popular">
        <div className="popular-left">
          <h1>
            Top ten most popular courses<br></br> for international students
          </h1>
          <img src={image} alt="" />
          <p>
            Sample text. Click to select the text box.<br></br> Click again or
            double click to start editing <br></br> the text.
          </p>
        </div>
        <div className="popular-right">
          <h6>HTML Course</h6>
          <h6>CSS Course</h6>
          <h6>Bootstrap Course</h6>
          <h6>React Course</h6>
          <h6>Javascript Course</h6>
          <h6>Node js Course</h6>
          <h6>Express Course</h6>
          <h6>Mongodb Course</h6>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularcourse;
