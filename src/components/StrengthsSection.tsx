import { skills } from "../data/resume";

export function StrengthsSection() {
  return (
    <section className="bg-white" id="strengths">
      <div className="container py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Skills
        </h2>
        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 pt-10 sm:grid-cols-2 md:gap-6 md:pt-12">
          {skills.strengths.map((item) => (
            <li
              key={item}
              className="flex gap-4 rounded border border-grey-60/60 bg-grey-50 px-6 py-5 shadow-sm md:px-8 md:py-6"
            >
              <i className="bx bx-check-circle mt-0.5 shrink-0 text-2xl text-primary" aria-hidden />
              <p className="font-body leading-relaxed text-grey-10">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
