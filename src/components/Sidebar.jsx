import { NavLink } from 'react-router-dom';
import homeimg from "../assets/home.png";
import aboutimg from "../assets/about.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        <img src={homeimg} className="icon" alt="home"></img>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        <img src={aboutimg} className="icon" alt="about"></img>
      
      </NavLink>
    </div>
  );
}

export default Sidebar;
