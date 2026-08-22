import { aboutContent } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="mb-12 scroll-mt-16 md:mb-18 lg:mb-24 lg:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="mb-8">
        <h2
          id="about-heading"
          className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-gray-200"
        >
          About
        </h2>
      </div>
      <div className="space-y-4">
        {aboutContent.map((paragraph, index) => (
          <p
            key={index}
            className="leading-relaxed"
            style={{ lineHeight: "1.75" }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      {/* Section divider */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
    </section>
  );
}
