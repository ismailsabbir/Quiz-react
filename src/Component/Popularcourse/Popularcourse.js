import React from "react";
import "./Popularcourse.css";
import image from "../../../src/images/course.jpg";
const Popularcourse = () => {
  return (
    <div className="popular-container">
      <div className="popular">
        <div className="popular-left">
          <h3>
            Top ten most popular Quiz<br></br> for international students
          </h3>
          <img src={image} alt="" />
          <h6 className="text">
            Sample text. Click to select the text box.<br></br> Click again or
            double click to start editing <br></br> the text.
          </h6>
        </div>
        <div className="popular-right">
          <h6>HTML Quiz</h6>
          <h6>CSS Quiz</h6>
          <h6>Bootstrap Quiz</h6>
          <h6>React Quiz</h6>
          <h6>Javascript Quiz</h6>
          <h6>Node js Quiz</h6>
          <h6>Express Quiz</h6>
          <h6>Mongodb Quiz</h6>
          <div className="left-arrow">
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
