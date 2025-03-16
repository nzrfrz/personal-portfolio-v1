
import { useMemo } from "react";
import { jelloHoverAnim, useContactmeAnim } from "../../animation";

import { GlobeGL } from "./GlobeGL";

import iconGmail from "../../assets/icon-gmail.png";
import iconWhatsapp from "../../assets/icon-whatsapp.png";
import iconTelegram from "../../assets/icon-telegram.png";
import styles from "../../_styles/Contactme.module.css";

const contactIconList = [
  {
    label: "gmail",
    image: iconGmail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nzr.frz@gmail.com",
  },
  {
    label: "whatsApp",
    image: iconWhatsapp,
    href: "https://wa.me/62895353541114",
  },
  {
    label: "telegram",
    image: iconTelegram,
    href: "https://t.me/+62895353541114",
  },
];

export function ContactMe() {
  const {
    pageTitleRef,
    shoerBriefRef,
    contactIconsRef,
    shortBriefHoverAnim,
    shortBriefHoverReset,
  } = useContactmeAnim();

  const renderPageTitle = useMemo(() => {
    const title = "Contact Me";
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

  const renderContactIcon = useMemo(() => {
    return (
      <>
        {
          contactIconList.map((item, index) =>
            <div
              key={index}
              className={styles.iconWrapper}
              onClick={() => window.open(item.href, "_blank")}
              ref={(el) => {
                contactIconsRef.current[index] = el;
              }}
            >
              <img src={item.image} />
            </div>
          )
        }
      </>
    )
  }, [contactIconList]);

  return (
    <>
    <GlobeGL />
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.title}>
          {renderPageTitle}
        </div>

        <div
          ref={shoerBriefRef}
          className={styles.shortbriefWrapper}
          onMouseEnter={() => shortBriefHoverAnim(shoerBriefRef)}
          onMouseLeave={() => shortBriefHoverReset(shoerBriefRef)}
        >
          <div>
            Looking for a skilled full-stack developer? I build scalable web and mobile apps using React, Node.js, and MongoDB, focusing on performance, UI/UX, and API development. From optimizing databases to debugging critical issues, I ensure smooth applications. Open to onsite or remote work—let’s connect and create something great!
          </div>
        </div>

        <div className={styles.contactmePlatformWrapper}>
          {renderContactIcon}
        </div>

      </div>
    </div>
    </>
  );
};