import React, { useState } from "react";
import "./About.css";
import about from "../../images/Aboutme.jpg";
import award from "../../images/awards.jpg"
import jeemains from "../../images/JEE-MAINS.jpeg"

const About = () => {
    
  return (
    <div id = "about" className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={about} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsuo laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi.0
        </p>
        <div className="a-award">
            <img src={award} alt="" className="a-award-img" />
            <div className="a-award-text">
            <h4 className="a-award-title">NTSE SCHOLAR</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
            </div>
        </div>
        <div className="a-award">
            <img src={jeemains} alt="" className="a-award-img" />
            <div className="a-award-text">
            <h4 className="a-award-title">JEE MAINS </h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
            </div>
        </div>
        <a href="https://drive.google.com/file/d/16i8KNj-KATjsoJykp5xT_OgzNz-rKgXY/view?usp=sharing" target="_blank" download=""><button className="res-btn">Resume</button></a>
            <a href="https://github.com/abhikannan04" target="_blank" download=""><button className="res-btn">Github</button></a>
      </div>
    </div>
  );
};

export default About;
