import typoLottie from "@public/assets/json/hero-typo.json";
import Lottie from "lottie-react";

export function TypoComponent() {
  return (
    <div className="">
      <Lottie animationData={typoLottie} loop={false} />
      <p className="text-[1.375rem] font-medium leading-[1.625rem] text-center">
        STC stands for Seoul Tiger Capital.
        <br />
        We are a thesis-driven global asset management fire dedicated
        <br />
        to the active management of blockchain and
        <br />
        digital asset-based portfolios.
      </p>
    </div>
  );
}
