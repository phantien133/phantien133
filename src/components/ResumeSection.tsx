import { resumePdf } from "../data/resume";
import { assetUrl } from "../lib/assets";

export function ResumeSection() {
  const href = assetUrl(resumePdf.path);

  return (
    <section className="container py-16 md:py-20" id="resume">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Résumé
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Download my CV as a PDF
      </h3>
      <p className="mx-auto max-w-2xl pt-6 text-center font-body text-grey-10">
        Full work history, projects, and skills in one document — ready to save or share.
      </p>
      <div className="flex justify-center pt-10">
        <a
          href={href}
          download={resumePdf.downloadFileName}
          className="inline-flex items-center gap-2 rounded bg-primary px-8 py-4 font-header text-base font-bold uppercase tracking-wide text-white shadow transition-colors hover:bg-grey-20 sm:text-lg"
        >
          <i className="bx bx-download text-2xl" aria-hidden />
          Download PDF
        </a>
      </div>
    </section>
  );
}
