import "./CircleScroll.css";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import circleImg from "../../images/circlescroll.png";

const CircleScroll = () => {
  return (
    <div className="circle-scroll">
      <ScrollLink to="intro-page" smooth={true} duration={500}>
        <img src={circleImg} alt="" />
      </ScrollLink>
    </div>
  );
};

export default CircleScroll;
