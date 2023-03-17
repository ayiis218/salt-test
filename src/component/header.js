import React from "react";
import { Image } from "react-bootstrap";
import Benjamin from "../assets/img/benjamin.png";
import Background from "../assets/img/Background.png";

import style from "../assets/style/header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.section}>
        <div className={style.img}>
          <Image src={Benjamin} alt="Benjamin" />
        </div>
        <div className={style.second}>
          <Image src={Background} alt="Background" />
        </div>
        <div className={style.title}>
          <h5>Discover Your Wonder</h5>
          <div style={{ fontSize: "16px", width: "337px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
