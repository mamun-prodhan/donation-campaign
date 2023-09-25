import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h2>This is Root</h2>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
