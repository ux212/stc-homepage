import Logo from "@public/assets/logo.svg";
import ShortLogo from "@public/assets/short-logo.svg";

function Header() {
  return (
    <header className="pt-7 pb-5 pl-40 pr-20 border-b-2 border-black">
      <div className="flex justify-between items-center">
        <ShortLogo />
        <button
          className="py-[0.9375rem] px-[1.875rem] bg-black rounded-full"
          type="button"
        >
          <div className="flex justify-between items-center gap-x-1">
            <span className="text-white text-[0.9375rem] font-medium">
              Contact to
            </span>
            <Logo />
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
