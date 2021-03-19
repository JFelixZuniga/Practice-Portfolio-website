import React from "react";
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

export const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted></video>
      <h1>John F. Zúñiga</h1>
      <p>Front End Developer</p>
    </div>
  );
};
