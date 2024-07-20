import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{
        backgroundColor: navColour ? "#333" : "#282c34",
        transition: "0.4s",
      }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <p style={{ color: "#61dafb", fontWeight: "bold" }}>Pasindu Fernando</p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          style={{ borderColor: "#61dafb" }}
        >
          <span style={{ backgroundColor: "#61dafb" }}></span>
          <span style={{ backgroundColor: "#61dafb" }}></span>
          <span style={{ backgroundColor: "#61dafb" }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                style={{ color: "#61dafb" }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={{ color: "#61dafb" }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                style={{ color: "#61dafb" }}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                style={{ color: "#61dafb" }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#61dafb" }}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                href=""
                target="_blank"
                className="fork-btn-inner"
                style={{ backgroundColor: "#61dafb", borderColor: "#61dafb" }}
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
