import React from "react";

const Statistic = (props) => {
  console.log(props);
  const { name, total, id } = props.datta;
  console.log(name);
  console.log(total);
  console.log(id);
  return <div></div>;
};

export default Statistic;
