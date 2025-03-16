import {
  SiJavascript,
  SiUnity,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiExpo
} from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import styles from "../../_styles/AboutMe.module.css";

import { useTechStackRingAnim } from "../../animation";

const techStackIconData = [
  {
    label: "html5",
    iconColor: "#e44d26",
    icon: <SiHtml5 />
  },
  {
    label: "css",
    iconColor: "#167dbe",
    icon: <SiCss3 />
  },
  {
    label: "javascript",
    iconColor: "gold",
    icon: <SiJavascript />
  },
  {
    label: "nodejs",
    iconColor: "#026e00",
    icon: <SiNodedotjs />
  },
  {
    label: "reactjs",
    iconColor: "#61dafb",
    icon: <SiReact />
  },
  {
    label: "expo",
    iconColor: "#bcc3cd",
    icon: <SiExpo />
  },
  {
    label: "unity3D",
    iconColor: "#808080",
    icon: <SiUnity />
  },
  {
    label: "typescript",
    iconColor: "#0074c2",
    icon: <SiTypescript />
  },
  {
    label: "mySql",
    iconColor: "#00758f",
    icon: <SiMysql />
  },
  {
    label: "mongoDB",
    iconColor: "#589636",
    icon: <SiMongodb />
  },
  {
    label: "figma",
    iconColor: "#808080",
    icon: <FaFigma />
  }
];

export function TechStackRing() {

  const {
    ringRef,
    techStackIconRef,
  } = useTechStackRingAnim();

  return (
    <div className={styles.techstackRingWrapper}>
      <div ref={ringRef} className={styles.ringEffects}>
        {
          techStackIconData.map((icon, index) =>
            <div
              key={index}
              style={{ color: icon.iconColor, "--itemIndex": index } as React.CSSProperties}
              className={styles.techStackIconWrapper}
              ref={(el) => { techStackIconRef.current[index] = el }}
            >
              <div>
                {icon.icon}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};