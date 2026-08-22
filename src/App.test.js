import { render, screen } from "@testing-library/react";
import App from "./App";
import { personalInfo, navigation } from "./data";

// jsdom doesn't implement matchMedia, which App uses to read the OS theme.
beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    ((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }));
});

test("renders the name as the page's only h1", () => {
  render(<App />);
  const headings = screen.getAllByRole("heading", { level: 1 });
  expect(headings).toHaveLength(1);
  expect(headings[0]).toHaveTextContent(personalInfo.name);
});

test("renders a skip link pointing at main content", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /skip to main content/i })).toHaveAttribute(
    "href",
    "#content",
  );
});

test("every nav item points at a section that exists", () => {
  const { container } = render(<App />);
  navigation.forEach((item) => {
    const id = item.href.replace("#", "");
    expect(container.querySelector(`#${id}`)).not.toBeNull();
  });
});

test("theme toggle exposes its state and flips on click", async () => {
  const { default: userEvent } = await import("@testing-library/user-event");
  render(<App />);
  const button = screen.getByRole("button", { name: /switch to (light|dark) theme/i });
  const before = button.getAttribute("aria-pressed");
  await userEvent.click(button);
  expect(button.getAttribute("aria-pressed")).not.toBe(before);
});
