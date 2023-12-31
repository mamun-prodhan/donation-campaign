import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
