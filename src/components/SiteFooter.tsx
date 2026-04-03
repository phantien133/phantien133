import { profile } from "../data/resume";

export function SiteFooter() {
  return (
    <footer className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row sm:items-center">
        <p className="text-center font-body text-white md:text-left">
          © {new Date().getFullYear()} {profile.name}. Layout inspired by the{" "}
          <a
            href="https://themewagon.github.io/atom/"
            className="text-yellow hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Atom
          </a>{" "}
          template · Source in{" "}
          <a href={profile.contacts.github} className="text-yellow hover:underline" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <a href={profile.contacts.github} className="text-white hover:text-yellow" aria-label="GitHub">
            <i className="bx bxl-github text-2xl" />
          </a>
          <a href={profile.contacts.linkedin} className="pl-4 text-white hover:text-yellow" aria-label="LinkedIn">
            <i className="bx bxl-linkedin text-2xl" />
          </a>
          <a href={`mailto:${profile.contacts.email}`} className="pl-4 text-white hover:text-yellow" aria-label="Email">
            <i className="bx bx-envelope text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
