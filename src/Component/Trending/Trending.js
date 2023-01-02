import React from "react";
import "./Trending.css";
import image1 from "../../../src/images/trending1.jpg";
import image2 from "../../../src/images/trending2.jpg";
import image3 from "../../../src/images/trending3.jpg";
import image4 from "../../../src/images/trending4.jpg";

const Trending = () => {
  return (
    <div>
      <p>BROWSE TOP</p>
      <h3>Trending Categories</h3>
      <div className="trend-container">
        <div className="trend">
          <img src={image1} alt="" />
        </div>
        <div className="trend">
          <img src={image2} alt="" />
        </div>
        <div className="trend">
          <img src={image3} alt="" />
        </div>
        <div className="trend">
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trending;
