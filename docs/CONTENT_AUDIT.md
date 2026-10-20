# Content audit

Research notes for the portfolio. Not published. Researched 2026-10-19.

## Sources checked

| Source | Access | Used for |
|---|---|---|
| Résumé PDF (`Chinamay_Kasareddy_Resume_SWE (3).pdf`) | Read (text extracted) | Experience, education, credentials, Empty Vessel metrics |
| GitHub profile `Nocturna1Developer` (public API) | Read: repo list, READMEs, language stats | Project descriptions, links |
| Dusk Games Interactive site | Read (home page text) | Context only; player quotes **not** used |
| Old Wix portfolio | Read (home page text) | Confirmed Hyperion / FormulateAI descriptions; no assets taken |
| YouTube channel | Video titles via oEmbed; thumbnails from i.ytimg.com | Matched videos to projects; posters |
| itch.io pages | Empty Vessel page read (status "Released", cover, screenshots); SlimeVenture and Disappearance pages returned near-empty HTML to the script | Cover and screenshots |
| LinkedIn | Returned HTTP 999 (bot block). Not read. | Link only |

## Experience (from résumé)

| Role | Company | Dates | Notes |
|---|---|---|---|
| Simulation Architect | ACSILabs Inc. | Sept 2023 – "Current" | **Shown as "Present". Confirm still current.** "70% server efficiency" is shown with the résumé's own wording and isn't turned into a latency or throughput figure. |
| Lead Software Engineer | Caution Ready | Mar 2023 – Dec 2024 | Overlaps with ACSILabs. "publish an MVP to Microsoft": the store or channel isn't stated, so the copy keeps the original wording. |
| Full-Stack Instructor | Coding Minds Inc. | Feb 2023 – Jan 2024 | 25% test score gain and 96% satisfaction kept with their stated scope. |
| Gameplay Programmer | Honor Games | Oct 2022 – Feb 2023 | **"95% surge in production efficiency" left out**: it's vague and its basis isn't explained. |
| Software Engineer & Board of Directors | Alter Learning | Aug 2020 – Oct 2022 | "10,000+ data points" left out to keep the entry short. |

