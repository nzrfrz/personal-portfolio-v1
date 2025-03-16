import { useMemo, useState } from "react";

import { ProjectVideoPlayer } from "./ProjectVideoPlayer";
import { ProjectsContentMobile } from "./ProjectsContentMobile";
import { ProjectScreenshotContainer } from "./ProjectScreenshotContainer";

import {
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";
import styles from "../../_styles/Projects.module.css";
import { IProjects, projectsData } from "../../_utils/projectsData";
import { jelloHoverAnim, useProjectsAnim } from "../../animation";

export function Projects() {

  const {
    pageTitleRef,
    isInitAnimDone,
    scrollingDivRef,
    windowDimension,
    projectContentsRef,
  } = useProjectsAnim();

  const [isVideoContainerOpen, setIsVideoContainerOpen] = useState(false);
  const [isScreenshotContainerOpen, setIsScreenshotContainerOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState<IProjects | undefined>(undefined);

  const onClickYoutubeIcon = (projectData: IProjects) => {
    setSelectedProjectData(projectData);
    setIsVideoContainerOpen(true);
  };

  const onClickExternalLink = (projectData: IProjects) => {
    if (projectData.projectUrl !== "") return window.open(projectData.projectUrl as string, "_blank");
    setSelectedProjectData(projectData);
    setIsScreenshotContainerOpen(true);
  };

  function onCloseVideoContainer() {
    setSelectedProjectData(undefined);
    setIsVideoContainerOpen(false);
  };

  function onCloseScreenshotContainer() {
    setSelectedProjectData(undefined);
    setIsScreenshotContainerOpen(false);
  };

  const renderPageTitle = useMemo(() => {
    const title = "Projects";
    const splittedTitle = title.split("");

    return (
      <>
        {
          splittedTitle.map((char, index) =>
            <div
              key={index}
              ref={(el) => { pageTitleRef.current[index] = el }}
              onMouseEnter={() => jelloHoverAnim(false, pageTitleRef, index)}
            >
              {
                char === " " ?
                  <span>&nbsp;</span>
                  :
                  <div>{char}</div>
              }
            </div>
          )
        }
      </>
    )
  }, []);

  const renderProjectThumb = (
    thumbOrientation: string,
    thumbImage: string,
    isEven: boolean,
  ) => {

    switch (true) {
      case thumbOrientation === "landscape" && isEven === true:
        return (
          <div className={styles.pojectThumb}>
            <img src={thumbImage} width={"100%"} height={"100%"} />
          </div>
        );
      case thumbOrientation === "landscape" && isEven === false:
        return (
          <div className={styles.pojectThumbRight}>
            <img src={thumbImage} width={"100%"} height={"100%"} />
          </div>
        );
      case thumbOrientation === "portrait" && isEven === true:
        return (
          <div className={styles.pojectThumbPortrait}>
            <img src={thumbImage} width={"100%"} height={"100%"} />
          </div>
        );
      case thumbOrientation === "portrait" && isEven === false:
        return (
          <div className={styles.pojectThumbPortraitRight}>
            <img src={thumbImage} width={"100%"} height={"100%"} />
          </div>
        );
      default:
        break;
    }
  };

  const renderProjectTechStack = (techStack: string[]) => {
    return techStack.map((item, index) =>
      <div
        key={index}
        className={styles.techStackCapsuleWrapper}
      >
        <div className={styles.techStackCapsule}>{item}</div>
      </div>
    );
  };

  const renderProjects = useMemo(() => {
    return projectsData.map((project, index) => {
      const isEven = index % 2 === 0;

      return (
        <div
          key={project.id}
          className={styles.projectWrapper}
          ref={(el) => {
            projectContentsRef.current[index] = el;
          }}
        >
          {renderProjectThumb(project.thumbOrientation, project.thumbImage, isEven)}
          <div className={isEven === false ? styles.projectContentWrapperLeft : styles.projectContentWrapper}>

            <div className={styles.projectTitleWrapper}>
              <div className={styles.projectName}>{project.name}</div>
              <div> | </div>
              <div
                className={styles.extLink}
                onClick={() => onClickExternalLink(project)}
              >
                <FaExternalLinkAlt />
              </div>
              <div
                style={{
                  display: project.videoUrl === "" ? "none" : "flex",
                  alignItems: "center",
                  fontSize: "25px"
                }}
                onClick={() => onClickYoutubeIcon(project)}
              >
                <FaYoutube />
              </div>
            </div>

            <div className={isEven === false ? styles.descriptionWrapperLeft : styles.descriptionWrapper}>
              <div>{project.description}</div>
            </div>

            <div className={styles.techStackWrapper}>
              {renderProjectTechStack(project.techStack)}
            </div>

          </div>
        </div>
      )
    });
  }, [projectsData, renderProjectThumb, renderProjectTechStack, projectContentsRef.current]);

  return (
    <>
      <ProjectVideoPlayer
        onClose={onCloseVideoContainer}
        selectedProjectData={selectedProjectData}
        isVideoContainerOpen={isVideoContainerOpen}
      />

      <ProjectScreenshotContainer
        onClose={onCloseScreenshotContainer}
        selectedProjectData={selectedProjectData}
        isScreenshotContainerOpen={isScreenshotContainerOpen}
      />

      <div ref={scrollingDivRef} className={isInitAnimDone === false ? styles.initContainer : styles.container}>
        <div className={styles.wrapper}>

          <div className={styles.title}>
            {renderPageTitle}
          </div>

          <div>
            {
              windowDimension.width >= 650 ?
                renderProjects
                :
                <ProjectsContentMobile 
                  onCLickExternalLink={onClickExternalLink}
                  onClickYoutubeIcon={onClickYoutubeIcon}
                  projectContentsRef={projectContentsRef}
                />
            }
          </div>

        </div>
      </div>
    </>
  );
};