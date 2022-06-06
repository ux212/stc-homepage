import { Dispatch, SetStateAction } from "react";

import Arrow from "@public/assets/svg/arrow.svg";
import Logo from "@public/assets/svg/logo.svg";
import ShortLogo from "@public/assets/svg/short-logo.svg";
import { useMobileContext } from "@src/lib/contexts";

export function Header({
  index,
}: {
  index: { pageIndex: number; setIndex: Dispatch<SetStateAction<number>> };
}) {
  const isMobile = useMobileContext();

  return (
    <header className="fixed top-0 w-full h-[4.875rem] lg:h-24 z-10">
      <div className="py-5 pl-9 pr-6 lg:pt-7 lg:pb-[1.125rem] lg:pl-40 lg:pr-20 border-b-2 bg-[#E2E2E2] border-black">
        <div className="flex justify-between items-center">
          <ShortLogo width={isMobile ? 38 : 49} height={isMobile ? 38 : 48} />
          <button
            className={`rounded-xl ${
              index.pageIndex !== 10
                ? "py-3 lg:py-[0.9375rem] px-[1.875rem] bg-black"
                : "py-[0.75rem] px-[1.875rem] lg:px-[2.25rem] bg-[#d6d6d6]"
            }`}
            onClick={() => index.setIndex(index.pageIndex === 10 ? 0 : 10)}
            type="button"
          >
            <div className="flex justify-between items-center gap-x-1">
              {index.pageIndex !== 10 ? (
                <>
                  <span className="text-white text-xs lg:text-[0.9375rem] leading-[0.875rem] lg:leading-[1.125rem] font-medium">
                    Contact to
                  </span>
                  <Logo
                    fill="white"
                    width={isMobile ? 57 : 76}
                    height={isMobile ? 12 : 16}
                  />
                </>
              ) : (
                <>
                  <Arrow
                    width={isMobile ? 14 : 24}
                    height={isMobile ? 14 : 24}
                  />
                  <span className="text-black text-xs lg:text-[0.9375rem] leading-[0.875rem] lg:leading-[1.125rem] font-medium">
                    Move To Top
                  </span>
                  <Arrow
                    width={isMobile ? 14 : 24}
                    height={isMobile ? 14 : 24}
                  />
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
