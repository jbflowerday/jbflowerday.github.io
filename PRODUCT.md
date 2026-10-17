# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people looking at Jack Flowerday's work, such as other developers, radio and LoRa/Meshtastic hobbyists, Home Assistant users, and anyone who followed a link from GitHub. They want to see what each project is and what it does, then move on to it.

Secondary: users of Jack's apps (currently AntennaAlign on iOS and Android) who arrive from an App Store or Google Play listing looking for the support page or the privacy policy. They need to find the answer or the contact route quickly. App store review teams also open these URLs.

## Product Purpose

A personal portfolio of Jack's apps and public repositories, plus the support and privacy home that each published app needs. Success is a visitor understanding each project at a glance and being able to open its overview, code or support page. There is no conversion goal: the site is for browsing, not for hiring, contact or sales.

## Positioning

The work sits where radio, terrain and home hardware meet: aiming directional antennas against real terrain (AntennaAlign) and reading solar inverters over Bluetooth into Home Assistant (esphome-sma-sunnyboy). The site is one person's record of practical field and home tools, not an agency or a product company.

## Operating Context

- Hosted on GitHub Pages from `main` at https://jbflowerday.github.io. Pushing republishes within a minute or two.
- App Store Connect and Google Play link to `/antennaalign/support/` and `/antennaalign/privacy/`; those URLs must stay stable.
- The AntennaAlign app downloads `https://jbflowerday.github.io/data/au-cell-sites.json` (an Australian cell site snapshot built from ACMA licence records) at runtime, so this site is part of the app's data path.
- New apps are scaffolded with `node scripts/new-app.mjs <slug> "<Name>" "<tagline>"`, which creates the overview, support and privacy pages from `_template/` and adds a home tile.
- The home page lists public repos from the GitHub API on load (skipping forks, archived repos and this repo). Repos without a hand-written page get a generic overview at `/project/?repo=<name>` built from their README.

## Capabilities and Constraints

- Plain static HTML and one stylesheet (`assets/style.css`). No build step and no framework. Jekyll only applies `_config.yml` excludes.
- `/data/` paths and file formats must stay stable because a shipped app depends on them.
- Support and privacy contact goes through GitHub Issues on this repo. No email address is published.
- Third-party requests are acceptable (for example Google Fonts and the GitHub API), but privacy pages must accurately describe what each app sends where.
- Privacy and support content must match what the app actually does. Check it against the app's code before changing claims.
- The AntennaAlign source code is private: never link to its repository.

## Brand Commitments

- Name as written: Jack Flowerday. App name: AntennaAlign. Repo names are shown as written (for example `esphome-sma-sunnyboy`).
- Voice: plain, factual, first person on the home page, sentence case, no marketing superlatives.
- AntennaAlign app icon: `assets/antennaalign-icon.png`, copied from the app repo.

## Evidence on Hand

- AntennaAlign App Store screenshots: `antennaalign/img/*.jpg`, resized from `antennaalign-app/store/app-store/iphone-6.3`. Earlier screenshots in `antennaalign-screenshots` are placeholders and must not be used.
- AntennaAlign feature copy: `antennaalign-app/store/app-store-listing.md` and the app's commit history.
- esphome-sma-sunnyboy README and configuration examples in its public repo.
- No testimonials, download counts, reviews, press or user numbers exist. Don't invent them.

## Product Principles

1. Each project explains itself in plain terms: what it does, for whom, and where to go next.
2. Support and privacy information is easy to reach and always truthful.
3. Show real artifacts (icons, screenshots, code) instead of claims.
4. Keep it maintainable by one person: static files, a scaffold script, no moving parts beyond Pages.
5. Never break URLs that the app stores or the app itself depend on.
