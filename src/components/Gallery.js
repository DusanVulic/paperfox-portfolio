import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./Gallery.css";

const options = {
  buttons: {
    backgroundColor: "rgba(30,30,36,0.8)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    iconPadding: "10px",
    showAutoplayButton: true,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: true,
    size: "40px",
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsAlignment: "center",
    thumbnailsContainerBackgroundColor: "transparent",
    thumbnailsContainerPadding: "20px 5px",
    thumbnailsGap: "1px 1px",
    thumbnailsIconColor: "#ffffff",
    thumbnailsOpacity: 0.6,
    thumbnailsPosition: "bottom",
    thumbnailsSize: ["80px", "80px"],
  },
};

const Gallery = () => {
  return (
    <SRLWrapper options={options}>
      <div className="img-wrapper">
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642677815/vectors/1_nkuxkr.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648495536/vectors/thumb_1_r7blg0.jpg"
            alt="app launch"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642677878/vectors/2_o4irkl.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648495600/vectors/thumb_2_wvxjg1.jpg"
            alt="worldwide delivery"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642677899/vectors/3_wajsnp.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648495685/vectors/thumb_3_lbaen2.jpg"
            alt="donation"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642677923/vectors/4_be8unx.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648495791/vectors/thumb_4_kq5hh6.jpg"
            alt="education costs"
          />
        </a>

        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642678018/vectors/5_pwn76h.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648495857/vectors/thumb_5_qxt4aq.jpg"
            alt="hacker attack"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642678049/vectors/6_q3an2r.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648496048/vectors/thumb_6_klhgtk.jpg"
            alt="we are hiring"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642678067/vectors/7_atw0bh.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648496251/vectors/thumb_7_p8yhx2.jpg"
            alt="online education"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642678091/vectors/8_hzksga.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648496282/vectors/thumb_8_flyo5c.jpg"
            alt="freedom"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642678312/vectors/9_kz6mob.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648496343/vectors/thumb_9_rjalpv.jpg"
            alt="stand out from the crowd"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642678334/vectors/10_mgazen.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648496466/vectors/thumb_10_eikfnp.jpg"
            alt="online shopping"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642678364/vectors/11_go344b.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648496568/vectors/thumb_11_ymztu8.jpg"
            alt="think differently"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642678397/vectors/12_rdnbyp.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648496604/vectors/thumb_12_p8kcac.jpg"
            alt="think differently"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648579387/vectors/CM_1_xtdkht.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648579482/vectors/CM_1_thumbnail_fekmbt.jpg"
            alt="career mindset logo"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648579951/vectors/13_hmwk71.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648579981/vectors/thumb_13_c7nnig.jpg"
            alt="retro van"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648580184/vectors/14_upmooh.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648580237/vectors/thumb_14_n95tmn.jpg"
            alt="think differently"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648580651/vectors/15_q0siyq.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1648580723/vectors/thumb_15_chyc8x.jpg"
            alt="newsletter"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1655979920/vectors/16_x5styw.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1655979929/vectors/thumb_16_emnxe0.jpg"
            alt="newsletter"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1655980360/vectors/17_pgmqd0.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1655980331/vectors/thumb_17_d9xfj1.jpg"
            alt="newsletter"
          />
        </a>
        <a href="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1656061094/vectors/18_oggwfu.jpg">
          <img
            src="https://res.cloudinary.com/dfnkvrfjt/image/upload/v1656061098/vectors/thumb_18_byou09.jpg"
            alt="newsletter"
          />
        </a>
      </div>
      ;
    </SRLWrapper>
  );
};

export default Gallery;
