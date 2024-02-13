# svelte-bug-body-null

This is an example for when a request to a svelte `POST` endpoint is unable to read the body. The example api is 
located under `src/routes/api/+server.ts`. When called by an external tool that does not set the `content-type`, the 
request body is null.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a 
development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
