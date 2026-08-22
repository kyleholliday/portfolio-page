import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Companies from "./components/Companies";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// Mirrors the pre-paint script in public/index.html, which sets the initial
// class before React mounts so dark-mode users never see a white flash.
function getInitialTheme() {
  if (typeof window === "undefined") return false;
  try {
    if (localStorage.theme === "dark") return true;
    if (localStorage.theme === "light") return false;
  } catch (e) {
    // localStorage can throw in private browsing / blocked-cookie contexts.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Keep the <html> class and the stored preference in sync with state.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    try {
      localStorage.theme = isDarkMode ? "dark" : "light";
    } catch (e) {
      // Preference just won't persist; the UI still works.
    }
  }, [isDarkMode]);

  return (
    <div className="main scroll-smooth text-zinc-600 dark:text-gray-200 dark:selection:bg-green-300 dark:selection:text-green-900">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:font-semibold focus:text-white dark:focus:bg-emerald-600"
      >
        Skip to main content
      </a>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <main id="content" className="pt-24 lg:w-2/3 lg:py-24">
            <About />
            <Experience />
            <Companies />
            <Skills />
            <Projects />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
