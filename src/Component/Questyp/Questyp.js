import React from "react";
import { Link } from "react-router-dom";
import "./Questyp.css";
const Questyp = (props) => {
  const { id, logo, name, total } = props.questiontyp;
  return (
    <div className="cart-container">
      <div className="cart">
        <img src={logo} alt="" />
        <div className="midelpart">
          <p>Name:{name}</p>
          <p>Question:{total}</p>
        </div>
        <Link to={`/quiz/${id}`}>
          <button>Start {name} quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Questyp;
