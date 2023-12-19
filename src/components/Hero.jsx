import React from "react";
import heroBanner from "../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero_wrapper">
      <div className="left_text">
        <h1>Little Lemon</h1>
        <h3>Toronto</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque labore
          ea impedit. A, dicta nobis omnis asperiores quis sit facere sequi
          quibusdam provident.
        </p>
        <Link to="/booking" className="btn-reserveTable">
          Reserve a table
        </Link>
      </div>
      <div className="right_image">
        <img src={heroBanner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
