import { use, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../context/createContext";

import gsap from "gsap";

export const useProjectsAnim = () => {
  const pageTitleRef = useRef<(HTMLDivElement | null)[]>([]);
  const projectContentsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { windowDimension, scrollingDivRef, setScrollPosition } = use(GlobalContext);

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
  
  function contentEntranceAnim() {
    projectContentsRef.current.forEach((element, index) => {
      if (!element) return;

      gsap.fromTo(
        element,
        {
          opacity: 0,
          translateZ: "-1400px",
          translateY: "800px",
        },
        {
          opacity: 1,
          translateZ: "0px",
          translateY: "0px",
          duration: 0.46,
          ease: "power2",
          delay: (index / 2.5) + 1.8,
          onComplete: () => {
            if (index === projectContentsRef.current.length - 1) {
              setTimeout(() => {
                if (scrollingDivRef.current) {
                  scrollingDivRef.current.scrollTo(0, 0);
                  scrollingDivRef.current.style.height = "auto";
                }
              }, 500);
              setIsInitAnimDone(true);
            }
          }
        }
      );
    });    
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
    contentEntranceAnim();
  }, []);

  return {
    pageTitleRef,
    isInitAnimDone,
    scrollingDivRef,
    windowDimension,
    projectContentsRef,
  };
};