import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pasindu Fernando </span>
            from <span className="purple"> Wennappuwa, SL</span>
            <br />
            I am currently employed as a Fullstack developer at Surecore (PVT) Ltd.
            <br />
            I'm currently studying in 4th year of Sri Lanka Intitute of Information Technology and I'm following
            BSc (Hons) in Information Technology
            Specializing in Software Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working on my startup company (TriniphiX)
            </li>
            <li className="about-activity">
              <ImPointRight /> Dwaling with the phobia (Peniaphobia)
            </li>
            <li className="about-activity">
              <ImPointRight /> Taekwondo Martial Artist 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ever tried , Ever Failed no matter try again fail again , fail better the world is yours"{" "}
          </p>
          <footer className="blockquote-footer">Pasindu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
