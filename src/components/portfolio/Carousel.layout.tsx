/* eslint-disable react/no-array-index-key */

import { useEffect, useRef } from "react";

import { portfolio } from "@public/assets/json/portpolio";
import Image from "@src/lib/Image.lib";

export function CarouselLayout() {
  const carouselRef = useRef<HTMLDivElement>(null);

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
            className="relative lg:w-60 w-20 h-10 lg:h-60 shrink-0"
            key={idx.toString()}
          >
            <Image
              loading="eager"
              src={val}
              alt={idx.toString()}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
