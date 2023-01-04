import React from "react";
import { useLoaderData } from "react-router-dom";
import Popularcourse from "../Popularcourse/Popularcourse";
import Questyp from "../Questyp/Questyp";
import "./Home.css";
const Home = () => {
  const questiontypes = useLoaderData();
  const questiontyps = questiontypes.data;
  console.log(questiontyps);
  return (
    <div className="hole-container">
      <div>
        <div
          className="home"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80")`,
          }}
        >
          <div className="detals-container">
            <div className="detal">
              <h1>ONLINE COURSE</h1>
              <h4>IMPORVE YOUR SKILLS</h4>
              <button>
                LEARN MORE
                <p>
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
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="containert">
        <h4>
          <u>Our Quiz</u>{" "}
        </h4>
        <div className="carts-contant">
          {questiontyps.map((questiontyp) => (
            <Questyp questiontyp={questiontyp} key={questiontyp.id}></Questyp>
          ))}
        </div>
      </div>
      <Popularcourse></Popularcourse>
    </div>
  );
};
export default Home;
