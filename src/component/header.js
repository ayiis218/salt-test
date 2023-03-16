import React from "react";
import { Image } from "react-bootstrap";
import Benjamin from "../assets/img/benjamin.svg";
import Background from "../assets/img/background.svg";

const Header = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Image
          style={{ marginTop: "-104px", height: "414px", width: "418px" }}
          src={Benjamin}
          alt="Benjamin"
        />
        <Image
          style={{
            position: "absolute",
            marginTop: "-165px",
            height: "420px",
            width: "418px",
          }}
          src={Background}
          alt="Background"
        />
        <div
          style={{
            position: "absolute",
            width: "221px",
            height: "68px",
            marginTop: "-40px",
            marginLeft: "40px",
            color: "#FFFFFF",
          }}
        >
          <h5 style={{ fontSize: "36px" }}>Discover Your Wonder</h5>
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
