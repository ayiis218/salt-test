import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

import Company from "../assets/img/comp.svg";

const Footer = () => {
  return (
    <>
      <div
        style={{ border: "5px", backgroundColor: "#07477A", height: "100vh" }}
      >
        <div>
          <Image
            style={{ marginLeft: "30px", marginTop: "34px", height: "45px" }}
            src={Company}
            alt="company"
          />
        </div>

        <div className="col-12">
          {["Light"].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{
                marginLeft: "26px",
                marginTop: "109px",
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
                      fontFamily: "Rubik",
                      fontSize: "18px",
                      width: "200px",
                      height: "91px",
                      top: "215px",
                      marginTop: "32px",
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
          ))}
        </div>
        <div>
          <ListGroup
            style={{
              height: "144px",
              width: "200px",
              left: "57px",
              top: "384px",
              borderRadius: "0",
              marginLeft: "6%",
              marginBottom: "20%",
              borderBlockColor: "#07477A",
              border: 0,
            }}
          >
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
    </>
  );
};

export default Footer;
