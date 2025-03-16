import { 
  use, 
  useEffect, 
  useRef 
} from "react";
import { GlobalContext } from "../context/createContext";

import gsap from "gsap";

export const useAbouPageAnim = () => {
  const pageTitleRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollingDivRef } = use(GlobalContext);

  function pageTitleEntranceAnim() {
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
    if (!contentRef.current) return;

    contentRef.current.map((element, index) => {
      const content = element?.querySelector("div");
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
          delay: (index / 2.5) + 2,
          ease: "sine",
        }
      );
    });
  };

  const contentHoverAnim = (
    isSingleElement: boolean,
    refHook: React.RefObject<(HTMLDivElement | null)[] | HTMLDivElement | null>,
    index: number
  ) => {
    let element: HTMLDivElement | null | undefined;

    if (!isSingleElement && Array.isArray(refHook.current)) {
      element = refHook.current[index]?.querySelector(`div`);
    } else if (refHook.current instanceof HTMLDivElement) {
      element = refHook.current;
    }

    if (!element) return;

    gsap.to(
      element,
      { scale: 1.03, backgroundPosition: "-100%", duration: 0.25, ease: "sine.in" }
    );
  };

  const contentHoverReset = (
    isSingleElement: boolean,
    refHook: React.RefObject<(HTMLDivElement | null)[] | HTMLDivElement | null>,
    index: number
  ) => {
    let element: HTMLDivElement | null | undefined;

    if (!isSingleElement && Array.isArray(refHook.current)) {
      element = refHook.current[index]?.querySelector(`div`);
    } else if (refHook.current instanceof HTMLDivElement) {
      element = refHook.current;
    }

    if (!element) return;

    gsap.to(
      element,
      { scale: 1, backgroundPosition: 0, duration: 0.25, ease: "sine.in" }
    );
  };

  useEffect(() => {
    pageTitleEntranceAnim();
    contentEntranceAnim();
  }, []);
  
  return {
    contentRef,
    pageTitleRef,
    scrollingDivRef,
    contentHoverAnim,
    contentHoverReset
  };
};