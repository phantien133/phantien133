import type { Dispatch, SetStateAction } from "react";
import { profile } from "../data/resume";
import { assetUrl } from "../lib/assets";
import { navItems } from "../lib/nav";

type Props = {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
};

export function SiteHeader({ mobileMenu, setMobileMenu }: Props) {
  return (
    <>
      <div className="absolute top-0 z-50 w-full py-3 sm:py-5">
        <div className="container flex items-center justify-between">
          <a
            href="#"
            className="max-w-[55%] truncate pr-4 font-header text-base font-bold uppercase tracking-wide text-white sm:text-lg lg:max-w-none lg:text-xl"
            aria-label="Home"
          >
            {profile.name}
          </a>
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.id} className="group pl-6">
                  <a
                    href={item.id}
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    {item.label}
                  </a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
              ))}
            </ul>
          </nav>
          <div className="block lg:hidden">
            <button
              type="button"
              className="text-white"
              aria-expanded={mobileMenu}
              aria-controls="mobile-drawer"
              onClick={() => setMobileMenu(true)}
            >
              <i className="bx bx-menu text-4xl" aria-hidden />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-drawer"
        className={`pointer-events-none fixed inset-0 z-[70] min-h-screen bg-black transition-opacity lg:hidden ${
          mobileMenu ? "pointer-events-auto bg-opacity-70 opacity-100" : "bg-opacity-70 opacity-0"
        }`}
        aria-hidden={!mobileMenu}
      >
        <div className="absolute right-0 min-h-screen w-2/3 bg-primary px-8 py-4 shadow md:w-1/3">
          <button
            type="button"
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={() => setMobileMenu(false)}
          >
            <img src={assetUrl("assets/img/icon-close.svg")} className="h-10 w-auto" alt="" />
            <span className="sr-only">Close menu</span>
          </button>
          <ul className="mt-8 flex flex-col">
            {navItems.map((item) => (
              <li key={item.id} className="py-2">
                <a
                  href={item.id}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
