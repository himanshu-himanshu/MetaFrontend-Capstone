import React from "react";
import logo from "../assets/footerLogo.png";

const Footer = () => {
  const links = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];

  return (
    <footer>
      <div className="imgDiv">
        <img src={logo} alt="" />
      </div>
      <div className="link_div">
        <p>Navigation</p>
        <ul>
          {links.map((link) => (
            <li>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact_div">
        <p>Contact</p>
        <ul>
          <li>120 Dunkin Rd</li>
          <li>+1 998 998 1221</li>
          <li>llemon@hotmail.com</li>
        </ul>
      </div>
      <div className="social_div">
        <p>Social</p>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
