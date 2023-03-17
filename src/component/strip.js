import React from "react";
import { Image } from "react-bootstrap";
import strip from "../assets/img/Rectangle.svg";

const Strip = () => {
  return (
    <>
      <div className="col-1 me-3">
        <Image src={strip} alt="strip" style={{ marginLeft: "10px" }} />
      </div>
    </>
  );
};

export default Strip;
