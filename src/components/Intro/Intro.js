import profile from "../../images/profile.png"
import "../Intro/INtro.css";
const Intro = () => {
  return (
    <div className="i">
      {/* <h1>PORTFOLIO</h1> */}
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello Folks , Myself</h2>
          <h1 className="i-name">Abhilash Kannan</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Problem Solver</div>
              <div className="i-title-item">Explorer</div>
            </div>
          </div>
          <div className="i-desc">
          Welcome to my portfolio website! It's a pleasure to have you here. Explore and discover my journey, skills, and projects. Let's embark on an exciting adventure together!
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={profile} className="i-img" alt="" />
      </div>
    </div>
  );
};

export default Intro;
