import React from "react";

const MenuCardItem = ({ imgSrc, title }) => {
  return (
    <div className="card_wrapper">
      <div className="img_div">
        <img src={imgSrc} alt="" />
      </div>
      <div className="title_div">
        <h2>{title}</h2>
      </div>
      <div className="desc_div">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet eius
        repellendus exercitationem tenetur.
      </div>
      <a className="orderNow" href="#">
        Order Now &rarr;
      </a>
    </div>
  );
};

export default MenuCardItem;
