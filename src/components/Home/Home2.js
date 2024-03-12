import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("myLittleStory.little")}
              <span className="purple">{t("myLittleStory.story")}</span>
              {" :"}
            </h1>
            <p className="home-about-body">
              {t("myLittleStory.sentence1")}
              <br />
              <br />
              {t("myLittleStory.sentence2-1")}
              <i>
                <b className="purple">{t("myLittleStory.sentence2-2")}</b>
              </i>
              <br />
              <br />
              {t("myLittleStory.sentence3")}
              <br />
              <br />
              {t("myLittleStory.sentence4-1")}
              <b className="purple">{t("myLittleStory.sentence4-2")}</b>
              {t("myLittleStory.sentence4-3")}
              <i>
                <b className="purple">{t("myLittleStory.sentence4-4")}</b>
              </i>
              {t("myLittleStory.sentence4-5")}
              <i>
                <b className="purple">{t("myLittleStory.sentence4-6")}</b>
              </i>
              <br />
              <br />
              {t("myLittleStory.sentence5-1")}
              <b className="purple">{t("myLittleStory.sentence5-2")}</b>
              {t("myLittleStory.sentence5-3")}
              <b className="purple">{t("myLittleStory.sentence5-4")}</b>
              {t("myLittleStory.sentence5-5")}
              <b className="purple">{t("myLittleStory.sentence5-6")}</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              {t("myLittleStory.sentence6-1")}
              <span className="purple">{t("myLittleStory.sentence6-2")}</span>
            </h1>
            <p>
              {t("myLittleStory.sentence7-1")}
              <span className="purple">{t("myLittleStory.sentence7-2")}</span>
              {t("myLittleStory.sentence7-3")}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SmartestK2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chrislin-mabounda-29000320a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
