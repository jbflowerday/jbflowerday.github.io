# jbflowerday.github.io

Support and privacy pages for my apps, hosted with GitHub Pages at https://jbflowerday.github.io.
One folder per app, so the same repo can be reused as the **Support URL** and **Privacy Policy URL** for App Store Connect and Google Play.

| App | Support URL | Privacy policy URL |
| --- | --- | --- |
| AntennaAlign | https://jbflowerday.github.io/antennaalign/support/ | https://jbflowerday.github.io/antennaalign/privacy/ |

## Add a new app

```bash
node scripts/new-app.mjs my-app "My App" "One-line description"
```

This creates `/my-app/` (app page, support page, privacy policy) from `_template/` and adds the app to the landing page.
Then **fill in every `TODO`** in `my-app/privacy/index.html` and `my-app/support/index.html` with what the app really does
(permissions, third-party services, data sent off the device). Check it against the app's code before submitting. Commit and push to `main`; Pages
republishes within a minute or two.

## Notes

- Pure static HTML and one stylesheet (`assets/style.css`, light and dark). No build step.
- Contact for support and privacy questions is this repo's Issues page. Replace it with an email address in
  `_template/*.html` and the existing pages if you prefer.
- `scripts/`, `_template/` and this README are excluded from the published site (`_config.yml`).
- If the site returns 404 after the first push: Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`.
