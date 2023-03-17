import React from "react";
import { Image } from "react-bootstrap";

import Strip from "./strip";
import Values from "../assets/img/values.svg";

import style from "../assets/style/value.module.css";

const Value = () => {
  return (
    <div className={style.section}>
      <div className="row">
        <div className="col-12 ">
          <h1 className="col-lg-12 d-flex justify-content-center">
            Our Core Values
          </h1>
          <p>
            Ridiculus laoreet libero pretium et, sit vel elementum convallis
            fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
            etiam sit.
          </p>
          <p>
            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae,
            nec amet enim.
          </p>
        </div>
      </div>
      <div className="row mt-5 ms-4">
        <Strip />
        <div className="col-10 col-lg-10 d-flex justify-content-center ">
          <h4>Dedication</h4>
        </div>
        <div
          className="col-12 col-lg-12 d-flex justify-content-center"
          style={{ marginLeft: "22px" }}
        >
          <p style={{ width: "320px" }}>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat.
          </p>
        </div>
      </div>
      <div className="row mt-2 ms-4">
        <Strip />
        <div className="col-10 col-lg-10 d-flex justify-content-center">
          <h4>Intellectual Honesty</h4>
        </div>
        <div
          className="col-12 col-lg-12 d-flex justify-content-center"
          style={{ marginLeft: "22px" }}
        >
          <p style={{ width: "320px" }}>
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut
            reiciendis voluptatibus maiores alias conse.
          </p>
        </div>
      </div>
      <div className="row mt-2 ms-4">
        <Strip />
        <div className="col-10 col-lg-10 d-flex justify-content-center">
          <h4>Curiosity</h4>
        </div>
        <div
          className="col-12 col-lg-12 d-flex justify-content-center"
          style={{ marginLeft: "22px" }}
        >
          <p style={{ width: "320px" }}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque.
          </p>
        </div>
      </div>
      <Image
        style={{
          top: "1796",
          height: "250px",
          width: "420px",
          marginLeft: "80px",
        }}
        src={Values}
        alt="Values"
      />
    </div>
  );
};

export default Value;
