import { CarouselLayout } from "./Carousel.layout";

import { useMobileContext } from "@src/lib/contexts";

export function PortfolioSection() {
  const isMobile = useMobileContext();

  return (
    <section className="h-screen flex flex-col justify-center" id="portfolio">
      <CarouselLayout />
      <p className="text-[1.75rem] leading-[2.0625rem] lg:text-4xl font-medium text-center mb-6 lg:mb-14">
        The <i>Portfolio</i>
      </p>
      <p className="text-[0.875rem] lg:text-[1.375rem] font-medium leading-4 lg:leading-[1.625rem] text-center">
        We are a the sis-driven global asset
        {isMobile ? <br /> : " "}
        management firm dedicated
        <br />
        to the active management of
        {isMobile ? <br /> : " "}
        blockchain and
        <br />
        digital asset-based portfolios.
      </p>
    </section>
  );
}
