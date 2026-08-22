import { experience } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-12 scroll-mt-16 md:mb-18 lg:scroll-mt-24"
      aria-labelledby="experience-heading"
    >
      <div className="mb-8">
        <h2
          id="experience-heading"
          className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-gray-200"
        >
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experience.map((job, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700 sm:-inset-x-6 sm:rounded-2xl"></div>
                <header
                  className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide sm:col-span-2 dark:text-gray-200 text-zinc-600"
                  aria-label={job.period}
                >
                  {job.period}
                </header>
                <div className="z-10 sm:col-span-6 space-y-4">
                  <h3 className="font-extrabold leading-snug text-slate-900 dark:text-gray-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-gray-200 dark:hover:text-green-500 dark:focus-visible:text-green-500 hover:text-blue-500 focus-visible:text-blue-500 group/link text-lg"
                        href={job.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${job.title} at ${job.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {job.title} · <> </>
                          <span className="inline-block">
                            {job.company}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p
                    className="mt-2 text-base leading-relaxed"
                    style={{ lineHeight: "1.75" }}
                  >
                    {job.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {job.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-md px-3 py-1 text-sm font-medium leading-5 dark:text-teal-300 text-indigo-600 dark:bg-teal-400/10 bg-indigo-400/10">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        {/* Section divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      </div>
    </section>
  );
}
