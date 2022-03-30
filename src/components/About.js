import React from "react";
import "../components/About.css";

import mainImage from "../images/main.jpg";
//icons
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About me</h2>
      <div className="underline"></div>

      <div className="about-content">
        <img src={mainImage} alt="main pic" className="main-image" />
        <article className="about-text">
          <p>
            Only the change is constant. Following that and my heart :)
            <br /> I switched my career from a Regional Sales Manager to a
            Graphic Designer. Throughout my life, I realized that learning and
            growing are key for moving forward, which is the only way we should
            take a step to. That is the reason I decided to become a Frontend
            Developer after many years in Graphics Design. And not just ANY
            Frontend Developer... I decided to become an AMAZING Frontend
            Developer.
            <br />
            Currently working on that :)
          </p>
        </article>
      </div>
      <h4 className="tech-title">Front-End Technologies that I use: </h4>
      <div className="tech-icon-container">
        <FaHtml5 className="tech-icon" />
        <FaCss3Alt className="tech-icon" />
        <IoLogoJavascript className="tech-icon" />
        <FaReact className="tech-icon" />
      </div>
    </section>
  );
};

export default About;
