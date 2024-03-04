import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

export default function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://nodejs.org/en/about"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiNodejs className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://www.javascript.com/about"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiJavascript1 className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://react.dev/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiReact className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://www.mongodb.com/fr-fr"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiMongodb className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://www.python.org/about/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiPython className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://www.java.com/en/download/help/whatis_java.html"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiJava className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://www.w3schools.com/cpp/cpp_intro.asp"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CgCPlusPlus className={"white"} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href={"https://www.w3schools.com/cs/cs_intro.php"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandCSharp className={"white"} />
        </a>
      </Col>
    </Row>
  );
}
