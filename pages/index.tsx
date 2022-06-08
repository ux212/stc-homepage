import { useState } from "react";

import { mission } from "@public/assets/json/mission";
import { Footer, Header } from "@src/components";
import { TigerComponent, TypoComponent } from "@src/components/hero";
import { DescriptionLayout, SummaryComponent } from "@src/components/mission";
import { TitleLayout } from "@src/components/mission/Title.layout";
import { PortfolioSection } from "@src/components/portfolio/Portfolio.component";
import { useMobileContext } from "@src/lib/contexts";
import ReactPageScroller from "react-page-scroller";

export default function IndexPage() {
  const [pageIndex, setIndex] = useState(0);
  const isMobile = useMobileContext();

  return (
    <>
      <Header index={{ pageIndex, setIndex }} />
      <ReactPageScroller
        renderAllPagesOnFirstRender
        customPageNumber={pageIndex}
        pageOnChange={(idx) => setIndex(idx)}
      >
        {/* Hero */}
        <TypoComponent />
        <TigerComponent />
        {/* Mission */}
        <SummaryComponent />
        <TitleLayout title={mission[0].title} index={1} />
        <DescriptionLayout
          title={mission[0].title}
          img={mission[0].img}
          lineHeight={isMobile ? 100 : 110}
        >
          {mission[0].description}
        </DescriptionLayout>
        <TitleLayout title={mission[1].title} index={2} />
        <DescriptionLayout
          title={mission[1].title}
          img={mission[1].img}
          lineHeight={isMobile ? 105 : 110}
        >
          {mission[1].description}
        </DescriptionLayout>
        <TitleLayout title={mission[2].title} index={3} />
        <DescriptionLayout
          title={mission[2].title}
          img={mission[2].img}
          lineHeight={isMobile ? 100 : 110}
        >
          {mission[2].description}
        </DescriptionLayout>
        {/* PortFolio */}
        <PortfolioSection />
        <Footer />
      </ReactPageScroller>
    </>
  );
}
