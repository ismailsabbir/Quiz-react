import React from "react";
import Navbars from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Navbars></Navbars>
      <Outlet></Outlet>
    </div>
  );
};
export default Main;
