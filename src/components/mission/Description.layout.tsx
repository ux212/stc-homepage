import { ReactNode } from "react";

import { useMobileContext } from "@src/lib/contexts";
import Image from "@src/lib/Image.lib";
import { StaticImageData } from "next/image";

export function DescriptionLayout({
  title,
  img,
  lineHeight,
  children,
}: {
  title: string;
  img: StaticImageData;
  lineHeight: number;
  children: ReactNode;
}) {
  const isMobile = useMobileContext();

  return (
    <div className="max-w-xs lg:max-w-3xl mx-auto flex">
      <div>
        <div
          className="mb-5 lg:mb-12"
          style={{ marginTop: `calc(${isMobile ? 97 : 145}px - 50vh)` }}
        >
          <div
            className="border-l-black flex items-end border-l-2 pl-2 lg:pl-7"
            style={{ height: `${lineHeight}vh` }}
          >
            <Image
              loading="eager"
              src={img}
              width={678}
              height={518}
              alt={title}
            />
          </div>
        </div>
        <div className="text-[0.875rem] lg:text-[1.375rem] font-medium leading-4 lg:leading-[1.625rem] text-center">
          {children}
        </div>
      </div>
    </div>
  );
}
