import React from "react";
import logo from "../assets/Asset 16@4x.png";

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
        <a href="/">
          <img src={logo} alt="" className="logo_image" />
        </a>
      </div>
      <div className="nav_links">
        <ul>
          {links.map((link) => (
            <li>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
