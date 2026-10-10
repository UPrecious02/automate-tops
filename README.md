# John Eyitope Portfolio

Personal portfolio for John Eyitope, AI Automation & Workflow Specialist.

Built with Astro, TypeScript and Tailwind CSS v4. Every page ships as static HTML, so it loads fast and deploys to Netlify with no server setup.

## Run it locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # type check and production build into dist/
npm run preview  # serve the production build locally
```

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify, choose **Add new project**, then **Import an existing project**, and pick the repository.
3. Netlify reads `netlify.toml`, so the build command (`npm run build`), publish folder (`dist`) and Node version are already set.
4. **Turn on form detection:** Project configuration, then Forms, then enable form detection. Redeploy once after enabling it. The contact form will not receive submissions until this is on.
5. Set up email alerts for new enquiries under Forms, then Form notifications.
6. Connect the custom domain (automateops.online) under Domain management.

The contact form only works on the deployed Netlify site. Locally it will show the error message, which is expected.

## Where to edit things

| What | File |
| :--- | :--- |
| Email, social links, portrait, certificate link | `src/data/site.ts` |
| Case studies (one file each) | `src/content/case-studies/*.yaml` |
| Homepage sections | `src/components/home/` |
| Case study page template | `src/pages/case-studies/[slug].astro` |
| Colors and fonts | `src/styles/global.css` (the `@theme` block) |
| Logo files | `public/brand/` |
| Social sharing image | `public/og.png` |

## Assets already in place

* **Portrait:** `public/images/john-eyitope.webp`, set in `src/data/site.ts`.
* **LinkedIn and X:** set in `src/data/site.ts`. GitHub is empty, so it stays hidden until a link is added.
* **Workflow screenshots:** `public/images/work/`, listed under `evidence` in each case study file. The first image in each list is the cover shown on the homepage card and at the top of the case study. Phone numbers in the restaurant orders sheet are blurred.

## Still to add

**Certificate:** add the verification URL to `certificate.verifyUrl`. A "Verify certificate" link appears once it is set.

**More screenshots:** put images in `public/images/work/` (WebP or PNG, around 1600 px wide) and add them to the case study's `evidence` list:

```yaml
evidence:
  - src: /images/work/lead-results.webp
    alt: Google Sheets list of scored leads produced by the workflow
    caption: Leads written to the sheet with their score.
    width: 1600
    height: 900
```

`width` and `height` must match the real image size. Screenshots wider than 1.6 times their height automatically take the full width of the gallery so they stay readable. Never show API keys, credentials or real customer data.

**Lead Research results:** this case study is still marked `Demonstration` because there is only a canvas screenshot. Once John shares a sheet of results from a real run, add it to the evidence list, update the validation lines and change the status to `Built and tested`.

## Adding a new case study

Copy any file in `src/content/case-studies/`, rename it (the file name becomes the URL), set `order`, and edit the content. The homepage card, case study page and sitemap entry are created automatically. If a required field is missing, the build stops and says which one.

## Before launch: confirm with John

* The email address `hello@automateops.online` exists and receives mail.
* The tools and validation lines in each case study match what he built and ran. They were written from his screenshots.
* Use `Client deployment` only when a workflow was really deployed for a client.
* Only add `verifiedMetrics` when there is a real measurement with a clear time period.

## Brand

* Near black `#101010`, warm off white `#F5F1E8`, acid lime `#C5F467`, signal orange `#FF784F`
* Display type: Archivo (expanded width, sentence case). Body: Geist. Technical labels: JetBrains Mono. All self hosted.
* Layout language: an n8n style dot grid, rounded node cards with connection ports, and screenshots framed as app windows.
* Logo: a JE monogram drawn as a small workflow. The lime port is the trigger, the orange node is the action.
