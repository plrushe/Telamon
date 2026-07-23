# Telamon Consulting

Premium Next.js starter for Telamon Consulting. The homepage and contact page are complete responsive templates; the remaining requested routes use a shared, polished placeholder page.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Structure

- `app/` contains App Router pages, metadata, sitemap and robots configuration.
- `components/` contains the shared header, footer and validated client-side contact form.
- `lib/site.ts` is the single editable source for business details, navigation, services, audits and the phone-number publication placeholder.

Before publication, confirm the phone number, LinkedIn address, audit formats, legal policy text and insight reading times in `lib/site.ts` and the associated page content.
