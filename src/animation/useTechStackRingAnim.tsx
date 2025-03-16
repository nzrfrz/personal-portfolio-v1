import { 
  useRef, 
  useEffect, 
} from "react";
import gsap from "gsap";

export const useTechStackRingAnim = () => {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const techStackIconRef = useRef<(HTMLDivElement | null)[]>([]);

  function animateRingEffect() {
    if (!ringRef.current) return;

    gsap.fromTo(
      ringRef.current,
      {
        perspective: "1000px",
        rotateY: 360,
        rotateX: 15,
      },
      {
        perspective: "1000px",
        rotateY: 0,
        rotateX: 15,
        duration: 22,
        repeat: -1,
        ease: "none",
      }
    );
  };

  function ringEntranceAnim() {
    techStackIconRef.current.forEach((element, index) => {
      const icon = element?.querySelector("div");
      if (!icon) return;

      gsap.fromTo(
        icon,
        {
          translateY: "1000px",
          translateX: "-1000px",
          opacity: 0,
        },
        {
          translateY: 0,
          translateX: 0,
          opacity: .5,
          delay: 2,
          duration: (index / 2.5) + 2.3,
          ease: "sine"
        }
      );
    });
  };

  function ringFloating() {
    if (!ringRef.current) return;

    gsap.fromTo(
      ringRef.current,
      {
        translateY: "-8vw"
      },
      {
        translateY: "5vw",
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine",
      }
    );
  };

  useEffect(() => {
    ringEntranceAnim();
    animateRingEffect();
    ringFloating();
  }, []);
  
  return {
    ringRef,
    techStackIconRef,
  };
};