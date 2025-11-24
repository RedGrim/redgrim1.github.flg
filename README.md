# FLG
A concise, generic README template for website development projects.

## Table of Contents
- Overview
- Features
- Tech stack
- Development & build
- Deployment
- Testing & quality
- Contributing
- License
- Contact


## Features
- Responsive layout
- Accessible semantic HTML
- Client-side routing (if applicable)
- API integration
- Performance optimizations (lazy-loading, code splitting)
- Frontend: HTML, CSS (or framework), JavaScript (or framework/library)
- Build tools: Node.js, package manager (npm/yarn), bundler (Vite/Webpack/Parcel)
- Node.js >= 16
- npm or yarn
- (Optional) Git, Docker

## Quick start
1. Clone the repo
    ```bash
    git clone <repo-url>
    cd <project-name>
    npm install
    # or
    yarn
    ```
3. Run dev server
    ```bash
    npm run dev
    # or
    ```bash
    npm run build

## Project structure (example)
```
Google Form setup
- The registration form is now embedded on `registration.html` using the provided Google Forms iframe. Navigation now points to the internal `registration.html` so users stay on the site.
- If you prefer linking directly to the Google form URL instead of embedding, update the nav links in the pages above.
/src
  /components
  /pages
  /styles
  /assets
public/
tests/
package.json
README.md
```
# Charity Golf Tournament — Website Skeleton

This workspace contains a simple static website skeleton for a charity golf tournament. It includes pages and placeholder assets for:

 - `index.html` — Main landing page with quick links. Includes `LallyGolfPoster25.jpg` (event poster) shown on the Home page and event details (date, times, location, pricing).
- `about.html` — About the person the tournament is named after (portrait + story).
- `pictures.html` — Last year's highlights (gallery placeholders in `assets/images`).
- `pictures.html` — Last year's highlights. I added `LallyGolfPoster25.jpg` to the gallery as the first item.
- `winners.html` — Past winners with last year's winner highlighted.
- `sponsors.html` — Sponsors grid to show sponsor logos and links.
 
 Event details (added from the poster text)
- Title: "Frank Lally Memorial Golf Classic" — Swing for a Cause, Honor a Legacy
- Purpose: Scholarship for Roman Catholic High School students who have lost their fathers
- Date: Friday, September 26, 2025
- Times: Trackman simulators open 11:00 AM, Registration 11:30 AM, 1:00 PM shotgun start
- Location: Jeffersonville Golf Club — 2400 W. Main Street, Norristown, PA 19403
- Pricing: $200 per player; Hole Sponsors: $100 each or 2 for $150
- Features: Awards, Raffles, Door Prizes — Buffet + Open Bar immediately following in the banquet hall

 Note: `obit.jpg` was removed and replaced with the placeholder image `assets/images/placeholder.jpg` in `about.html`. If you add a new portrait image, place it in `assets/images/` and update `about.html` accordingly.
- `registration.html` — Client-side registration form for a foursome (stores entries in `localStorage` and allows export to JSON).
- `registration.html` — Redirects / links to a Google Form for registration. Replace the placeholder `https://forms.gle/YOUR_GOOGLE_FORM` in the files below with your real Google Form URL.
- `donate.html` — Donation page with a Venmo link placeholder.

New images added
- `LallyGolfPoster25.jpg` — added to `pictures.html` gallery and displayed on `index.html` as the event poster (moved to `assets/images/LallyGolfPoster25.jpg`).

Note: `obit.jpg` was removed and replaced with the placeholder image `assets/images/placeholder.jpg` in `about.html`. If you add a new portrait image, place it in `assets/images/` and update `about.html` accordingly.

If you want me to extract text from either image (OCR) and use the extracted text to populate the About story, the Winners captions, or alt text, I can attempt OCR — tell me you want that and I'll run an OCR pass (I may need to install Python OCR packages or use an external service). Alternately, you can tell me the text to include and I will update the pages directly.

Assets:
- `assets/css/style.css` — Base styles.
- `assets/js/main.js` — Registration form handling and small nav helper.
- `assets/images/placeholder.jpg` — Replace with real images/logos.

How to run locally
- If you have Python installed, from this folder run:

```powershell
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

Notes and next steps
- The registration form is client-side only; to collect registrations centrally, add a server endpoint and update the form to POST to that endpoint (or add AJAX in `assets/js/main.js`).
- Replace `assets/images/placeholder.jpg` with real photos and sponsor logos.
- Update the Venmo link in `donate.html` to your actual Venmo username (replace `your_venmo_username`).

Google Form setup
- Replace all occurrences of `https://forms.gle/YOUR_GOOGLE_FORM` in these files to point to your live Google Form URL:
  - `index.html` (hero CTA and nav)
  - `about.html`, `pictures.html`, `winners.html`, `sponsors.html`, `donate.html` (nav)
  - `registration.html` (fallback button and redirect script)

Notes:
- `registration.html` now auto-redirects to that Google Form and provides a visible button as a fallback for users with JS disabled.
- Using Google Forms removes the need to build a registration backend and gives you a simple place to view and export sign-ups.

If you want, I can:
- Wire a simple Node/Express endpoint to accept registrations.
- Add basic image upload and gallery management.
- Create a small admin page to view registrations.
## Development & build
- Development: run the dev script to enable hot reload.
- Production build: run build script to generate optimized assets.
- Serve production locally:
  ```bash
  npm run preview
  # or
  npm run start
  ```

## Environment
- Use a .env file for environment-specific variables.
- Example:
```
VITE_API_URL=https://api.example.com
NODE_ENV=production
```
(Adjust naming to your build tool)

## Deployment
- Deploy static build to hosting providers (Netlify, Vercel, GitHub Pages, S3).
- For SSR: configure Node/Server hosting or serverless functions.
- Add a CI pipeline to run tests, lint, and build before deploy.

## Testing & quality
- Unit/integration tests with Jest/Testing Library or framework alternatives.
- Linting with ESLint and style checks with Prettier.
- Accessibility audits (axe, Lighthouse) and performance checks.

Commands (examples):
```bash
npm test
npm run lint
npm run format
```

## Contributing
- Fork the repo, create a feature branch, submit PRs with descriptions and tests.
- Follow code style and commit message conventions.
- Add changelog entries for notable changes.

## License
Specify a license (e.g., MIT). Add LICENSE file.

## Contact
Project maintainer: Your Name — contact@example.com

Notes:
- Replace placeholders with project-specific details.
- Keep secrets out of the repository (use environment variables or secret stores).
- Regularly run accessibility and performance checks.