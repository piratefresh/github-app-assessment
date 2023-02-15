## Getting Started

See live https://github-app-assessment.vercel.app/

See locally
1) install packages.

```bash
npm install
# or
yarn install
# or
pnpm install
```

2) edit the .env to match the .env.example

3) run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4) Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future Improvements

- [ ] loading skeleton
- [ ] lift pagination state to url params

## Comments

Might have been overkill with nextjs, but seems like React is moving towards server components/streaming which nextjs makes way easier.

## Tech
* React 18
* Nextjs 13 - quickly setups up everything I need for an react app that involving routing, server side/static rendering and seo
* Stitches - used for styling, probably would have used tailwindcss if css in js was not encouraged
* @tanstack/react-table
