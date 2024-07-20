import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px", color: "#4a90e2" }}>
        Days I <strong className="purple" style={{ color: "#e94e77" }}>Code</strong>
      </h1>
      <GitHubCalendar
        username="Pasindu0707"
        blockSize={15}
        blockMargin={5}
        color="#34d399"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
