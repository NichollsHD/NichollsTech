# Nicholls Tech website (concept)

Static concept site for Nicholls Tech: plain HTML, CSS and JavaScript, no framework and no build step.
Separate from the SundaySaucers.com project in every way (repo, deploys, secrets).

- This is a **concept / dev site**. It is marked `noindex` and `robots.txt` disallows crawlers.
- Contact and community-rig forms are **demo only**: they send and store nothing.
- All content is placeholder. No real customer names, photos, specs or addresses belong in this repo
  without that customer's OK. Keys, passwords and codes never go in this repo.
- Nothing goes live on a real domain without Matt's go-ahead.

## Planned for the real version
Cloudflare Worker + D1 for the inquiry inbox and community-rig submissions (approve before showing),
Cloudflare Turnstile on forms, email forwarding at the new domain.

## Local preview
Open `index.html` in a browser, or run `python3 -m http.server` in this folder.
