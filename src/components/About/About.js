import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutMeCard from "./AboutMeCard";
import AboutCompanyCard from "./AboutCompanyCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

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
              {t("about.sentence1-1")}
              <strong className="purple">{t("about.sentence1-2")}</strong>
            </h1>
            <AboutMeCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/*<Col*/}
          {/*  md={5}*/}
          {/*  style={{ paddingTop: "120px", paddingBottom: "50px" }}*/}
          {/*  className="about-img"*/}
          {/*>*/}
          {/*  <img src={laptopImg} alt="about" className="img-fluid" />*/}
          {/*</Col>*/}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t("about.sentence2-1")}
              <strong className="purple">{t("about.sentence2-2")}</strong>
            </h1>
            <AboutCompanyCard />
          </Col>
        </Row>
        <h1 className="project-heading">
          {t("about.sentence3-1")}
          <strong className="purple">{t("about.sentence3-2")}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple"> {t("about.sentence4-1")}</strong>
          {t("about.sentence4-2")}
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}
