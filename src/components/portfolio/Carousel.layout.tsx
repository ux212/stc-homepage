/* eslint-disable react/no-array-index-key */

import { useEffect, useRef } from "react";

import { portfolio } from "@public/assets/json/portpolio";
import { useMobileContext } from "@src/lib/contexts";
import Image from "next/image";

export function CarouselLayout() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileContext();

  useEffect(() => {
    carouselRef.current!.animate(
      [
        { transform: "translateX(0px)" },
        {
          transform: `translateX(-${
            carouselRef.current!.scrollWidth / 2 + 100
          }px)`,
        },
      ],
      {
        duration: 20000,
        iterations: Infinity,
      }
    );
  }, []);

  return (
    <div className="mb-48">
      <div
        ref={carouselRef}
        className="flex items-center gap-x-[76px] lg:gap-x-[200px]"
      >
        {[...portfolio, ...portfolio].map((val, idx) => (
          <div
            className="relative lg:static w-20 lg:w-auto h-10 lg:h-auto shrink-0"
            key={idx.toString()}
          >
            <Image
              src={val}
              alt={idx.toString()}
              layout={isMobile ? "fill" : "intrinsic"}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
