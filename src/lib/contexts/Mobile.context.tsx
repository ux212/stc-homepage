import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { useWindowSize } from "@src/lib/hooks";

const MobileContext = createContext(false);

export function MobileContextProvider({ children }: { children: ReactNode }) {
  const { width } = useWindowSize();
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width! < 1024);
  }, [width]);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
}

export const useMobileContext = () => useContext(MobileContext);
