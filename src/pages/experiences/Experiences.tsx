import { useMemo } from "react";
import { jelloHoverAnim, useExperiencesAnim } from "../../animation";

import { experiencesData } from "../../_utils";

import styles from "../../_styles/Experiences.module.css";

export function Experiences() {
  
  const {
    pageTitleRef,
    expContentRef,
    scrollingDivRef,
    isInitAnimDone,
  } = useExperiencesAnim(styles);

  const renderPageTitle = useMemo(() => {
    const title = "Experiences";
    const letter = title.split("");

    return (
      <>
        {
          letter.map((char, index) =>
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
    );
  }, []);

  const renderExperienceContent = useMemo(() => {
    return (
      <>
        {
          experiencesData.map((experience, index) =>
            <div
              key={experience.id}
              ref={(el) => {
                expContentRef.current[index] = el;
              }}
              className={styles.contentWrapper}
            >
              <div className={styles.workYearContainer}>
                <div className={styles.workYearWrapper}>
                  <div>{experience.yearStart}</div>
                  <div>-</div>
                  <div>{experience.yearEnd}</div>
                </div>
              </div>

              <div className={styles.workDetailContainer}>
                <div className={styles.workDetailWrapper}>
                  <div>{experience.companyName}</div>
                  <div>|</div>
                  <div>{experience.position}</div>
                </div>
                <div className={styles.jobDescWrapper}>
                  <div>
                    {experience.jobDescResume}
                  </div>
                </div>
                <div className={styles.techStackWrapper}>
                  {
                    experience.techStack.map((item, idx) =>
                      <div
                        key={idx}
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
      </>
    );
  }, [experiencesData]);

  return (
    <div ref={scrollingDivRef} className={isInitAnimDone === false ? styles.initContainer : styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.title}>
          {renderPageTitle}
        </div>

        <div className={styles.contentContainer}>
          {renderExperienceContent}
        </div>

      </div>
    </div>
  );
};