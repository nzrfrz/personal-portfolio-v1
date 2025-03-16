import { createContext } from "react";

export type windowDimensionData = { width: number, height: number };
export type scrollPositionData = { scrollX: number, scrollY: number };

export interface GlobalContextProps {
  language: string,
  setLanguage: React.Dispatch<React.SetStateAction<string>>,
  windowDimension: windowDimensionData,
  scrollingDivRef: React.RefObject<HTMLDivElement | null>,
  scrollPosition: scrollPositionData,
  setScrollPosition?: React.Dispatch<React.SetStateAction<scrollPositionData>>,
  isNavlogoOpen?: boolean,
  setIsNavlogoOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const initialGlobalContextValue: GlobalContextProps = {
  language: "",
  setLanguage: () => { },
  isNavlogoOpen: false,
  setIsNavlogoOpen: () => { },
  windowDimension: { width: 0, height: 0 },
  scrollingDivRef: null as unknown as React.RefObject<HTMLDivElement | null>,
  scrollPosition: { scrollX: 0, scrollY: 0 },
  setScrollPosition: () => {}
};

export const GlobalContext = createContext<GlobalContextProps>(initialGlobalContextValue);