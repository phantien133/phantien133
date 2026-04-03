import { profile } from "../data/resume";
import { assetUrl } from "../lib/assets";

export function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-8"
      style={{ backgroundImage: `url(${assetUrl("assets/img/bg-hero.jpg")})` }}
    >
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to" />
      <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="rounded-full border-8 border-primary shadow-xl ring-4 ring-white/20">
            <img
              src={assetUrl("assets/img/avatar.jpg")}
              className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56"
              width={224}
              height={224}
              alt={profile.name}
            />
          </div>
          <div className="pt-8 text-center sm:pt-10 lg:pl-8 lg:pt-0 lg:text-left">
            <h1 className="font-header text-4xl text-white sm:text-5xl md:text-6xl">
              Hello I&apos;m {profile.name}!
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-lg uppercase text-white">Let&apos;s connect</p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-3xl text-yellow" aria-hidden />
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a
                  href={profile.contacts.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white hover:text-yellow"
                  aria-label="GitHub"
                >
                  <i className="bx bxl-github text-2xl" />
                </a>
                <a
                  href={profile.contacts.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="pl-4 text-white hover:text-yellow"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin text-2xl" />
                </a>
                <a
                  href={`mailto:${profile.contacts.email}`}
                  className="pl-4 text-white hover:text-yellow"
                  aria-label="Email"
                >
                  <i className="bx bx-envelope text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
