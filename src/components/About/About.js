import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import surecore from "../../Assets/surecore.svg";
import sliit from "../../Assets/sliit.png";
import vaz from "../../Assets/vaz.png";
import maris from "../../Assets/maris1.png";
import Toolstack from "./Toolstack";
import "./About.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">Am I</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />

        {/* Experience Section */}
        <h1 className="project-heading">
          <strong className="purple">Experience</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={6} lg={4} className="d-flex align-items-stretch">
            <div className="info-card">
              <img src={surecore} alt="Surecore" className="info-img" />
              <div className="info-body">
                <h4 className="info-title">Surecore (PVT) Ltd</h4>
                <p className="info-text">
                  Currently Working as the Full Stack Developer (Intern) at Surecore (PVT) Ltd (2023-Present).
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Education Section */}
        <h1 className="project-heading">
          <strong className="purple">Education</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={6} lg={4} className="d-flex align-items-stretch">
            <div className="info-card">
              <img src={sliit} alt="SLLIT" className="info-img" />
              <div className="info-body">
                <h4 className="info-title">SLLIT</h4>
                <p className="info-text">
                  BSc (Hons) in Information Technology, Specialization in Software Engineering
                  Sri Lanka Institute of Information Technology - SLIIT (2021 - Present).
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="d-flex align-items-stretch">
            <div className="info-card">
              <img src={maris} alt="Maris Stella College" className="info-img" />
              <div className="info-body">
                <h4 className="info-title">Maris Stella College</h4>
                <p className="info-text">
                  Advanced Level, Maris Stella College Thimbirigaskatuwa (2018 - 2020).
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="d-flex align-items-stretch">
            <div className="info-card">
              <img src={vaz} alt="Joseph Vaz College" className="info-img" />
              <div className="info-body">
                <h4 className="info-title">Joseph Vaz College</h4>
                <p className="info-text">
                  Grade 1 to Ordinary Level education at Joseph Vaz College, Wennappuwa (2007 - 2017).
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
