import React from "react";
import MenuCardItem from "./MenuCardItem";
import butterChkn from "../assets/2.jpg";
import noodles from "../assets/noodles1.jpg";
import greekSalad from "../assets/3.jpg";

const Highlights = () => {
  return (
    <div className="highlight_wrapper">
      <div className="top_div">
        <h1>Specials</h1>
        <button className="btn-orderOnline">Online Menu</button>
      </div>
      <div className="menu_div">
        <MenuCardItem imgSrc={butterChkn} title="Butter Chicken" />
        <MenuCardItem imgSrc={noodles} title="Chicken Rice" />
        <MenuCardItem imgSrc={greekSalad} title="Greek Salad" />
      </div>
    </div>
  );
};

export default Highlights;
