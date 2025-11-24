# Next Steps & Helpful Scripts

Below are the practical next steps and small scripts you can use to make reviewing and running the site easier. These are the items we discussed earlier (re-added per your request).

- **Add a simple server script (PowerShell)** — creates a one-click way for reviewers to start a local server and open the site in the default browser. Create a file named `start-server.ps1` in the project root with the contents below.

```powershell
# start-server.ps1 — run from project root
param(
	[int]$Port = 8000
)

Write-Output "Starting static server on http://localhost:$Port"
Start-Process -FilePath "cmd" -ArgumentList "/c","start http://localhost:$Port"
python -m http.server $Port
```

- **Add a local QR image for Venmo** — if you prefer not to depend on an external QR service, I can generate a QR PNG and add it to `assets/images/venmo_qr.png` and update `donate.html` to use the local image.

- **Improve logo / favicon** — replace `assets/images/Logo.png` with a higher-quality PNG or an SVG for transparency and better rendering. I can convert or add an SVG if you provide it.

- **Gallery UX improvements** — add captions under `AU_` thumbnails and a simple lightbox (JS) so clicking a thumbnail opens an overlay instead of a new tab.

- **Sponsorship & invoice** — `sponsorship_form.html` is in the repo; you can customize the fields. We can add a server-side endpoint later to accept form submissions if needed.

- **OCR / tools** — if you want to run the included OCR tool (`tools/ocr_extract.py`), install the Tesseract binary on your machine and use the provided Python venv steps in the README.

- **Repository details** — If you'd like, I can insert the repository URL and an explicit maintainer/contact block into this README (please provide the URL and contact email/name).

If you want me to implement any of the above (generate a local QR, create `start-server.ps1` file, add lightbox, or replace the logo with an SVG), tell me which item(s) and I will apply the edits.
