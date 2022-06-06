import { Footer, Header } from "@src/components";
import HeroSection from "@src/components/hero/Hero.component";
import ReactPageScroller from "react-page-scroller";

export default function IndexPage() {
  return (
    <>
      <Header />
      {/* <ReactPageScroller> */}
      <HeroSection />
      {/* <MissionSection />
      <PortfolioSection /> */}
      <Footer />
      {/* </ReactPageScroller> */}
    </>
  );
}
