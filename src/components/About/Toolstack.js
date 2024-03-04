import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiIntellijidea, SiPostman, SiVisualstudiocode } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { VscAzureDevops } from "react-icons/vsc";

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://www.jetbrains.com/idea/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiIntellijidea className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://code.visualstudio.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVisualstudiocode className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://www.postman.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiPostman className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://git-scm.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiGit className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://azure.microsoft.com/en-us"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscAzureDevops className={"white"} />
        </a>
      </Col>
    </Row>
  );
}
