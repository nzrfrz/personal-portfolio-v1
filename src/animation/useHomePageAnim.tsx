import { 
  useEffect, 
  useState,
  useRef, 
} from "react";

import gsap from "gsap";

export const useHomePageAnim = () => {
  const iamRef = useRef<HTMLDivElement | null>(null);
  const greetingRef = useRef<(HTMLDivElement | null)[]>([]);
  const fullNameRef = useRef<(HTMLDivElement | null)[]>([]);
  const jobTitleRef = useRef<(HTMLDivElement | null)[]>([]);
  const tiltContainerRef = useRef<HTMLDivElement | null>(null);
  const introductionRef = useRef<HTMLDivElement | null>(null);

  const [isAnimProfilePhotoFinish, setIsAnimProfilePhotoFinish] = useState(false);

  const mouse = { x: 0, y: 0 };
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;

  function animateGreeting() {
    greetingRef.current.forEach((element, index) => {
      const eachText = element?.querySelector("div");
      if (!eachText) return;

      gsap.fromTo(
        eachText,
        {
          opacity: 0,
          rotateY: 20,
          rotateX: 35,
          x: 300,
          y: -300,
          skewX: -35,
          skewY: 10,
        },
        {
          opacity: 1,
          rotateY: 0,
          rotateX: 0,
          x: 0,
          y: 0,
          skewX: 0,
          skewY: 0,
          duration: 0.6,
          ease: "sine.in",
          delay: index / 10,
          onComplete: () => {
            gsap.effects.bouncing(eachText);
          }
        }
      );
    });
  };

  function animateIam() {
    const iamChar = introductionRef.current?.querySelector("div:nth-child(1)");

    gsap.fromTo(
      iamChar!,
      {
        y: 600,
        rotateX: 360,
        scale: 0,
        opacity: 0,
        transformOrigin: "50% -1400px",
      },
      {
        y: 0,
        rotateX: 0,
        scale: 1,
        opacity: 1,
        transformOrigin: "50% 100%",
        delay: 0.7,
        duration: 0.6,
        ease: "sine.in",
        onComplete: () => {
          gsap.effects.bouncing(iamChar);
        }
      }
    );
  };

  function animateFirstName() {

    fullNameRef.current.forEach((element, index) => {
      const eachText = element?.querySelector("div");
      if (!eachText) return;

      gsap.fromTo(
        eachText,
        {
          y: 800,
          rotate: 720,
          filter: "blur(50px)",
          opacity: 0,
        },
        {
          y: 0,
          rotate: 0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.7,
          delay: (index / 10) + 0.9,
          ease: "sine.inOut",
        }
      );
    });
  };

  function animateJobTitle() {
    jobTitleRef.current.forEach((element, index) => {
      const eachText = element?.querySelector("div");
      if (!eachText) return;

      gsap.fromTo(
        eachText,
        {
          opacity: 0,
          x: 600,
          ease: "power2.in",
        },
        {
          opacity: 1,
          x: 0,
          delay: (index / 10) + 2.5,
          duration: 1.1,
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

  function animateProfilePhotoEntrance () {
    setIsAnimProfilePhotoFinish(false);
    gsap.fromTo(
      tiltContainerRef.current,
      {
        rotateY: 35,
        rotateX: 35,
        translateX: "-65vw",
        translateY: "-40vh",
        skewX: 12,
        skewY: 15,
        scale: 0.1,
        opacity: 0,
      },
      {
        rotateY: 0,
        rotateX: 0,
        translateX: 0,
        translateY: 0,
        skewX: 0,
        skewY: 0,
        scale: 1,
        opacity: 1,
        duration: 1.4,
        delay: 3,
        ease: "sine.in",
        onComplete: () => {
          setIsAnimProfilePhotoFinish(true);
        }
      }
    );
  };

  useEffect(() => {
    if (isAnimProfilePhotoFinish === false) return;

    const tiltContainer = tiltContainerRef.current;
    if (!tiltContainer) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.pageX;
      mouse.y = event.pageY;

      const dx = mouse.x - cx;
      const dy = mouse.y - cy;

      const tiltx = dy / cy;
      const tilty = -(dx / cx);

      gsap.to(tiltContainer, {
        rotateX: tiltx * 15,
        rotateY: tilty * 15,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    const handleResize = () => {
      cx = window.innerWidth / 0.5;
      cy = window.innerHeight / 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isAnimProfilePhotoFinish]);

  useEffect(() => {
    animateGreeting();
    animateIam();
    animateFirstName();
    animateJobTitle();
    animateProfilePhotoEntrance();
  }, []);

  return {
    iamRef,
    greetingRef,
    fullNameRef,
    jobTitleRef,
    introductionRef,
    tiltContainerRef,
  };
};