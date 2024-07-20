import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ backgroundColor: "#282c34", color: "#61dafb", padding: "20px 0" }}>
      <Row>
        <Col md="4" className="footer-copywright" style={{ textAlign: "center", marginBottom: "10px" }}>
          <h3>Designed and Developed by Pasindu Fernando</h3>
        </Col>
        <Col md="4" className="footer-copywright" style={{ textAlign: "center", marginBottom: "10px" }}>
          <h3>Copyright © {year} Pasindu</h3>
        </Col>
        <Col md="4" className="footer-body" style={{ textAlign: "center" }}>
          <ul className="footer-icons" style={{ listStyleType: "none", padding: 0, margin: 0, display: "flex", justifyContent: "center" }}>
            <li className="social-icons" style={{ margin: "0 10px" }}>
              <a
                href="https://github.com/Pasindu0707"
                style={{ color: "#61dafb", fontSize: "24px" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ margin: "0 10px" }}>
              <a
                href="https://www.linkedin.com/in/pasindu-fernando-525357191/"
                style={{ color: "#61dafb", fontSize: "24px" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons" style={{ margin: "0 10px" }}>
              <a
                href="https://www.instagram.com/_pasindu_fernando/"
                style={{ color: "#61dafb", fontSize: "24px" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
