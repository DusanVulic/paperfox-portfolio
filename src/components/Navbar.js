//import style from navbar css
import "./Navbar.css";
import logo from "../images/logo.jpg";

//import links data

import { links, social } from "../data/navData.js";
import { useState, useRef, useEffect } from "react";
//

import { useGlobalContext } from "../context/context";

const Navbar = () => {
  //imported from context
  const { scrollToTop } = useGlobalContext();
  //

  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  // nav ref
  //targeting  DOM - nav
  const navRef = useRef(null);

  //
  const showLinksHandler = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 15}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  // hadlovanje scroll-a

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    console.log(location);
    //with this I'm getting  dinamic nav height property
    const navHeight = navRef.current.clientHeight;
    console.log(navRef, "navbar", navRef.current.clientHeight, navHeight);

    window.scrollTo({
      left: 0,
      top: location - navHeight,
    });
    setShowLinks(false);
  };

  return (
    <nav className="sticky" ref={navRef}>
      <div className="nav-center">
        <div className="nav-header">
          {/* <h3>logo</h3> */}

          <img src={logo} alt="logo" className="logo" onClick={scrollToTop} />

          <div
            className={`${showLinks ? "menu-toggle is-active" : "menu-toggle"}`}
            onClick={() => showLinksHandler()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <a href={url} onClick={handleClick}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((link) => {
            const { id, icon, url } = link;
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
