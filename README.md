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

## Adding the real assets

**Portrait:** save it as `public/images/john-eyitope.jpg` (around 900 × 1125, portrait orientation, under 300 KB), then set `portrait: '/images/john-eyitope.jpg'` in `src/data/site.ts`. It replaces the monogram in the hero and the About section automatically.

**Social links:** fill in `linkedin`, `x` and `github` in `src/data/site.ts`. Empty links are hidden, so nothing points nowhere.

**Certificate:** add the verification URL to `certificate.verifyUrl`. A "Verify certificate" link appears once it is set.

**Workflow screenshots:** put images in `public/images/work/` and list them under `evidence` in the case study's YAML file:

```yaml
evidence:
  - src: /images/work/email-triage-canvas.png
    alt: n8n canvas showing the email triage workflow from trigger to routing
    caption: The full workflow. Low confidence results branch to the review queue at the bottom.
    width: 1600
    height: 900
```

Crop screenshots so they are readable, and never show API keys, credentials or real customer data.

## Adding a new case study

Copy any file in `src/content/case-studies/`, rename it (the file name becomes the URL), set `order`, and edit the content. The homepage card, case study page and sitemap entry are created automatically. If a required field is missing, the build stops and says which one.

## Before launch: confirm with John

* The email address `hello@automateops.online` exists and receives mail.
* The tools listed in each case study match what each workflow really uses.
* The validation lists describe cases he has actually run. When a workflow has passed real tests, change its `status` to `Built and tested`, and use `Client deployment` only when it really was deployed for a client.
* Only add `verifiedMetrics` when there is a real measurement with a clear time period.

## Brand

* Near black `#101010`, warm off white `#F5F1E8`, acid lime `#C5F467`, signal orange `#FF784F`
* Display type: Archivo (condensed width). Body: Geist. Technical labels: JetBrains Mono. All self hosted.
* Logo: a JE monogram drawn as a small workflow. The lime port is the trigger, the orange node is the action.
