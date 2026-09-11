import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-12 scroll-mt-16 md:mb-18 lg:mb-24 lg:scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <div className="mb-8">
        <h2
          id="projects-heading"
          className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-gray-200"
        >
          {projects.length === 1 ? "Featured Project" : "Featured Projects"}
        </h2>
      </div>
      <div>
        <ul className="space-y-8">
          {projects.map((project, index) => (
            <li key={index}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative transition-all">
                  {/* Hover background effect */}
                  <div className="absolute -inset-x-4 -inset-y-6 z-0 rounded-2xl bg-zinc-100/50 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6"></div>

                  {/* Image */}
                  {/* <div className="relative z-10 mb-4">
                    <div className="relative overflow-hidden rounded-xl border-2 border-gray-200/20 transition-all duration-300 group-hover:border-gray-200/40 dark:border-gray-700/30 dark:group-hover:border-gray-600/50 group-hover:shadow-xl">
                      <picture>
                        <source
                          srcSet={project.image}
                          type="image/webp"
                        />
                        <img
                          alt={`Screenshot of the ${project.title} app`}
                          loading="lazy"
                          decoding="async"
                          width={project.imageWidth}
                          height={project.imageHeight}
                          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                          src={project.imageFallback || project.image}
                        />
                      </picture>
                    </div>
                  </div> */}

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-gray-100 mb-3 group-hover:text-blue-500 dark:group-hover:text-green-500 transition-colors">
                      {project.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </h3>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    {project.note && (
                      <p className="mb-6 text-sm">{project.note}</p>
                    )}

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center rounded-lg bg-indigo-50 dark:bg-teal-400/10 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-teal-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        {/* Section divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
      </div>
    </section>
  );
}
