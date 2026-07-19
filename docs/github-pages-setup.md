# Vazzlo — GitHub Pages Deployment Setup

Set up GitHub Pages so the prototype can be viewed by the team at a public URL.

---

## What to do

1. **Install gh-pages**
   ```
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`**
   Add the `base` property so asset paths work on GitHub Pages:
   ```js
   base: '/vazzlo-prototype/'
   ```
   (This must match the GitHub repo name exactly)

3. **Add deploy scripts to `package.json`**
   Add these to the `"scripts"` section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. **Handle client-side routing**
   React Router uses client-side routes (e.g. `/login`, `/dashboard`) which will 404 on GitHub Pages because there's no server to handle them. Fix this by:
   
   - Copy `index.html` to `404.html` in the build output so GitHub Pages serves the app for all routes
   - Add this to the build script or create a small post-build step:
     ```json
     "postbuild": "cp dist/index.html dist/404.html"
     ```
   
   OR switch React Router to use `HashRouter` instead of `BrowserRouter` — this is simpler for a prototype since routes become `/#/login` instead of `/login`. HashRouter needs no server config.

   **Recommended: use HashRouter** — it's a one-line change in App.jsx and avoids all routing issues on GitHub Pages.

5. **Run initial deploy**
   ```
   npm run deploy
   ```
   This builds the project and pushes the built files to a `gh-pages` branch.

6. **Enable GitHub Pages in the repo settings**
   - Go to https://github.com/neilhammerton/vazzlo-prototype/settings/pages
   - Under "Source", select the `gh-pages` branch and `/ (root)` folder
   - Click Save
   - The site will be live at: `https://neilhammerton.github.io/vazzlo-prototype/`

7. **Confirm it works**
   - Visit the URL above
   - Check all routes work (home, login, signup, dashboards, affiliate pages)
   - Check all images load (agents, brand assets, feature icons)

---

## After setup

To redeploy after any changes, just run:
```
npm run deploy
```

That's it — builds and publishes in one command.

---

## Access control note

If this is a **public** GitHub repo, the GitHub Pages site is visible to anyone with the URL. The URL is not indexed by search engines by default but is not password-protected.

If this is a **private** repo on a free GitHub plan, GitHub Pages is not available. Options:
- Make the repo public (the code is a prototype, not production — this is fine)
- Upgrade to GitHub Pro ($4/month) which enables Pages on private repos
- Keep the repo private and share the prototype by running `npm run dev` locally when demoing

The simplest path: make the repo public temporarily while the team reviews the prototype. The code has no secrets, API keys, or customer data — it's a UI prototype with mock data.
