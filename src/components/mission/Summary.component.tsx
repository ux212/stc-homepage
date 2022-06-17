import { useMobileContext } from "@src/lib/contexts";

export function SummaryComponent() {
  const isMobile = useMobileContext();

  return (
    <div
      className="h-screen flex flex-col items-center justify-center"
      id="summary"
    >
      <p className="text-[1.75rem] leading-[2.0625rem] lg:text-4xl font-medium mb-6 lg:mb-14">
        <i>Our</i> Mission
      </p>
      <p className="text-[0.875rem] lg:text-[1.375rem] font-medium leading-4 lg:leading-[1.625rem] text-center">
        Our Mission is to search for the
        {isMobile ? <br /> : " "}
        future blockchain unicorns
        {isMobile ? " " : <br />}
        and
        {isMobile ? <br /> : " "}
        provide them with all possible
        {isMobile ? <br /> : " "}
        resources, including
        {isMobile ? " " : <br />}
        investment,
        {isMobile ? <br /> : " "}
        industry know and advisory.
      </p>
    </div>
  );
}
