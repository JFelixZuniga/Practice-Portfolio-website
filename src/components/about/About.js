import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam accusantium vitae, impedit consequuntur possimus molestias eum dolor, corrupti delectus sapiente error expedita ipsam consectetur reiciendis vel pariatur ad fuga facilis?
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="Perfil"
        />
      </div>
    </div>
  );
};
