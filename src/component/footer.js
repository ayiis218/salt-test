import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

import Company from "../assets/img/comp.svg";
import style from "../assets/style/footer.module.css";

const Footer = () => {
  return (
    <div className={style.section}>
      <div className={style.img}>
        <Image style={{ height: "45px" }} src={Company} alt="company" />
      </div>

      <div className="col-12">
        {["Light"].map((variant) => (
          <div className={style.card}>
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{
                marginLeft: "26px",
                width: "366px",
                height: "245px",
              }}
              className="mb-5 mt-4"
            >
              <Card.Body>
                <Card.Title>
                  <select
                    style={{
                      height: "40px",
                      width: "313px",
                      left: "54px",
                      top: "135px",
                      borderRadius: "4px",
                      marginLeft: "13px",
                      marginTop: "20px",
                      marginBottom: "13px",
                    }}
                    type="select"
                  >
                    <option>TEKNOLOGI DEPARTEMENT</option>
                  </select>
                </Card.Title>
                <Card.Text>
                  <div
                    style={{
                      color: "#25A0D8",
                      fontSize: "18px",
                      width: "300px",
                      height: "91px",
                      top: "205px",
                      marginTop: "22px",
                      marginLeft: "14px",
                      marginBottom: "53px",
                    }}
                  >
                    Jl.Lembong No.8 kel.Braga Kec.Sumur Bandung, Kota Bandung,
                    Jawa Barat
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className={style.menu}>
        <ListGroup>
          <ListGroup.Item
            style={{
              color: "#FFFFFF",
              backgroundColor: "#07477A",
              borderBlockColor: "#07477A",
            }}
          >
            Who We Are
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              color: "#FFFFFF",
              backgroundColor: "#07477A",
              borderBlockColor: "#07477A",
            }}
          >
            Our Values
          </ListGroup.Item>
          <ListGroup.Item
            style={{
              color: "#FFFFFF",
              backgroundColor: "#07477A",
              borderBlockColor: "#07477A",
            }}
          >
            The Perks
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default Footer;
