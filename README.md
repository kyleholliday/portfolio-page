# kyleholliday.com

Personal portfolio site for [kyleholliday.com](https://www.kyleholliday.com).

[![Netlify Status](https://api.netlify.com/api/v1/badges/7c07c60f-82cb-4b1a-873c-ead46cbccdae/deploy-status)](https://app.netlify.com/sites/vigilant-davinci-de96dd/deploys)

## Stack

- **React 18** (Create React App / react-scripts 5)
- **Tailwind CSS 3** — class-based dark mode
- **Netlify** — hosting, with headers configured in `public/_headers`

## Running locally

```bash
npm install
npm start      # dev server at http://localhost:3000
npm run build  # production build to /build
npm test       # test runner
```

## Structure

All page content lives in [`src/data.js`](src/data.js) — experience, skills,
projects, companies, and social links. Components in `src/components` are
presentational and read from that file, so most updates are a one-file edit.

## Adding company logos

`companies` in `src/data.js` renders a text wordmark for each entry by default.
To use a real logo, drop the file in `public/logos/` and add a `logo` key:

```js
{ name: "Premier Inc.", url: "https://www.premierinc.com", logo: "/logos/premier.svg" }
```

SVG is preferred — it stays sharp and the grayscale/hover treatment applies
cleanly. Only add logos you have permission to display.
