import { 
  use, 
  useEffect, 
  useRef, 
  useState,
} from "react";
import { GlobalContext } from "../context/createContext";

import gsap from "gsap";

export const useExperiencesAnim = (styles: CSSModuleClasses) => {
  const pageTitleRef = useRef<(HTMLDivElement | null)[]>([]);
  const expContentRef = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollingDivRef, setScrollPosition } = use(GlobalContext);

  const [isInitAnimDone, setIsInitAnimDone] = useState(false);

  function pageTitleEntranceAnim() {
    setIsInitAnimDone(false);
    if (!pageTitleRef.current) return;

    pageTitleRef.current.forEach((element, index) => {
      const titleLetter = element?.querySelector("div");
      if (!titleLetter) return;

      gsap.fromTo(
        titleLetter,
        {
          opacity: 0,
          x: -500,
          rotate: -720,
          filter: "blur(50px)"
        },
        {
          x: 0,
          rotate: 0,
          filter: "blur(0)",
          opacity: 1,
          duration: 0.65,
          delay: index / 5.5,
          ease: "sine.in",
          onComplete: () => {
            gsap.effects.bouncingLeft(titleLetter);
          }
        }
      );
    });
  };

  function workYearEntrance() {
    expContentRef.current.forEach((element, index) => {
      const yearElement = element?.querySelector(`.${styles.workYearWrapper}`);
      if (!yearElement) return;

      // translateX(-1000px) scaleX(2.5) scaleY(0.2); transform-origin: 100% 50%;
      gsap.fromTo(
        yearElement,
        {
          translateX: "-1000px",
          scaleX: 2.5,
          scaleY: 0.2,
          transformOrigin: "100% 50%",
          filter: "blur(40px)",
          opacity: 0,
        },
        {
          translateX: "0px",
          scaleX: 1,
          scaleY: 1,
          transformOrigin: "50% 50%",
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.6,
          delay: (index / 2) + 3,
          ease: "sine"
        }
      );
    });
  };
  
  function workDetailEntrance() {
    expContentRef.current.forEach((element, index) => {
      const workDetail = element?.querySelector(`.${styles.workDetailWrapper}`);
      if (!workDetail) return;

      gsap.fromTo(
        workDetail,
        {
          translateX: "1000px",
          scaleX: 2.5,
          scaleY: 0.2,
          transformOrigin: "0% 50%",
          filter: "blur(40px)",
          opacity: 0,
        },
        {
          translateX: "0px",
          scaleX: 1,
          scaleY: 1,
          transformOrigin: "50% 50%",
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.6,
          delay: (index / 2) + 3,
          ease: "sine"
        }
      );
    });
  };

  function jobDescEntrance() {
    expContentRef.current.forEach((element, index) => {
      const content = element?.querySelector(`.${styles.jobDescWrapper}`);
      if (!content) return;

      gsap.fromTo(
        content,
        {
          rotateY: 20,
          rotateX: 35,
          translateX: "300px",
          translateY: "300px",
          skewX: 35,
          skewY: -10,

          opacity: 0,
        },
        {
          rotateY: 0,
          rotateX: 0,
          translateX: "0",
          translateY: "0",
          skewX: 0,
          skewY: 0,

          opacity: 1,
          duration: 0.6,
          delay: (index / 2.5) + 3,
          ease: "sine",
          onComplete: () => {
            setIsInitAnimDone(true);
          }
        }
      );
    });
  };

  function techstackEntrance() {
    expContentRef.current.forEach((element) => {
      const wrapper = element?.querySelectorAll(`.${styles.techStackWrapper} > .${styles.techStackCapsuleWrapper}`);
      wrapper?.forEach((item, itemIndex) => {
        const capsule = item.querySelector("div");
        if (!capsule) return;

        gsap.fromTo(
          capsule,
          {
            opacity: 0,
            x: 600,
            ease: "power2.in",
          },
          {
            opacity: 1,
            x: 0,
            delay: (itemIndex / 2.5) + 3.5,
            duration: 1,
            keyframes: [
              { x: 0, ease: "sine.out", offset: 0.38 },
              { x: 68, ease: "sine.out", offset: 0.55 },
              { x: 0, ease: "sine.out", offset: 0.72 },
              { x: 32, ease: "sine.out", offset: 0.81 },
              { x: 0, ease: "sine.out", offset: 0.90 },
              { x: 8, ease: "sine.out", offset: 0.95 },
              { x: 0, ease: "sine.out", offset: 1 },
            ],
          }
        );

      });

    })
  };

  const handleScroll = () => {
    const div = scrollingDivRef.current;
    if (!div) return;

    setScrollPosition && setScrollPosition({
      scrollX: div.scrollLeft,
      scrollY: div.scrollTop,
    });
  };

  useEffect(() => {
    const div = scrollingDivRef.current;
    if (!div) return;

    div.addEventListener("scroll", handleScroll);

    return () => {
      div.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingDivRef.current]);

  useEffect(() => {
    pageTitleEntranceAnim();
    workYearEntrance();
    workDetailEntrance();
    jobDescEntrance();
    techstackEntrance();
  }, []);
  
  return {
    pageTitleRef,
    expContentRef,
    scrollingDivRef,
    isInitAnimDone,
  };
};