import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="Sidebar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        About
      </NavLink>
    </div>
  );
}

export default Sidebar;
