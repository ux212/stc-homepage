import Logo from "@public/assets/svg/logo.svg";
import Mail from "@public/assets/svg/mail.svg";
import Map from "@public/assets/svg/map.svg";
import Tiger from "@public/assets/svg/tiger-small.svg";
import { useMobileContext } from "@src/lib/contexts";

export function Footer() {
  const isMobile = useMobileContext();

  return (
    <footer className="h-screen flex flex-col justify-end pb-6 lg:pb-20">
      <div className="max-w-xs lg:max-w-[1600px] mx-auto flex flex-col lg:flex-row mb-4 lg:mb-24 py-6 lg:py-0 lg:px-16 gap-y-6 gap-x-16 border-y-2 lg:border-x-2 lg:border-y-0 border-black">
        <Logo
          fill="black"
          width={isMobile ? 170 : 301}
          height={isMobile ? 36 : 64}
        />
        <div>
          <p className="text-xl lg:text-2xl leading-[1.4375rem] lg:leading-none font-medium">
            Contact us
          </p>
          <p className="text-[0.875rem] lg:text-xl mb-4 lg:mb-16">
            &copy; Catch and bite your business.
          </p>
          <Tiger width={isMobile ? 104 : 204} height={isMobile ? 136 : 267} />
        </div>
        <div className="flex flex-col items-start justify-between gap-y-6 py-6 lg:py-0 lg:px-12 border-y-2 lg:border-x-2 lg:border-y-0 border-black">
          <div>
            <p className="text-[0.875rem] lg:text-2xl font-medium mb-4 lg:mb-8">
              Location
            </p>
            <p className="text-[0.875rem] lg:text-2xl">
              94, Songi-ro, Songpa-gu,
              <br />
              Seoul, Republic of Korea
              <br />
              <i className="opacity-50">4th Floor</i>
            </p>
          </div>
          <a
            href="https://goo.gl/maps/oFk1SUVmhGLZPxHF6"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-x-[0.625rem] rounded-xl bg-[#D6D6D6] px-[1.875rem] py-3 lg:py-4"
          >
            <Map width={isMobile ? 14 : 20} height={isMobile ? 14 : 20} />
            <p className="text-xs lg:text-[0.9375rem] font-bold">Location</p>
          </a>
        </div>
        <div className="flex flex-col gap-y-6 items-start justify-between">
          <div>
            <p className="text-[0.875rem] lg:text-2xl font-medium mb-4 lg:mb-8">
              Email
            </p>
            <p className="text-[0.875rem] lg:text-2xl">info@stcapital.io</p>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText("info@stcapital.io");
              alert("Email copied to clipboard.");
            }}
            className="flex items-center gap-x-[0.625rem] rounded-xl bg-[#D6D6D6] px-[1.875rem] py-3 lg:py-4"
            type="button"
          >
            <Mail width={isMobile ? 14 : 20} height={isMobile ? 14 : 20} />
            <p className="text-xs lg:text-[0.9375rem] font-bold">
              Copy email to Clipboard
            </p>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[0.5rem] lg:text-[1.125rem] leading-[0.5625rem] lg:leading-[1.125rem] font-medium">
          2022, Designed by SeoulTigerCapital.
        </p>
        <p className="text-[0.5rem] lg:text-base leading-[0.5625rem] lg:leading-snug">
          Copyright &copy;STCapital. All right reserved.
        </p>
      </div>
    </footer>
  );
}
