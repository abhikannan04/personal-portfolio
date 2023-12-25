
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
        I am currently pursuing a degree in Electronics and Communication at SV-NIT, where I am deeply immersed in the world of technology. My academic journey has fostered a strong interest in software technologies, and I am consistently exploring this field with enthusiasm. I believe in the power of combining electronics and software to create innovative solutions that can shape the future. In addition to my academic pursuits, I am dedicated to continuous learning and self-improvement, striving to stay at the forefront of the ever-evolving tech landscape.
        </p>
        <div className="a-award">
            <img src={award} alt="" className="a-award-img" />
            <div className="a-award-text">
            <h4 className="a-award-title">NTSE SCHOLAR</h4>
            <p className="a-award-desc">
            NTSE (National Talent Search Examination): - Scored an impressive 180/200 marks in the NTSE Stage 1
            examination. Successfully qualified for the Stage 2 of the NTSE
            </p>
            </div>
        </div>
        <div className="a-award">
            <img src={jeemains} alt="" className="a-award-img" />
            <div className="a-award-text">
            <h4 className="a-award-title">JEE MAINS </h4>
            <p className="a-award-desc">
            JEE-Mains (Joint Entrance Examination - Mains):-Achieved an exceptional 98.43 percentile score in the JEE
            Mains, reflecting a high level of competence in mathematics, physics, and chemistry
            </p>
            </div>
        </div>
        <a href="https://drive.google.com/file/d/1jqhH8cq_kr3uT-jvp_62XXvtUbOXEWD4/view?usp=sharing" target="_blank" rel="noreferrer" download=""><button className="res-btn">Resume</button></a>
            <a href="https://github.com/abhikannan04" target="_blank" rel="noreferrer" download=""><button className="res-btn">Github</button></a>
      </div>
    </div>
  );
};

export default About;
