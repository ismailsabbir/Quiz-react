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
      <div>
        <div className="options">
          <ul>
            <li>
              <h6
                onClick={() => checkanswer(option, correct)}
                className="option"
              >
                {props.option}
              </h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Option;
