# Chiroshree Das — Portfolio

A responsive, multi-page portfolio for global beauty and influencer marketer Chiroshree Das. The site includes selected campaigns, regional portfolio analytics, a complete experience timeline, B2B exhibition photography, education, skills, and contact details.

## Pages

- `/` — landing page and selected work
- `/work` — experience, campaign library, analytics, and exhibitions
- `/about` — profile, languages, education, skills, and recognition
- `/contact` — email and social links

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
```

## Publish with GitHub Pages

The included GitHub Actions workflow builds and publishes the portfolio automatically.

1. Create a **public** repository named `<your-github-username>.github.io`.
2. Upload the contents of this project, including the hidden `.github` folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Open the repository's **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish.
6. Visit `https://<your-github-username>.github.io`.

Every later commit to the `main` branch automatically republishes the site.

## Content notes

- Instagram controls whether embedded Reels autoplay. The embeds request muted autoplay where the platform and browser allow it, and each card includes a direct source link.
- The résumé's exact street address, phone number, birth date, and visa information are intentionally excluded from the public website.
- Update portfolio copy in `app/`, and replace images in `public/assets/` while keeping the same filenames.
