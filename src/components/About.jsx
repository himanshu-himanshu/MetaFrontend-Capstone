import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="left_div">
        <h1>Little Lemon</h1>
        <h3>Toronto</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui
          earum mollitia id quam, temporibus tenetur dolorem debitis distinctio
          dolor voluptate natus expedita quod sint commodi, numquam inventore
          amet eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
          sapiente facilis praesentium atque excepturi pariatur nemo neque
          ratione ipsum laborum hic veniam obcaecati sed alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In dolorem a
          suscipit perspiciatis dolorum ex aspernatur, pariatur voluptate et
          porro earum nulla totam quo illo explicabo nam recusandae temporibus
          eius?
        </p>
      </div>
      <div className="right_div">
        <img src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
