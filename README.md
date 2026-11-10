# React Components and Props

A small React blog page built with Vite. It demonstrates composing components,
passing data through props, and rendering a list of articles.

## Getting Started

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Vite prints the local URL when the server is ready. To create and preview a
production build:

```sh
npm run build
npm run preview
```

## Available Scripts

- `npm run dev` — start the Vite development server
- `npm run build` — build the app for production
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint
- `npm test` — run the Vitest suite in watch mode
- `npm test -- --run` — run the Vitest suite once

## App Structure

- `src/main.jsx` mounts the app and loads the global stylesheet.
- `src/App.jsx` provides the blog content and composes the page.
- `src/components/Header.jsx` displays the blog name.
- `src/components/About.jsx` displays the blog image and description.
- `src/components/ArticleList.jsx` renders the posts as articles.
- `src/components/Article.jsx` displays an article title, date, and preview.
- `src/__tests__/` contains the component tests.

The page passes its blog name, image, description, and post list to child
components as props. Each post has a unique ID used as its list key. Articles
without a date display `January 1, 1970`.
