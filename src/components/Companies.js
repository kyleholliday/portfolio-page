import { companies } from "../data";

function Tile({ company }) {
  const content = company.logo ? (
    <img
      src={company.logo}
      alt={company.name}
      loading="lazy"
      decoding="async"
      className="max-h-8 w-auto opacity-60 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 motion-reduce:transition-none dark:invert dark:group-hover:invert-0"
    />
  ) : (
    <span className="text-center text-sm font-semibold tracking-tight text-zinc-500 transition-colors duration-300 group-hover:text-slate-900 motion-reduce:transition-none dark:text-gray-400 dark:group-hover:text-gray-100">
      {company.name}
    </span>
  );

  const tileClasses =
    "group flex h-20 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 transition duration-300 hover:border-blue-500/40 hover:bg-white hover:shadow-sm motion-reduce:transition-none dark:border-zinc-700 dark:bg-zinc-800/40 dark:hover:border-emerald-500/40 dark:hover:bg-zinc-800";

  if (!company.url) {
    return <div className={tileClasses}>{content}</div>;
  }

  return (
    <a
      href={company.url}
      target="_blank"
      rel="noreferrer"
      className={`${tileClasses} focus-visible:border-blue-500 dark:focus-visible:border-emerald-500`}
    >
      {content}
    </a>
  );
}

export default function Companies() {
  return (
    <section
      id="companies"
      className="mb-12 scroll-mt-16 md:mb-18 lg:mb-24 lg:scroll-mt-24"
      aria-labelledby="companies-heading"
    >
      <div className="mb-8">
        <h2
          id="companies-heading"
          className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-gray-200"
        >
          Companies
        </h2>
      </div>
      <div className="space-y-10">
        {companies.map((group) => (
          <div key={group.label} className="sm:grid sm:grid-cols-8 sm:gap-8 md:gap-4">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-600 sm:col-span-2 sm:mb-0 dark:text-gray-200">
              {group.label}
            </h3>
            <ul className="grid grid-cols-2 gap-3 sm:col-span-6 sm:grid-cols-3">
              {group.items.map((company) => (
                <li key={company.name}>
                  <Tile company={company} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Section divider */}
      <div className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>
    </section>
  );
}
