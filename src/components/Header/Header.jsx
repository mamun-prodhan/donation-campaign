import logo from "../../assets/Logo.png";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex items-center justify-between py-10 mb-10">
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
