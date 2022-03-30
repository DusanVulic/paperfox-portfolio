import React, { useEffect } from "react";
import "./SingleProject.css";
//this is piece of code from stack overflow for framer motion
import { motion, useAnimation } from "framer-motion/dist/framer-motion";
//from react-intersection-observer
import { useInView } from "react-intersection-observer";

const SingleProject = ({ id, url, title, description, image, tech, icons }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 2, bounce: 0.3 },
      });
    }
    //with piece of code below - single project will dissaper when it is  out of inView
    // if (!inView) {
    //   animation.start({ x: "100vw" });
    // }

    // eslint-disable-next-line
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.article
        className="single-project"
        animate={animation}
        initial={{ x: "100vw" }}
      >
        <div className="info">
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{description}</p>
          <h4>Created with :</h4>
          <p className="tech">{tech}</p>
          <div className="tech-icons">
            {icons.map((icon, index) => {
              return (
                <p key={index} className="tech-icon">
                  {icon}
                </p>
              );
            })}
          </div>

          <a href={url} target="_blank" rel="noreferrer noopener">
            <button className="project-btn"> visit project page</button>
          </a>
        </div>

        <div className="project-img-container">
          <img src={image} alt="project img" className="project-img" />
        </div>
      </motion.article>
    </div>
  );
};

export default SingleProject;
