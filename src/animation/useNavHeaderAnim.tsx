import { 
  use, 
  useEffect, 
  useRef 
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/createContext";

import gsap from "gsap";

export const useNavHeaderAnim = (styles: CSSModuleClasses) => {
  const location = useLocation();
  const navigateTo = useNavigate();
  const { scrollPosition, windowDimension } = use(GlobalContext);  

  const navlinkRef = useRef<HTMLDivElement | null>(null);
  const navlinkWrapperRef = useRef<(HTMLDivElement | null)[]>([]);
  const navHeaderContainerRef = useRef<HTMLDivElement | null>(null);

  const navlinkHoverAnim = (
    isSingleElement: boolean,
    refHook: React.RefObject<(HTMLDivElement | null)[] | HTMLDivElement | null>,
    index: number
  ) => {
    let element: HTMLDivElement | null | undefined;
  
    if (!isSingleElement && Array.isArray(refHook.current)) {
      element = refHook.current[index]?.querySelector(`.${styles?.navLink}`);
    } else if (refHook.current instanceof HTMLDivElement) {
      element = refHook.current;
    }
    
    const navlinkLabel = element?.querySelector("div:nth-child(2)");
    const navlinkUnderline = element?.querySelector(`.${styles.navlinkUnderlined}`);
    if (!navlinkLabel || !navlinkUnderline) return;

    gsap.to(
      navlinkLabel,
      { backgroundPosition: "-100%", duration: 0.25, ease: "sine.in" }
    );

    gsap.to(
      navlinkUnderline,
      { opacity: 1, left: "0", width: "100%", duration: 0.25, ease: "sine.in" }
    );
  };

  const navlinkHoverReset = (
    isSingleElement: boolean,
    refHook: React.RefObject<(HTMLDivElement | null)[] | HTMLDivElement | null>,
    index: number
  ) => {
    let element: HTMLDivElement | null | undefined;
  
    if (!isSingleElement && Array.isArray(refHook.current)) {
      element = refHook.current[index]?.querySelector(`.${styles.navLink}`);
    } else if (refHook.current instanceof HTMLDivElement) {
      element = refHook.current;
    }
    
    const navlinkLabel = element?.querySelector("div:nth-child(2)");
    const navlinkUnderline = element?.querySelector(`.${styles.navlinkUnderlined}`);
    if (!navlinkLabel || !navlinkUnderline) return;

    gsap.to(
      navlinkLabel,
      { backgroundPosition: 0, duration: 0.25, ease: "sine.in" }
    );

    gsap.to(
      navlinkUnderline,
      { opacity: 0, left: "50%", width: 0, duration: 0.25, ease: "sine.in" }
    );
  };
  
  useEffect(() => {
    if (windowDimension.width <= 650 || !navHeaderContainerRef.current) return;

    gsap.to(
      navHeaderContainerRef.current,
      {
        y: scrollPosition.scrollY >= 100 ? -50 : 0,
        duration: 0.3,
        ease: "sine",
        immediateRender: true,
      }
    );
  }, [scrollPosition, windowDimension]);
  

  return {
    location,
    navigateTo,
    windowDimension,
    navlinkRef,
    navlinkWrapperRef,
    navlinkHoverAnim,
    navlinkHoverReset,
    navHeaderContainerRef,
  };
};