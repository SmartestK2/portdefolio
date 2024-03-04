import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bibliotheque from "../../Assets/Projects/bibliotheque.png";
import maisonJungle from "../../Assets/Projects/maisonJungle.png";
import pong from "../../Assets/Projects/pong.png";
import easyline from "../../Assets/Projects/easyline.jpg";
import chatify from "../../Assets/Projects/chatify.png";

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
              imgPath={bibliotheque}
              isBlog={false}
              title={t("projects.firstProject.title")}
              description={t("projects.firstProject.description")}
              ghLink="https://github.com/Junelight-07/exercice-livres"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maisonJungle}
              isBlog={false}
              title={t("projects.secondProject.title")}
              description={t("projects.secondProject.description")}
              ghLink="https://github.com/Junelight-07/LaMaisonJungle"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pong}
              isBlog={false}
              title={t("projects.thirdProject.title")}
              description={t("projects.thirdProject.description")}
              ghLink="https://github.com/Junelight-07"
              demoLink=""
            />
          </Col>

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title={t("projects.fifthProject.title")}
              description={t("projects.fifthProject.description")}
              ghLink="https://github.com/Junelight-07"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
