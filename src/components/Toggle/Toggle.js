import React, { useContext } from "react";
import "./Toggle.css";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { ThemeContext } from "../../context";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div>
      <div className="t">
        <img src={sun} alt="" className="t-icon" />
        <img src={moon} alt="" className="t-icon" />
        <div
          className="t-button"
          onClick={handleClick}
          style={{ left: theme.state.darkmode ? 0 : 25 }}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
