import gsap from "gsap";

gsap.registerEffect({
  name: "bouncing",
  effect: (targets: GSAPTweenTarget) => {
    gsap.timeline()
      .to(targets, { y: -45, duration: 0.2, ease: "none" })
      .to(targets, { y: 0, duration: 0.1, ease: "none" })
      .to(targets, { y: -24, duration: 0.15, ease: "none" })
      .to(targets, { y: 0, duration: 0.1, ease: "none" })
      .to(targets, { y: -12, duration: 0.1, ease: "none" })
      .to(targets, { y: 0, duration: 0.1, ease: "none" })
      .to(targets, { y: -6, duration: 0.08, ease: "none" })
      .to(targets, { y: 0, duration: 0.08, ease: "none" })
      .to(targets, { y: -4, duration: 0.06, ease: "none" })
      .to(targets, { y: 0, duration: 0.06, ease: "none" });
  }
});

gsap.registerEffect({
  name: "bouncingLeft",
  effect: (targets: GSAPTweenTarget) => {
    gsap.timeline()
      .to(targets, { x: -45, duration: 0.2, ease: "none" })
      .to(targets, { x: 0, duration: 0.1, ease: "none" })
      .to(targets, { x: -24, duration: 0.15, ease: "none" })
      .to(targets, { x: 0, duration: 0.1, ease: "none" })
      .to(targets, { x: -12, duration: 0.1, ease: "none" })
      .to(targets, { x: 0, duration: 0.1, ease: "none" })
      .to(targets, { x: -6, duration: 0.08, ease: "none" })
      .to(targets, { x: 0, duration: 0.08, ease: "none" })
      .to(targets, { x: -4, duration: 0.06, ease: "none" })
      .to(targets, { x: 0, duration: 0.06, ease: "none" });
  }
});

export const jelloHoverAnim = (
  isSingleElement: boolean,
  refHook: React.RefObject<(HTMLDivElement | null)[] | HTMLDivElement | null>,
  index: number
) => {
  let character: HTMLDivElement | null | undefined;

  if (!isSingleElement && Array.isArray(refHook.current)) {
    character = refHook.current[index]?.querySelector("div");
  } else if (refHook.current instanceof HTMLDivElement) {
    character = refHook.current;
  }

  if (!character) return;

  gsap.fromTo(
    character,
    { scaleX: 1, scaleY: 1 },
    {
      keyframes: [
        { scaleX: 1.25, scaleY: 0.75, offset: 0.3 },
        { scaleX: 0.75, scaleY: 1.25, offset: 0.4 },
        { scaleX: 1.15, scaleY: 0.85, offset: 0.5 },
        { scaleX: 0.95, scaleY: 1.05, offset: 0.65 },
        { scaleX: 1.05, scaleY: 0.95, offset: 0.75 },
        { scaleX: 1, scaleY: 1, offset: 1 },
      ],
      duration: 0.9,
      stagger: 1,
      ease: "power1.inOut",
    }
  );
};

export const bottomShakeHoverAnim = (
  isSingleElement: boolean,
  refHook: React.RefObject<(HTMLDivElement | null)[] | HTMLDivElement | null>,
  index: number
) => {
  let sentence: HTMLDivElement | null | undefined;

  if (!isSingleElement && Array.isArray(refHook.current)) {
    sentence = refHook.current[index]?.querySelector("div");
  } else if (refHook.current instanceof HTMLDivElement) {
    sentence = refHook.current;
  }

  if (!sentence) return;

  gsap.fromTo(
    sentence,
    { rotate: 0, transformOrigin: "50% 100%" },
    {
      duration: 1, // Adjust as needed
      keyframes: [
        { rotate: 2, offset: 0.1 },
        { rotate: -4, offset: 0.2 },
        { rotate: 4, offset: 0.3 },
        { rotate: -4, offset: 0.4 },
        { rotate: 4, offset: 0.5 },
        { rotate: -4, offset: 0.6 },
        { rotate: 4, offset: 0.7 },
        { rotate: -2, offset: 0.8 },
        { rotate: 2, offset: 0.9 },
        { rotate: 0, offset: 1 },
      ],
      ease: "sine",
    }
  );
};

export const topLeftShakeHoverAnim = (
  isSingleElement: boolean,
  refHook: React.RefObject<(HTMLDivElement | null)[] | HTMLDivElement | null>,
  index: number
) => {
  let text: HTMLDivElement | null | undefined;

  if (!isSingleElement && Array.isArray(refHook.current)) {
    text = refHook.current[index]?.querySelector("div");
  } else if (refHook.current instanceof HTMLDivElement) {
    text = refHook.current;
  }

  if (!text) return;

  gsap.fromTo(
    text,
    { rotate: 0, transformOrigin: "0% 0%" },
    {
      duration: 1,
      keyframes: [
        { rotate: 2, offset: 0.1 },
        { rotate: -4, offset: 0.2 },
        { rotate: 4, offset: 0.3 },
        { rotate: -4, offset: 0.4 },
        { rotate: 4, offset: 0.5 },
        { rotate: -4, offset: 0.6 },
        { rotate: 4, offset: 0.7 },
        { rotate: -2, offset: 0.8 },
        { rotate: 2, offset: 0.9 },
        { rotate: 0, offset: 1 },
      ],
      ease: "sine.in",
    }
  );
};