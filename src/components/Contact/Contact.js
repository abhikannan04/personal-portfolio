import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import address from "../../images/address.png";
import git from "../../images/git.png";
import linkedin from "../../images/linkedin.png";
import insta from "../../images/instagram.jpg";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
const Contact = () => {
  const formRef = useRef();
  const [done, setdone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gjxuff9",
        "template_jcwtoi8",
        formRef.current,
        "HpWB8c8pJa9aN-kor"
      )
      .then(
        (result) => {
          console.log(result.text);
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
        );
        e.target.reset();
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">CONTACT ME</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +91 8160351852
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              abhikannan200304@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" />
              C-1661 Kribhco Nagar Surat Hazira, Gujarat-394515
            </div>
          </div>
          <div className="c-gettouch">
            <h1 className="c-gettouch-title">GET IN TOUCH</h1>
            <div className="c-gettouch-card">
              <a href="#about" target=""><img src={git} alt="" className="c-gettouch-icon" /> </a>
            </div>

            <div className="end-p">wwww.abhiportfolio.com|All Rights Reserved &copy;</div>
            <div className="end-p">Designed With ❤️ By  Abhilash Kannan</div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={ {backgroundColor: darkmode && "black" , color:darkmode && "white"}}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkmode && "black" , color:darkmode && "white" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkmode && "black" , color:darkmode && "white"}}
              type="text"
              placeholder="Email-Id"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkmode && "black" , color:darkmode && "white"}}
              name="message"
              placeholder="Enter Your Message"
              cols="30"
              rows="10"
            ></textarea>
            <button className="con-btn">Submit</button>
            <p className="f-submit">{done && "Submitted Successfully" }</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
