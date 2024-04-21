Custom change for sidebar toogle is on branch `custom-side-panel`

Branch `custom-side-panel-dev` include `custom-side-panel` and contains additional commits related to local development and making custom prod build (for personal use).

During development:
- use `custom-side-panel-dev`
- run `npm run local:extension:chrome` (from main README | probably not needed to change `same-site-by-default-cookies`)
- in browser "Load unpacked" extenstion folder `dist/chrome/dev`

At the end of the development create custom build for personal use:
- run `npm run build:extension:chrome`
- in browser "Load unpacked" extenstion folder `dist/chrome/local-prod-build`

(If needed) Update folder with custom build (prod) in repo: `git add dist/chrome/local-prod-build -f`

> [!WARNING]
> All changes in this fork repo are quick (ugly) solutions - only for personal use.
