# Shivam Sahu — Portfolio

A responsive, terminal-inspired portfolio for Senior Software Engineer Shivam Sahu.

## Development

```bash
npm run dev
```

No dependency installation is required. Open `http://localhost:4173` after starting
the development server.

## Production

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

This repository includes a GitHub Actions workflow that builds and deploys the
portfolio whenever changes are pushed to `master`.

1. Push this repository to GitHub.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Merge or push the portfolio to `master`. You can also run **Deploy portfolio to
   GitHub Pages** manually from the Actions tab while viewing the `master` branch.

The repository's `github-pages` environment currently allows deployments only from
`master`, so feature and work branches build through pull requests but do not create
Pages deployments.

The site uses relative asset URLs, so it works both at a user site such as
`https://username.github.io/` and a project site such as
`https://username.github.io/portfolio/`.

### Resume PDF

Place the PDF résumé in the repository root. During the build, the first root-level
PDF (alphabetically) is copied into the GitHub Pages artifact and every résumé link
is updated to its URL. Naming it `Shivam_Sahu_Resume.pdf` also makes the link work
when serving the repository root directly during development.
