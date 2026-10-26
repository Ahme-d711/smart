This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# SmartAI

## Local configuration

Copy `.env.example` to `.env.local` and configure the integrations before testing them:

```bash
cp .env.example .env.local
```

Set `CONTACT_WEBHOOK_URL` to a server-side webhook that accepts a JSON `POST` containing `source`, `name`, `email`, and `message`. The contact form reports success only when that endpoint returns a 2xx response. Leave it blank to test the validation/error path without pretending delivery succeeded.

Set `NEXT_PUBLIC_SPLINE_ROBOT_SCENE_URL` to the verified Spline `.splinecode` URL for the actual robot scene. The site intentionally renders a branded animated fallback when the variable is empty or the scene fails to load; no unverified scene URL is hardcoded.
