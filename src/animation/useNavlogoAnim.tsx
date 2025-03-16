import { 
  use, 
  useRef,
  useEffect,
  useState,
  useCallback, 
} from "react";
import { GlobalContext } from "../context/createContext";
import { useLocation, useNavigate } from "react-router-dom";

import gsap from "gsap";

export const useNavlogoAnim = () => {
  const location = useLocation();
  const navigateTo = useNavigate();
  const { windowDimension } = use(GlobalContext);

  const navLogoRef = useRef<HTMLButtonElement | null>(null);
  const logoRouteItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isNavlogoOpen, setIsNavlogoOpen] = useState(false);

  function animateNavLogo() {
    gsap.to(navLogoRef.current, {
      scale: 0.9,
      duration: 0.1,
      ease: "power1",
      yoyo: true,
      repeat: 1,
    });

    gsap.fromTo(
      navLogoRef.current,
      { rotation: isNavlogoOpen === false ? 0 : 360 },
      {
        rotation: isNavlogoOpen === false ? 360 : 0,
        duration: 0.4,
        ease: "power1",
      }
    );
  };

  function onLogoClick() {
    setIsNavlogoOpen((prevVal) => !prevVal);
    animateNavLogo();
  };

  const onNavLogoOpen = (element: HTMLDivElement, index: number) => {
    gsap.to(element, {
      opacity: 1,
      zIndex: 7,
      display: "block",
      y: index / 7,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  const onNavLogoClose = (element: HTMLDivElement, index: number) => {
    gsap.to(element, {
      opacity: 0,
      display: "none",
      y: (index * -43) - 45,
      zIndex: -10,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  const onHoverExtLink = (index: number) => {
    const element = logoRouteItemsRef.current[index]?.querySelector("img");
    if (!element) return;

    gsap.fromTo(
      element,
      {
        rotateY: 0,
        duration: 1.5,
        ease: "power2.inOut"
      },
      {
        rotateY: 360,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  };

  const onRouteLinkClick = (path: string) => {
    navigateTo(path);
    setIsNavlogoOpen(false);
  };

  const onExternalLinkClick = (path: string) => {
    setIsNavlogoOpen(false);
    setTimeout(() => {
      if (path !== null) return window.open(path as string, "_blank");
    }, 300);
  };

  const onContainerClick = useCallback(() => {
    if (isNavlogoOpen === false) return;
    setIsNavlogoOpen(false);
  }, [isNavlogoOpen]);

  useEffect(() => {
    logoRouteItemsRef.current.forEach((element, index) => {
      const routeItem = element?.querySelector("div");
      if (!routeItem) return;

      if (isNavlogoOpen === false) return onNavLogoClose(routeItem, index);
      else return onNavLogoOpen(routeItem, index);
    });
  }, [location, isNavlogoOpen, windowDimension]);
  
  return {
    navLogoRef,
    logoRouteItemsRef,
    windowDimension,
    isNavlogoOpen,
    onLogoClick,
    onRouteLinkClick,
    onExternalLinkClick,
    onHoverExtLink,
    onContainerClick,
  };
};