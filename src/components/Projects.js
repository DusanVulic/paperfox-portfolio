import React from "react";

import "../components/Projects.css";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projectsData";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h2>Projects</h2>
      <div className="underline"></div>
      <p>
        I'm a self-taught web developer constantly learning how to build ( and
        occasionally design ) exceptional digital experiences. Currently, I'm
        focused on learning REACT JS.
        <br /> You can navigate to my GitHub repositories by clicking this icon
        :
      </p>
      <a
        href="https://github.com/DusanVulic"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub className="project-icon" />
      </a>

      {projects.map((project) => {
        const { id } = project;
        return <SingleProject key={id} {...project} />;
      })}
    </section>
  );
};

export default Projects;
