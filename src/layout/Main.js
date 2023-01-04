import React from "react";
import Navbars from "../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <Navbars></Navbars>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
export default Main;
