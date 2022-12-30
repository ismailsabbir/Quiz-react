import React from "react";
import Option from "../Options/Option";
import "./Quizquestion.css";
const Quizquestion = (props) => {
  console.log(props.quizquestion);
  const { question, options, correctAnswer } = props.quizquestion;
  //console.log(options);
  return (
    <div>
      <p>Quiz : {question}</p>
      {options.map((option) => (
        <Option option={option} correct={correctAnswer}></Option>
      ))}
    </div>
  );
};

export default Quizquestion;
