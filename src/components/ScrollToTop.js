import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { FaArrowUp } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  //imported from context
  const { scrollToTop } = useGlobalContext();
  //

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <section>
      <div className="back-to-top">
        {isVisible && (
          <button className="scroll-btn " onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </div>
    </section>
  );
};

export default ScrollToTop;
