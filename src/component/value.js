import React from "react";
import { Image } from "react-bootstrap";
import Values from "../assets/img/values.svg";

const Value = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-12">
            <h1 className="d-flex justify-content-center">Our Core Values</h1>
            <p>
              Ridiculus laoreet libero pretium et, sit vel elementum convallis
              fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
              etiam sit. In mauris rutrum ac ut volutpat, ornare nibh diam.
              Montes, vitae, nec amet enim.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Dedication</h4>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat.
            </p>
          </div>
          <div className="col-12">
            <h4>Intellectual Honesty</h4>
            <p>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias conse.
            </p>
          </div>
          <div className="col-12">
            <h4>Curiosity</h4>
            <p>
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
    </>
  );
};

export default Value;
