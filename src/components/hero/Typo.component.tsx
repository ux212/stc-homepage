import typoLottie from "@public/assets/json/hero-typo.json";
import { useMobileContext } from "@src/lib/contexts";
import Lottie from "lottie-react";

export function TypoComponent() {
  const isMobile = useMobileContext();

  return (
    <div className="flex flex-col items-center pt-72" id="typo">
      <div className="max-w-[1302px] h-[82px] lg:h-[333px] mb-28">
        <Lottie animationData={typoLottie} loop={false} />
      </div>
      <p className="text-[0.875rem] lg:text-[1.375rem] font-medium leading-4 lg:leading-[1.625rem] text-center">
        STC stands for Seoul Tiger Capital.
        <br />
        We are a thesis-driven global asset{isMobile ? <br /> : " "}management
        fire dedicated
        <br />
        to the active management of blockchain and
        <br />
        digital asset-based portfolios.
      </p>
    </div>
  );
}
