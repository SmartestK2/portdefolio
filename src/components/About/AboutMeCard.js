import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { ImPointRight } from "react-icons/im";

export default function AboutMeCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutMeCard.sentence1-1")}
            {t("aboutMeCard.sentence1-2")}
            <span className="purple"> {t("aboutMeCard.sentence1-3")}</span>
            {t("aboutMeCard.sentence1-4")}
            <span className="purple"> {t("aboutMeCard.sentence1-5")}</span>
            <br />
            {t("aboutMeCard.sentence2-1")}
            <span className="purple"> {t("aboutMeCard.sentence2-2")}</span>
            {t("aboutMeCard.sentence2-3")}
            <br />
            <br />
            {t("aboutMeCard.sentence4")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("aboutMeCard.hobbie1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutMeCard.hobbie2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutMeCard.hobbie3")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutMeCard.hobbie4")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutMeCard.hobbie5")}
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
