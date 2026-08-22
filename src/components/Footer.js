import { footer } from "../data";

export default function Footer() {
  return (
    <footer className="pb-8 text-sm">
      <p>
        {footer.text}{" "}
        <a
          className="text-blue-500 dark:text-green-500"
          href={footer.authorUrl}
          target="_blank"
          rel="noreferrer"
        >
          {footer.authorName}
        </a>{" "}
        {footer.hostingText}{" "}
        <a
          className="text-blue-500 dark:text-green-500"
          href={footer.hostingUrl}
          target="_blank"
          rel="noreferrer"
        >
          {footer.hostingName}
        </a>
        .
      </p>
      <p className="mt-2 text-zinc-500 dark:text-gray-400">
        © {new Date().getFullYear()} {footer.authorName}
      </p>
    </footer>
  );
}
