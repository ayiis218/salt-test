import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Company from "./company";

import style from "../assets/style/navbar.module.css";

function navbar() {
  return (
    <div className={style.section}>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
              <div className={style.img}>
                <Company />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <div className={style.btn}>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <div className={style.img}>
                      <Company />
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default navbar;
