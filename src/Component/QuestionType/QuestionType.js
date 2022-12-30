import React from "react";
import { useLoaderData } from "react-router-dom";
import Questyp from "../Questyp/Questyp";
import "./QuestionType.css";

const QuestionType = () => {
  const questiontypes = useLoaderData();
  const questiontyps = questiontypes.data;
  // console.log(questiontyps);
  return (
    <div className="container">
      <div className="carts-contant">
        {questiontyps.map((questiontyp) => (
          <Questyp questiontyp={questiontyp} key={questiontyp.id}></Questyp>
        ))}
      </div>
    </div>
  );
};

export default QuestionType;
