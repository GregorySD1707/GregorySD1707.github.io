# Gregory Salazar — Portfolio

Personal portfolio website, built with [Astro](https://astro.build) and deployed on GitHub Pages.

> [!IMPORTANT]
> **Try the portfolio now**
> **Live:** https://gregorysd1707.github.io/

## Stack

- **Astro** — main framework, static output
- **Astro Content Collections** — projects managed as Markdown in `src/content/projects/`
- **astro-icon** + Material Design Icons (mdi) — iconography
- **GitHub Actions** — CI/CD, automatic deploy to GitHub Pages on every push to `main`

## Structure

```
src/
├── assets/images/       # Images (WebP)
├── components/          # Astro components (Header, Hero, Projects, ProjectCard...)
├── content/projects/    # Projects as Markdown (title, stack, links, description)
├── layouts/             # Base layout
├── pages/               # Routes (index.astro)
├── scripts/             # Client-side JS
└── styles/              # CSS by section
```

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build and preview

```bash
npm run build
npm run preview
```

## Deploy

Automatic via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`. No manual steps required.

## Adding a new project

1. Add the image to `src/assets/images/projects/` (WebP format)
2. Create a file in `src/content/projects/your-project.md` with the required frontmatter (title, description, stack, image, github, demo)
3. Push to `main` — it deploys automatically

## Contact

- Email: gregory.sd.17@gmail.com
- LinkedIn: [linkedin.com/in/gsalazar17](https://www.linkedin.com/in/gsalazar17/)
- GitHub: [@GregorySD1707](https://github.com/GregorySD1707)