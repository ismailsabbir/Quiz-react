import React from "react";
import { useLoaderData } from "react-router-dom";
import Quizquestion from "../Quizquestion/Quizquestion";
import "./Question.css";
const Question = () => {
  const questionss = useLoaderData();
  const question = questionss.data;
  const quizquestions = question.questions;
  console.log(question.questions);
  return (
    <div>
      <div className="question-container">
        <div className="question">
          {/* <div className="ans">
            <h1>answer</h1>
          </div> */}
          <div className="ques">
            <u>
              <h4>Quiz of {question.name}</h4>
            </u>
            {quizquestions.map((quizquestion) => (
              <Quizquestion quizquestion={quizquestion}></Quizquestion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
