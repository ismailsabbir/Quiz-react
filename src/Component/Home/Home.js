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
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="containert">
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
