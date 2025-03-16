import { useMemo } from "react";
import { 
  jelloHoverAnim, 
  useHomePageAnim,
  bottomShakeHoverAnim, 
} from "../../animation";

import styles from "../../_styles/Home.module.css";

export function Home() {
  const {
    iamRef,
    greetingRef,
    fullNameRef,
    jobTitleRef,
    introductionRef,
    tiltContainerRef,
  } = useHomePageAnim();

  const renderGreetingText = useMemo(() => {
    const greetingChars = ["H", "i", "!"];
    return (
      <>
        {
          greetingChars.map((item, index) =>
            <div
              key={index}
              className={styles.greetingChar}
              ref={(el) => { greetingRef.current[index] = el }}
              onMouseEnter={() => jelloHoverAnim(false, greetingRef, index)}
            >
              <div>{item}</div>
            </div>
          )
        }
      </>
    )
  }, []);

  const renderFullName = useMemo(() => {
    const firstName = ['N', 'i', 'z', 'a', 'r', ' ', 'F', 'a', 'r', 'i', 'z', 'i'];
    return (
      <div style={{ display: "flex", gap: 2 }}>
        {
          firstName.map((item, index) =>
            <div
              key={index}
              className={styles.firstName}
              ref={(el) => { fullNameRef.current[index] = el }}
              onMouseEnter={() => jelloHoverAnim(false, fullNameRef, index)}
            >
              {
                item === ' ' ?
                <span>&nbsp;</span>
                :
                <div>{item}</div>
              }
            </div>
          )
        }
      </div>
    )
  }, []);

  const renderJobTitle = useMemo(() => {
    const jobTitle = ["MERN", "Stack", "And", "Mobile", "Developer"];
    return (
      <>
        {
          jobTitle.map((item, index) =>
            <div
              key={index}
              ref={(el) => { jobTitleRef.current[index] = el }}
              onMouseEnter={() => bottomShakeHoverAnim(false, jobTitleRef, index)}
            >
              <div>{item}</div>
            </div>
          )
        }
      </>
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div ref={tiltContainerRef} className={styles.profilePhotoContainer}>
          <div className={styles.profilePhotoBG}></div>
          <div className={styles.profilePhotoOBJ}></div>
        </div>

        <div className={styles.greetingsWrapper}>
          <div className={styles.greetings}>
            {renderGreetingText}
          </div>

          <div ref={introductionRef} className={styles.introduction}>
            <div ref={iamRef} onMouseEnter={() => jelloHoverAnim(false, iamRef, 0)}>I'm</div>
            {renderFullName}
          </div>

          <div className={styles.jobTitle}>
            {renderJobTitle}
          </div>
        </div>
      </div>
    </div>
  );
};