
import {
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IProjects, projectsData } from "../../_utils/projectsData";
import styles from "../../_styles/ProjectsMobile.module.css";

interface ThisProps {
  onCLickExternalLink?: (project: IProjects) => void;
  onClickYoutubeIcon?: (project: IProjects) => void;
  projectContentsRef?: React.RefObject<(HTMLDivElement | null)[]>;
}

export const ProjectsContentMobile: React.FC<ThisProps> = ({
  onCLickExternalLink,
  onClickYoutubeIcon,
  projectContentsRef,
}) => {

  return (
    <div className={styles.contentWrapper}>
      {
        projectsData.map((project, index) =>
          <div
            key={index}
            className={styles.projectWrapper}
            ref={(el) => {
              if (!projectContentsRef) return;
              projectContentsRef.current[index] = el;
            }}
          >
            <div className={project.thumbOrientation === "landscape" ? styles.pojectThumb : styles.pojectThumbPortrait}>
              <img src={project.thumbImage} width={"100%"} height={"100%"} />
            </div>
            <div className={styles.projectContentWrapper}>
              <div className={styles.projectTitleWrapper}>
                <div className={styles.projectName}>{project.name}</div>
                <div> | </div>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() => onCLickExternalLink && onCLickExternalLink(project)}
                >
                  <FaExternalLinkAlt />
                </div>
                <div
                  style={{
                    display: project.videoUrl === "" ? "none" : "flex",
                    alignItems: "center",
                    fontSize: "25px"
                  }}
                  onClick={() => onClickYoutubeIcon && onClickYoutubeIcon(project)}
                >
                  <FaYoutube />
                </div>
              </div>

              <div className={styles.descriptionWrapper}>
                <div>{project.description}</div>
              </div>

              <div className={styles.techStackWrapper}>
                {
                  project.techStack.map((item, index) =>
                    <div
                      key={index}
                      className={styles.techStackCapsuleWrapper}
                    >
                      <div className={styles.techStackCapsule}>{item}</div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
};