// @ts-expect-error: Suppress type error for missing declaration file
import { Splide, SplideSlide } from "@splidejs/react-splide";
import i18n from "../i18n";
import "@splidejs/react-splide/css";
import repos from "../data/projects.json";
import "@splidejs/react-splide/css/core";

interface IProject {
  title: string;
  description: string;
  imageUrls?: string[];
  repositoryUrl?: string;
}

export default function Projects() {
  const projects: IProject[] = Object.values(repos).flatMap((project) => [
    {
      title: i18n.t(`section.projects.${project.title}.title`),
      description: i18n.t(`section.projects.${project.title}.description`),
      repositoryUrl: project.link,
      imageUrls: project.imagesURL,
    },
  ]);
  return (
    <div className="projects">
      <Splide
        options={{
          perPage: 1,
          pagination: false,
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
              <Splide
                options={{
                  perPage: 1,
                  pagination: false,
                  type: "loop",
                  rewind: true,
                  rewindbydrag: true,
                  click: false,
                  arrows: false,
                  autoplay: true,
                  focus: "center",
                }}
              >
                {project.imageUrls?.map((url, imageIndex) => (
                  <SplideSlide key={imageIndex}>
                    <div className="project_image_container">
                      <img
                        className="project_image"
                        src={url} // Adjust the path as needed
                        alt={`${project.title} image ${imageIndex + 1}`}
                      />
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
              <p>{project.description}</p>
              {project.repositoryUrl && (
                <button
                  className="repository_button"
                  onClick={() =>
                    window.open(project.repositoryUrl || "", "_blank")
                  }
                >
                  {i18n.t("Repository")}
                </button>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
