import React from "react";
import { useLoaderData } from "react-router-dom";
import Questyp from "../Questyp/Questyp";
import Trending from "../Trending/Trending";
import "./QuestionType.css";

const QuestionType = () => {
  const questiontypes = useLoaderData();
  const questiontyps = questiontypes.data;
  // console.log(questiontyps);
  return (
    <div className="content">
      <div className="container">
        <div className="carts-contant">
          {questiontyps.map((questiontyp) => (
            <Questyp questiontyp={questiontyp} key={questiontyp.id}></Questyp>
          ))}
        </div>
        <Trending></Trending>
      </div>
    </div>
  );
};

export default QuestionType;
