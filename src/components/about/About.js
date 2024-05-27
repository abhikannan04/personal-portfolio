import "./About.css";
import about from "../../images/Aboutme.jpg";
import dockerImg from "../../images/docker.png";
import javaImg from "../../images/java.png";
import prismaImg from "../../images/prisma.png";
import tailwindImg from "../../images/tailwind.png";
import mongoImg from "../../images/mongodb.png";
import nodejsImg from "../../images/nodejs.png";
import reactImg from "../../images/react.png";


const About = () => {
  return (
    <div id="about" className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={about} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am an final-year ECE undergrad with a passion for creating
          interactive solution in the Tech-World. I have experience working with
          JavaScript, React, Node.js, Express, PostgreSQL, HTML, CSS, and Data
          Structures and Algorithms. I am a quick learner and I am always looking
          to expand my knowledge and skill set. I am a team player and I am
          excited to work with others to create amazing applications.
        </p>
        <h1 className="a-award-title">SKILLS</h1>
        <div className="a-award">
          <div>
            <img src={javaImg} alt="" className="a-award-img" />
          </div>
          <div>
            <img src={reactImg} alt="" className="a-award-img" />
          </div>
          <div>
            <img src={mongoImg} alt="" className="a-award-img" />
          </div>
          <div>
            <img src={prismaImg} alt="" className="a-award-img" />
          </div>
          <div>
            <img src={tailwindImg} alt="" className="a-award-img" />
          </div>
          <div>
            <img src={nodejsImg} alt="" className="a-award-img" />
          </div>
          <div>
            <img src={dockerImg} alt="" className="a-award-img" />
          </div>
        </div>

        <a
          href="https://drive.google.com/file/d/1xjKcouEThOzq4FBHia35rHSih_0NZu2_/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          download=""
        >
          <button className="res-btn">Resume</button>
        </a>
        <a
          href="https://github.com/abhikannan04"
          target="_blank"
          rel="noreferrer"
          download=""
        >
          <button className="res-btn">Github</button>
        </a>
      </div>
    </div>
  );
};

export default About;
