import {
  useRef,
  useState,
  useEffect,
} from "react";
import {
  GlobalContext,
  GlobalContextProps,
  scrollPositionData,
  windowDimensionData
} from "./createContext";

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");
  const [isNavlogoOpen, setIsNavlogoOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState<windowDimensionData>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const scrollingDivRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState<scrollPositionData>({
    scrollX: 0,
    scrollY: 0
  });

  function getWindowSize() {
    setIsNavlogoOpen(false);

    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", getWindowSize);

    return () => {
      window.removeEventListener('resize', getWindowSize);
    }
  }, [window]);

  const contextValues: GlobalContextProps = {
    windowDimension,
    scrollingDivRef,
    scrollPosition, setScrollPosition,
    language, setLanguage,
    isNavlogoOpen, setIsNavlogoOpen,
  };

  return (
    <GlobalContext value={contextValues}>
      {children}
    </GlobalContext>
  );
};