import React from "react";
import Navbars from "../Navbar/Navbar";
import "./Home.css";
// import images from "../../../src/images/education1.jpg";
const Home = () => {
  return (
    <div className="container">
      <Navbars></Navbars>
      <div
        className="home"
        style={{
          //backgroundImage: `url("https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg?w=1300&t=st=1667056081~exp=1667056681~hmac=c7ea288e6a3ef59c5e52c0463e2ede52a7f60c0a63aeb036a261d3a8e407caef")`,
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
    </div>
  );
};
export default Home;
