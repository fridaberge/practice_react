# practice_react

This repository is where I practice the basics of modern web development.
I made it to learn three things:

- **Version control with Git and GitHub**: committing, pushing and keeping a clean project history
- **React**: building components and pages with React and Vite
- **GitHub Pages**: publishing the projects automatically with GitHub Actions

## Live demos

| Project | Description | Live site |
|---|---|---|
| solo_project | A personal profile page - no CSS work done yet | [View site](https://fridaberge.github.io/practice_react/solo_project/) |
| static_page1 | Layout and CSS practice | [View site](https://fridaberge.github.io/practice_react/static_page1/) |
| static_page2 | Layout and CSS practice | [View site](https://fridaberge.github.io/practice_react/static_page2/) |
## Data-driven

| Project | Description | Live |
|---|---|---|
| travel_journal | A travel journal built with React components, props and data | [View site](https://fridaberge.github.io/practice_react/travel_journal/) |

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [GitHub Actions](https://docs.github.com/en/actions) for automatic build and deploy
- [GitHub Pages](https://pages.github.com/) for hosting

## How the deployment works

Every push to `main` starts a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. Installs dependencies and builds each project with `npm run build`
2. Sets the correct base path for each project, for example `/practice_react/solo_project/`
3. Publishes the result to GitHub Pages

I don't need to upload anything by hand. The live sites update when I push.

## What I learned

- The difference between `npm run dev` (local development) and `npm run build` (production)
- Why projects in subfolders on GitHub Pages need a `base` path
- That static files like images must be in the `public` folder to be included in the build
- How to use `import.meta.env.BASE_URL` so image paths work both locally and online
- How to set up a simple CI/CD pipeline with GitHub Actions

## Run locally

```bash
git clone https://github.com/fridaberge/practice_react.git
cd practice_react/static_page/solo_project   # or static_page1 / static_page2
npm install
npm run dev
```

## Project structure

```
practice_react/
├── .github/workflows/   # Deploy workflow for GitHub Pages
└── static_page/
    ├── solo_project/
    ├── static_page1/
    └── static_page2/
```
