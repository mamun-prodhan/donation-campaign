import logo from "../../assets/Logo.png";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between px-4 md:px-10 pt-6 md:pt-10 pb-6 md:pb-10 bg-[#FFF] bg-opacity-90">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-12">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/donation">Donation</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
