import { useMemo } from "react";
import { jelloHoverAnim, useAbouPageAnim } from "../../animation";

import { TechStackRing } from "./TechStackRing";
import styles from "../../_styles/Aboutme.module.css";

export const About = () => {

  const {
    contentRef,
    pageTitleRef,
    scrollingDivRef,
    contentHoverAnim,
    contentHoverReset
  } = useAbouPageAnim();

  const renderPageTitle = useMemo(() => {
    const title = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];

    return (
      <>
        {
          title.map((char, index) =>
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

  const renderContent = useMemo(() => {
    const contents = [
      "Full-Stack Developer with over 2 years of experience specializing in the MERN stack, building and optimizing web and mobile applications.",
      "Proficient in React, Node.js, MongoDB, and TypeScript, with a focus on performance optimization, API design, and responsive UI/UX.",
      "Passionate about writing clean, maintainable code, following best practices, and continuously learning new technologies to improve development efficiency and software quality."
    ];

    return (
      <>
        {
          contents.map((content, index) =>
            <div
              key={index}
              className={styles.contentWrapper}
              ref={(el) => { contentRef.current[index] = el }}
              onMouseEnter={() => contentHoverAnim(false, contentRef, index)}
              onMouseLeave={() => contentHoverReset(false, contentRef, index)}
            >
              <div>{content}</div>
            </div>
          )
        }
      </>
    );
  }, []);

  return (
    <div ref={scrollingDivRef} className={styles.container}>

      <TechStackRing />

      <div className={styles.wrapper}>

        <div className={styles.title}>
          {renderPageTitle}
        </div>

        <div className={styles.contentContainer}>
          {renderContent}
        </div>

      </div>

    </div>
  );
};