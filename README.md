# FLG
A concise, generic README template for website development projects.

## Table of Contents
- Overview
- Features

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
- `registration.html` — Client-side registration form for a foursome (stores entries in `localStorage` and allows export to JSON).
- `registration.html` — Redirects / links to a Google Form for registration. Replace the placeholder `https://forms.gle/YOUR_GOOGLE_FORM` in the files below with your real Google Form URL.
- `donate.html` — Donation page with a Venmo link placeholder.

New images added
- `LallyGolfPoster25.jpg` — added to `pictures.html` gallery and displayed on `index.html` as the event poster (moved to `assets/images/LallyGolfPoster25.jpg`).

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
# Frank Lally Golf Classic — Website (Static)

This repository contains a small static website used to present event details, gallery images, registration (Google Form), sponsorship info and payment instructions for the Frank Lally Golf Classic.

Essential files
- `index.html` — Home / hero and event summary.
- `about.html` — About & gallery (uses `assets/images/AU_*.jpg`).
- `pictures.html` — Photo gallery.
- `winners.html` — Past winners.
- `sponsors.html` — Sponsorship info and printable sponsorship form.
- `registration.html` — Embedded Google Form for registration (iframe).
- `donate.html` — Payments page (Venmo link and QR code).
- `assets/` — CSS, JavaScript and `images/` used by the site.

Quick purpose
- Static site for previewing event pages, gallery, and payment instructions. This is intended for local review and small-scale distribution (not a production deployment).

How to get the project (GitHub link / package)
1. From GitHub (preferred): obtain the repository URL from the project owner or maintainer (it looks like `https://github.com/<owner>/<repo>.git`).
   - To receive the URL: the owner can paste the link in email, chat, or create a GitHub repository invite. Ask the owner for the repository link.
2. Download a ZIP from the GitHub web UI: open the repository page in a browser and click **Code → Download ZIP**.

Clone (PowerShell) — recommended if you have Git installed
1. Open PowerShell and run:

```powershell
# Clone the repository (replace <repo-url> with the URL you received)
git clone <repo-url>

# Change into the repo folder
Set-Location -Path .\<repo-folder>
```

Download + extract ZIP (no Git)
1. Download the ZIP from the repo page.
2. Extract it with File Explorer or PowerShell:

```powershell
# Example: unzip to current folder
Expand-Archive -Path .\FrankLallyRepo.zip -DestinationPath .\FrankLallySite
Set-Location -Path .\FrankLallySite
```

Run the site locally for review (no server required for static files, but a simple local server is recommended)
1. Using Python (common and cross-platform):

```powershell
# From the project root (folder containing index.html)
# Start a simple static server on port 8000
python -m http.server 8000

# Open in browser:
# http://localhost:8000
```

2. Alternative: If you have VS Code, open the folder and use the Live Server extension (right-click `index.html` → Open with Live Server).

Optional: Python environment (only required for tools like the provided OCR script)
1. Create and activate a venv (Windows PowerShell):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Install optional packages (example used in this project for image conversion/OCR):

```powershell
pip install pillow pytesseract
```

Notes about OCR and Tesseract
- The repository includes a small OCR helper (`tools/ocr_extract.py`) that requires the Tesseract binary on the system. Installing `pytesseract` alone is not enough — install the Tesseract executable (Windows installer) and add it to your PATH to use OCR.

Quick verification checklist for reviewers
- Confirm `index.html` loads and displays the hero and poster.
- Visit `about.html` to view the AU_ gallery thumbnails.
- Open `registration.html` to check the embedded Google Form (or open it in a new tab via the provided link).
- Open `donate.html` (Payments) to verify Venmo link and QR code.

What I changed (if you are reviewing edits)
- This README has been simplified to the essential information needed to get the project locally and preview it. All generic template / scaffold notes were removed.

Contact / Maintainer
- For the official repository link, access rights, or to request additional changes, contact the site maintainer (use the same channel you received this repository link from).

License
- Add a LICENSE file if you want to publish under a specific license (e.g., MIT). If none is present, treat this repo as private/internal until a license is chosen.