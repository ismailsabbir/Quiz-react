import React from "react";
import { Link } from "react-router-dom";
import "./Questyp.css";
const Questyp = (props) => {
  const { id, logo, name, total } = props.questiontyp;
  return (
    <div className="cart-container">
      <div className="cart">
        <img src={logo} alt="" />
        <div className="tab">
          <div className="midelpart">
            <h6>Name : {name}</h6>
            <h6>Question : {total}</h6>
          </div>
          <Link to={`/quiz/${id}`}>
            <button>Start {name} quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Questyp;
