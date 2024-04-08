import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import easyline from "../../Assets/Projects/easyline.jpg";
import miamImage from "../../Assets/Projects/miam.png"; // Ajout de l'import pour l'image miam.jpg

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
              ghLink="https://github.com/Smartestk2"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={miamImage} // Remplacement de Miam par la variable miamImage
              isBlog={false}
              title={t("projects.5Project.title")}
              description={t("projects.5Project.description")}
              ghLink="https://documenter.getpostman.com/view/27001673/2sA35G539G#auth-info-d346d01d-5bfd-4c5b-b553-bb0d30c35fa6"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
