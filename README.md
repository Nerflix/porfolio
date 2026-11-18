# Chris Njoroge’s portfolio

Built with React, TypeScript, and Vite. Use Node.js 20.19+, 22.12+, or a newer supported release.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Open the local URL printed by Vite. On Windows PowerShell, use `npm.cmd` if script execution is disabled.

Edit project descriptions, links, case studies, and preview paths in [src/projects.ts](src/projects.ts). Featured projects are the entries with a `caseStudy`, displayed in file order. Put screenshots in [public/projects](public/projects) and update the matching `preview.src` and `preview.alt`.

The same file holds the GitHub link and optional portrait, email, LinkedIn, WhatsApp, and CV fields. Put replacement portrait or CV files in `public/` and use paths relative to the site root. Update the About copy in [src/main.tsx](src/main.tsx).

Before linking the Lucasa POS source, remove the hard-coded administrator credential from the project and its documentation, and rotate or revoke it wherever it was used.