Education: SJSU B.S. Applied Computational Mathematics (2020–2022, GPA 3.8, minors CS and Business). CSU East Bay "B.S. Mathematics" 2018–2020. **The two overlapping B.S. listings are unclear. The site says "B.S. Mathematics program". Confirm whether that was a transfer.**
Honors: President's Scholar, Honor's List, Magna Cum Laude. The résumé doesn't say which school gave them; **the site puts them under SJSU. Confirm.**
Certifications: AWS Solutions Architect – Associate (**an Associate cert expires after 3 years. Confirm it's still active**), Deep Learning Nanodegree, Self-Driving Car Nanodegree. The provider isn't named on the résumé, so the site doesn't name one.

## Project selection

| Project | Evidence | Decision |
|---|---|---|
| The Empty Vessel | Released on itch.io; résumé metrics; full-gameplay video; repo (C#) | **Flagship 1**: strongest outcome evidence |
| Hyperion | Live Vercel deploy (HTTP 200); README; walkthrough video; repo (TS) | **Flagship 2**: full-stack product with payments and auth |
| Advanced Lane Detection | README pipeline; sample output image; video; Nanodegree context | **Flagship 3**: computer vision and math breadth |
| SlimeVenture | itch.io page, trailer, repo (15★) | More work |
| The Disappearance | itch.io page, full gameplay video, repo (27★, most-starred) | More work |
| FormulateAI | README, showcase video | More work. The README's GitHub link points to `FormulateAI-3D-Website`; the profile repo is `FormulateAI`. The site links to `FormulateAI`. |
| Others (Crystal Journey, Lost Legacy, Tank War, ML Nanodegree repos, Gustify, SimpleReads) | Thin evidence or coursework | Not featured |

Video ↔ project matches (oEmbed titles): `i-WyRDsDctM` Empty Vessel · `PGCNf-_DkNI` Hyperion · `5tyxVKph3Zg` Advanced Lane Finding · `r5-DEYGfWAA` SlimeVenture · `OprsYiEykEE` The Disappearance · `m9VQWD5IFus` Formulate3D.

## Discrepancies and open questions

1. **Email and résumé are removed from the site at the owner's request (2026-10-19).** Contact goes through LinkedIn. The résumé will link to the site instead. (The résumé's email `kasareddychnamay@gmail.com` may be a typo of "chinamay".)
2. The résumé links `github.com/chinamayk` and `MyDevPortfolio.com`. The site uses `github.com/Nocturna1Developer` as instructed. The old links weren't checked.
3. **Empty Vessel metrics** (17,000+ views, 1,500+ downloads, 4.8/5 across 580 reviews) come from the résumé only and couldn't be checked against itch.io. The "94% player satisfaction" figure is left out because its source is unclear. Résumé dates are Feb–Mar 2021, but the bullet says "2 months"; both are consistent with "about two months".
4. The Empty Vessel README says "I made this game", so the site calls it a solo project. The résumé lists Jira, which suggests some process tooling; confirm there were no collaborators.
5. Hyperion follows a well-known "Spotify clone" stack. If it was built from a tutorial, consider saying so.
6. The lane-detection year isn't stated (repo last pushed 2023, Nanodegree repos 2021), so no year is shown.
7. The phone number is deliberately not published.
8. The portrait isn't used; no suitable authentic photo was found.
9. Player quotes on the Dusk site aren't used, to avoid testimonial claims.

## Asset provenance
- `ev-cover.jpg`, `ev-shot1/2.jpg`: itch.io page for The Empty Vessel (the author's own uploads).
- `hyperion.jpg`, `formulate.jpg`: README screenshots in the author's repos.
- `lane.jpg`: `examples/example_output.jpg` in the lane-finding repo.
- `yt-*.jpg`: YouTube thumbnails of the author's own videos.

## Showreel (2026-10-19)
The published reel is the owner's 90-second edit `Chinamay_Kasareddy_Showreel.mp4`, saved as `public/media/showreel.mp4`. It contains Formulate, SlimeVenture, Hyperion, horror/survival games, lane finding, SimpleReads, world exploration, space flight, Gustify and a name end-card, with no employer footage seen on the contact sheet. It replaced an earlier 4:45 cut built by `scripts/make-reel.mjs`. Order: intro card → Dusk Games demo reel `JP2-1NQUMZ4` (2.5–69 s) → Hyperion (1:08–1:28, 2:10–2:45) → FormulateAI (0:00–0:45) → Lane Finding (0:00–0:40) → SimpleReads/Flutter (0:24–1:04) → Gustify (full 20 s) → outro card. The demo reel and Hyperion came from YouTube via yt-dlp, with the owner's approval. The other four are the owner's local files. YouTube blocked anonymous download of the Formulate, Lane, SimpleReads and Gustify uploads. No employer (ACSI/EABO/FutureView) footage is used. Gustify is described as an iOS/Swift app from its repo description.

## LinkedIn reconciliation (2026-10-20)
The owner chose LinkedIn (profile PDF export) as the source of truth, except that ACSILabs keeps "U.S. Marines". Updated: Caution Ready Games (Jan 2023 – Jan 2024; SDKs now include multiplayer), Coding Instructor at Coding Minds Academy (Jan 2023 – Mar 2024), Honor Games Software Engineer (Mar 2023 – Jul 2023; LinkedIn says 80% efficiency, which the site still leaves out), Alter Learning ends Jan 2023 (40 "games", AWS). Added from LinkedIn: Dusk Games Interactive (2015–), Etsy digital-asset shop (Jul 2023–), RippleMatch (Aug–Dec 2022), APATICS QA (May–Aug 2020). The location was removed from the site. The LinkedIn URL is now `linkedin.com/in/chinamay-k-ba7242173`, from the export. The résumé was updated to match LinkedIn in `Downloads/Chinamay_Kasareddy_Resume_SWE (4).docx`; layout couldn't be rendered here because no Word or LibreOffice is installed.
