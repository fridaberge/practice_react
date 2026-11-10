# ReactFacts

[← Back to all static pages](../README.md)

A static page with facts about React, built with React and Vite.

![Screenshot of ReactFacts](./screenshot.png)

## Features

- Full-width sticky header with logo
- Faded, grayscale background image centered in the main section
- List items using the React logo instead of bullet points

## What I learned

- Removing the default `body` margin so the header reaches the edges
- Using `box-sizing: border-box` so padding doesn't cause overflow
- Positioning an image behind content with `z-index` and `opacity`
- Centering with `position: absolute` and `transform: translate(-50%, -50%)`
- Replacing list markers with `::before` and lining them up with the first line

## Built with

- React
- Vite
- CSS

## Run it locally

```bash
cd static_page/static_page2
npm install
npm run dev
```

---

[← Previous: Static Page 1](../static_page1/) | [All projects](../README.md)
