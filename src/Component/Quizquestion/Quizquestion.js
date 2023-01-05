import React, { useState } from "react";
import Option from "../Options/Option";
import "./Quizquestion.css";
const Quizquestion = (props) => {
  console.log(props.quizquestion);
  const { question, options, correctAnswer } = props.quizquestion;
  const [corect, setcorect] = useState([]);
  const corectanswer = (correctanswers) => {
    let newcorrect = [...corect, correctanswers];
    setcorect(newcorrect);

    //  const ele = document.getElementsByClassName("ques-1");
    // ele.setAttribute("disabled", true);
  };
  const [check, setcheck] = useState();
  const [wrong, setwrong] = useState();
  const givalert = (correctanswers, option) => {
    if (option === correctanswers) {
      let newcheck = correctanswers;
      setcheck(newcheck);
      // alert("This is right answer");
      // message = <h4>Right answer</h4>;
    } else if (option !== correctanswers) {
      let newwrong = option;
      setwrong(newwrong);
      // alert("This is wrong answer");
      // message = <h4>Wrong answer</h4>;
    }
  };
  // console.log(check);
  return (
    <div>
      <div className="question-div">
        <div className="status">
          {check && <h6 className="right-answer">This is Right Answer</h6>}
          {wrong && <h6 className="wrong-answer">This is wrong Answer</h6>}
        </div>
        <div>
          <h6 className="corect-ans">
            Correct Answer:<strong>{corect}</strong>{" "}
          </h6>
        </div>

        <div onClick={() => corectanswer(correctAnswer)} className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 eye"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        <h6 className="ques-1">Quiz : {question}</h6>
        {options.map((option) => (
          <Option
            handler={givalert}
            option={option}
            correct={correctAnswer}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Quizquestion;
