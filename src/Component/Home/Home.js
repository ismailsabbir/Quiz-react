import React from "react";
// import QuestionType from "../QuestionType/QuestionType";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <div
        className="home"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80")`,
        }}
      >
        <div className="detals-container">
          <div className="detal">
            <h1>Online University of In-Demand Professions</h1>
            <h6>Oure course</h6>
          </div>
        </div>
      </div>
      {/* <QuestionType></QuestionType> */}
    </div>
  );
};
export default Home;
