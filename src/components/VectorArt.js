import React from "react";
import "./VectorArt.css";
import Gallery from "./Gallery";

const VectorArt = () => {
  return (
    <section id="gallery" className="gallery-section">
      <h2>Vector art</h2>
      <div className="underline"></div>
      <p>
        I was free to choose some of my vector artwork samples... just to catch
        your eye.
      </p>
      <p>
        Considering that I have vector portfolio with more than 17K
        illustrations and more than 200 000 downloads I think that it would be
        better If I present links to my stock pages for you to check more of my
        work if you are interested :
      </p>
      <div className="stock-links-container">
        {/* adobe */}
        <a
          href="https://stock.adobe.com/contributor/205378585/madedee"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button type="button" className="btn stock-btn">
            Adobe
          </button>
        </a>
        {/* istock */}
        <a
          href="https://www.shutterstock.com/g/MaDedee?rid=2710396"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button type="button" className="btn stock-btn">
            Shutterstock
          </button>
        </a>
        {/* shutter */}
        <a
          href="http://www.istockphoto.com/portfolio/PaperFox"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button type="button" className="btn stock-btn">
            istock
          </button>
        </a>
      </div>
      <div className="underline"></div>
      <Gallery />
    </section>
  );
};

export default VectorArt;
