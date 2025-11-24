<<<<<<< HEAD
# Frank Lally Golf Classic — Website (Static)

A short, non-technical guide to what this site contains and how to run it locally for review.

Overview
--------
This repository is a simple static website that presents event information, a small gallery, registration (via an embedded Google Form), sponsors, winners, and payment instructions. It is intended for review and previewing locally — no special server is required for basic viewing.

Pages and what they contain
---------------------------
- `index.html` — Home/hero with the event title, date/time/location, and an event poster image.
- `about.html` — Information about the event and a small gallery using files named `AU_*` in `assets/images/`.
- `pictures.html` — Photo gallery page to view images included in `assets/images/`.
- `winners.html` — Lists past winners and highlights recent winners.
- `sponsors.html` — Sponsorship information and a link to a printable sponsorship form (`sponsorship_form.html`).
- `registration.html` — An embedded Google Form (iframe) for registration; also contains a direct link to open the Google Form in a separate browser tab.
- `donate.html` (labeled `Payments`) — Payment instructions, including a Venmo link and a QR code to the Venmo profile.
- `assets/` — Contains `css`, `js`, and `images/` used by the pages (logo, gallery images, poster, thumbnails).

Important notes before you start
-------------------------------
- The site is static HTML/CSS/JS — Internet is required for the embedded Google Form and the Venmo QR link to work.
- You do not need to know how to code to view the site locally.

How to get the project from GitHub (the URL you gave)
---------------------------------------------------
Repository link: `https://github.com/RedGrim/FLG`

Method A — Quick and easiest (non-technical)
-------------------------------------------
Ideal for reviewers who just want to open the site files without installing anything.

1. Open your web browser and go to:

	 `https://github.com/RedGrim/FLG`

2. On the repository page click the green **Code** button and choose **Download ZIP**.

3. Once the ZIP has downloaded, open the folder where your browser saved it (usually the `Downloads` folder).

4. Right-click the ZIP file and choose **Extract All...** and extract to a folder you can find (for example `C:\Users\<YourName>\Downloads\FLG-main`).

5. Open the extracted folder and double-click `index.html` to open it in your default web browser.

Notes for Method A:
- Double-clicking `index.html` opens the pages directly (file protocol). Most content will display correctly. If the embedded Google Form does not load inside the page, click the "Open Google Form" link on the registration page to open the live form in a new browser tab.

Method B — Recommended (reliable): run a small local server (easy steps)
---------------------------------------------------------------------
This method is slightly more technical but still straightforward. It avoids browser security restrictions and behaves the same as a simple website.

Step 1 — Check if Python is already installed

1. Press the Windows key, type `PowerShell`, and open **Windows PowerShell**.
2. In PowerShell type the following and press Enter:

```powershell
python --version
```

3. If you see a Python version (for example `Python 3.11.4`), skip to Step 2. If PowerShell reports `python` is not recognized, follow the installation steps below.

Install Python (only if needed)

1. Open your browser and go to: `https://www.python.org/downloads/windows/`.
2. Click the latest **Windows installer** (the one that says "Download Windows installer (64-bit)").
3. Run the downloaded installer. IMPORTANT: On the first installer screen check the box **Add Python to PATH**, then click **Install Now**.
4. Once installation completes, re-open PowerShell and run `python --version` again to verify it shows a version.

Step 2 — Start the local server

1. In PowerShell, change to the folder where you extracted the site files. Example (replace the path with the folder you used):

```powershell
Set-Location -Path "C:\Users\<YourName>\Downloads\FLG-main"
```

2. Start the server with this command:

```powershell
python -m http.server 8000
```

3. After running the command you will see a message that the server is serving on port 8000. Open your web browser and go to:

```
http://localhost:8000
```

4. To stop the server, go back to the PowerShell window and press `Ctrl+C`.

Why this method is recommended
- It avoids browser quirks when loading embedded content and mirrors how a real website behaves.

Troubleshooting (simple, non-technical)
--------------------------------------
- If the Google Form does not load inside the page: click the **Open Google Form** link on the `registration.html` page to open it in a new tab.
- If `python --version` shows an error after installing Python, restart your computer and try again (the PATH change sometimes needs a restart).
- If the browser shows a blank page or images missing, verify you opened the site folder that contains `index.html` and `assets/` — not the ZIP file.

Accessibility tips for reviewers
--------------------------------
- Zoom in/out in the browser (Ctrl + or Ctrl -) to adjust text size.
- Use the browser's back button to return from linked pages.

Security and privacy notes
--------------------------
- This project contains no server-side code and does not store form responses locally — the registration form is served by Google Forms (you will need internet access for that part).

---

_End of guide._
=======
# redgrim1.github.flg
hosting site for flg
>>>>>>> 01dd57737f8f7ed0f0822ab7d80b8cfeb94eaf58
