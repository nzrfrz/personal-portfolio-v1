import { useEffect, useRef } from "react";

import gsap from "gsap";

export const useContactmeAnim = () => {
  const shoerBriefRef = useRef<HTMLDivElement | null>(null);
  const pageTitleRef = useRef<(HTMLDivElement | null)[]>([]);
  const contactIconsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  function shortBriefEntranceAnim() {
    if (!shoerBriefRef.current) return;

    gsap.fromTo(
      shoerBriefRef.current,
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
        delay: 2.5,
        ease: "sine",
      }
    );
  };

  function contactIconEntrance() {
    contactIconsRef.current.forEach((element, index) => {
      if (!element) return;

      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: 600,
          ease: "power2.in",
        },
        {
          opacity: 1,
          x: 0,
          delay: (index / 2.5) + 3,
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
  };

  const shortBriefHoverAnim = (
    refHook: React.RefObject<HTMLDivElement | null>,
  ) => {
    const element = refHook.current?.querySelector("div");
    if (!element) return;

    gsap.to(
      element,
      { scale: 1.03, backgroundPosition: "-100%", duration: 0.25, ease: "sine.in" }
    );
  };

  const shortBriefHoverReset = (
    refHook: React.RefObject<HTMLDivElement | null>,
  ) => {
    const element = refHook.current?.querySelector("div");
    if (!element) return;

    gsap.to(
      element,
      { scale: 1, backgroundPosition: 0, duration: 0.25, ease: "sine.in" }
    );
  };

  useEffect(() => {
    pageTitleEntranceAnim();
    shortBriefEntranceAnim();
    contactIconEntrance();
  }, []);

  return {
    pageTitleRef,
    shoerBriefRef,
    contactIconsRef,
    shortBriefHoverAnim,
    shortBriefHoverReset,
  };
};