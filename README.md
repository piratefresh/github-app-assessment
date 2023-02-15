## Getting Started

See live https://github-app-assessment.vercel.app/

See locally, I used pnpm for this project
1) install packages.

```bash
pnpm install
# or
npm install
# or
yarn install
```

2) edit the .env to match the .env.example

3) run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4) Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future Improvements

- [ ] loading skeleton
- [ ] lift pagination state to url params
- [ ] dynamic metadata
- [ ] better error handling on request instead of returning null/empty arrays

## Comments

Might have been overkill with nextjs, but seems like React is moving towards server components/streaming which nextjs makes way easier.
If I had to go just the react way, I would have used React with vite with react-router from remix.

## Tech
* React 18
* Nextjs 13 - quickly setups up everything I need for an react app that involving routing, server side/static rendering and seo
* Stitches - used for styling, probably would have used tailwindcss if css in js was not encouraged
* mapbox - show location of contributor
* @tanstack/react-table - easily create tables
* octokit - fetch GitHub rest api
