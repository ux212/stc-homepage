import Logo from "@public/assets/svg/logo.svg";
import { useMobileContext } from "@src/lib/contexts";

export function TitleLayout({
  title,
  index,
}: {
  title: string;
  index: number;
}) {
  const isMobile = useMobileContext();

  return (
    <div className="h-screen max-w-xs lg:max-w-3xl mx-auto flex flex-col justify-center">
      <p className="text-[1.75rem] lg:text-[3.125rem] font-medium mb-5">
        {title}
      </p>
      <div>
        <Logo
          fill="black"
          width={isMobile ? 66 : 97}
          height={isMobile ? 14 : 20}
        />
      </div>
      <p className="text-[0.875rem] lg:text-[1.25rem] font-medium">
        Mission {index}
      </p>
    </div>
  );
}
