import SmallTiger from "@public/assets/svg/tiger-small.svg";
import Tiger from "@public/assets/svg/tiger.svg";
import { useMobileContext } from "@src/lib/contexts";
import { useWindowSize } from "@src/lib/hooks";

export function TigerComponent() {
  const isMobile = useMobileContext();
  const { height } = useWindowSize();

  return (
    <div
      className="h-screen lg:h-auto flex flex-col items-center justify-center lg:justify-start"
      id="tiger"
    >
      <div className="lg:-mt-20 lg:h-screen mb-6">
        {isMobile ? (
          <SmallTiger width="343" height="449" />
        ) : (
          <Tiger height={height} />
        )}
      </div>
      <p className="text-[0.5rem] lg:text-[0.9375rem] leading-[0.5625rem] lg:leading-[1.125rem]">
        Catch and bite your business.&copy;
      </p>
    </div>
  );
}
