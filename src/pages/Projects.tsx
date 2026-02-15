// @ts-expect-error: Suppress type error for missing declaration file
import { Splide, SplideSlide } from "@splidejs/react-splide";
import i18n from "../i18n";
// Default theme
import "@splidejs/react-splide/css";

// or only core styles
import "@splidejs/react-splide/css/core";

interface IProject {
  title: string;
  description: string;
  imageUrls?: string[];
  repositoryUrl?: string;
}

export default function Projects() {
  const projects: IProject[] = [
    {
      title: i18n.t("section.projects.minitwit.title"),
      description: i18n.t("section.projects.minitwit.description"),
    },
    {
      title: i18n.t("section.projects.scooterSharing.title"),
      description: i18n.t("section.projects.scooterSharing.description"),
    },
    {
      title: i18n.t("section.projects.personalPortfolio.title"),
      description: i18n.t("section.projects.personalPortfolio.description"),
    },
  ];
  return (
    <div className="projects">
      <Splide
        options={{
          perPage: 1,
          pagination: true,
          arrows: true,
          type: "fade",
          rewind: true,
          speed: 1250,
          rewindbydrag: true,
          click: false,
        }}
      >
        {projects.map((project, index) => (
          <SplideSlide key={index}>
            <div className="project_card">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
