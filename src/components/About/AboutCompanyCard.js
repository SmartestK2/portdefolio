import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

export default function AboutCompanyCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("aboutCompanyCard.sentence1-1")}
            <span className="purple"> {t("aboutCompanyCard.sentence1-2")}</span>
            <br />
            <br />
            {t("aboutCompanyCard.sentence2-1")}
            <span className="purple">{t("aboutCompanyCard.sentence2-2")}</span>
            {t("aboutCompanyCard.sentence2-3")}
            <br />
            {t("aboutCompanyCard.sentence3-1")}
            <span className="purple"> {t("aboutCompanyCard.sentence3-2")}</span>
            {t("aboutCompanyCard.sentence3-3")}
            <span className="purple"> {t("aboutCompanyCard.sentence3-4")}</span>
            <br />
            {t("aboutCompanyCard.sentence4-1")}
            <span className="purple">{t("aboutCompanyCard.sentence4-2")}</span>
            <br />
            <br />
            {t("aboutCompanyCard.sentence5-1")}
            {t("aboutCompanyCard.sentence6-1")}
            {t("aboutCompanyCard.sentence7-1")}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
