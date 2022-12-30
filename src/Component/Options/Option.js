import React from "react";
import "./Option.css";
const Option = (props) => {
  const option = props.option;
  const correct = props.correct;
  const checkanswer = (option, correct) => {
    if (option === correct) {
      alert("This is right answer");
    } else {
      alert("This is wrong answer");
    }
  };
  return (
    <div>
      <div className="options">
        <ul>
          <li>
            <p onClick={() => checkanswer(option, correct)} className="option">
              {props.option}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Option;
