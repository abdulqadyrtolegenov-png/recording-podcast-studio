# Crystal Clear Sound — Recording & Podcast Studio

A responsive, single-page website concept for a recording and podcast studio. Built with semantic HTML, CSS Grid/Flexbox, and vanilla JavaScript.

## Files
- `index.html` — semantic page structure and booking form
- `style.css` — responsive dark/neon theme, light theme, layouts and mobile navigation styling
- `script.js` — mobile menu, theme toggle, date validation, and demo form feedback

## Run locally
Open `index.html` in a browser, or use a local server such as VS Code Live Server.

## Publish with GitHub Pages
1. Create a **public** GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Commit the files.
4. Open **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for the deployment link to appear in the Pages settings.

## Important project notes
- The booking form performs browser-side required-field validation, but it does not transmit submissions. A backend or form service is needed for real bookings.
- The microphone and mixing-console illustrations are created with CSS, so no external image assets are required.
- Replace the demo email/phone and prices with approved details before publishing.
- To satisfy the Figma visual-identity criterion, compare the page against the actual desktop (1440 px) and mobile (390 px) Figma frames and adjust spacing, colors, typography, and assets accordingly.
- Use meaningful, small Git commits as work progresses (for example: `feat: add responsive navigation`, `feat: build studio service cards`, `feat: add booking form validation`, `style: add light theme`).

## Technologies Used

- HTML5 for page structure
- CSS Grid and Flexbox for responsive layouts
- JavaScript for mobile navigation, theme switching, and form validation

## Features

- Responsive design for desktop and mobile
- Light and dark themes
- Studio service cards
- Booking form with required fields
