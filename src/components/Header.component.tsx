import Logo from "@public/assets/svg/logo.svg";
import ShortLogo from "@public/assets/svg/short-logo.svg";

export function Header() {
  return (
    <header className="sticky h-24 pt-7 pb-[1.125rem] pl-40 pr-20 border-b-2 border-black">
      <div className="flex justify-between items-center">
        <ShortLogo />
        <button
          className="py-4 px-[1.875rem] bg-black rounded-xl"
          type="button"
        >
          <div className="flex justify-between items-center gap-x-1">
            <span className="text-white text-[0.9375rem] leading-[1.125rem] font-medium">
              Contact to
            </span>
            <Logo />
          </div>
        </button>
      </div>
    </header>
  );
}
