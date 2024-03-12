import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import easyline from "../../Assets/Projects/easyline.jpg";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects.sentence1-1")}
          <strong className="purple">{t("projects.sentence1-2")}</strong>
        </h1>
        <p style={{ color: "white" }}>{t("projects.sentence2")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyline}
              isBlog={false}
              title={t("projects.fourthProject.title")}
              description={t("projects.fourthProject.description")}
              ghLink="https://github.com/Junelight-07"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
