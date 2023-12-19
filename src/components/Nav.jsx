import React from "react";
import logo from "../assets/Asset 16@4x.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const links = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];
  return (
    <nav>
      <div className="nav_logo">
        <Link to="/">
          <img src={logo} alt="" className="logo_image" />
        </Link>
      </div>
      <div className="nav_links">
        <ul>
          {links.map((link) => (
            <li>
              <Link to="/">{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
