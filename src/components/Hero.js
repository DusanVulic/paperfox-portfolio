import React from "react";
import "./Hero.css";
import map from "../images/mapa.png";
//this is piece of code from stack overflow for framer motion
import { motion } from "framer-motion/dist/framer-motion";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: "tween", duration: 1.5 }}
          className="hero-title-container"
        >
          <h1 className="hero-title">
            Hello World,
            <br /> welcome to my website.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="img-container"
        >
          <img src={map} alt="mapa" className="hero-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
