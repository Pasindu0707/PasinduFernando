import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/PasinduFdo.JPG";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ backgroundColor: "#282c34", color: "#fff" }}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, color: "#61dafb" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ color: "#61dafb" }}>
                I'M
                <strong className="main-name"> PASINDU FERNANDO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="d-flex justify-content-center" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  border: "4px solid #D1D5DB",
                  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
