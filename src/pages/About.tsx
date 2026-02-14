import i18n from "../i18n";

export default function About() {
  return (
    <div className="about">
      <div className="about_section">
        <h1 className="about_title">{i18n.t("section.about.title")}</h1>
        <p className="about_text">{i18n.t("section.about.description")}</p>
      </div>
    </div>
  );
}
