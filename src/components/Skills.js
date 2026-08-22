import { skills } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-12 scroll-mt-16 md:mb-18 lg:mb-24 lg:scroll-mt-24"
      aria-labelledby="skills-heading"
    >
      <div className="mb-8">
        <h2
          id="skills-heading"
          className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-gray-200"
        >
          Skills
        </h2>
      </div>
      <div>
        <ol>
          {skills.map((skillGroup, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl"></div>
                <header
                  className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide dark:text-gray-200 text-zinc-600 sm:col-span-2"
                  aria-label={skillGroup.category}
                >
                  {skillGroup.category}
                </header>
                <div className="z-10 sm:col-span-6">
                  <ul className="flex flex-wrap">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-md px-3 py-1 text-sm font-medium leading-5 dark:text-teal-300 text-indigo-600 dark:bg-teal-400/10 bg-indigo-400/10">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-24">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 dark:bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-blue-700 dark:hover:bg-emerald-700 transition-all hover:shadow-xl hover:scale-105"
            aria-label="View resume (PDF, opens in a new tab)"
            href="/Kyle-Holliday-Resume-Master.pdf"
            target="_blank"
            rel="noopener"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
              <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
            </svg>
            View Resume
          </a>
        </div>
        {/* Section divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      </div>
    </section>
  );
}
