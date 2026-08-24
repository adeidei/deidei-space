# deidei.space

Deidei's public notebook for curiosities, progress, and insights from the middle of making things.

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run astro -- check
npm run build
```

## Add a note

Create a Markdown file in `src/data/notes/`:

```md
---
title: "A clear title"
description: "One sentence that stands on its own."
kind: "curiosity" # curiosity | progress | insight
publishedAt: 2026-08-25
draft: false
---

Write the note here.
```

The filename becomes the permanent URL, so choose it once and keep it stable.

## Public-safety rule

Do not publish health or medication details, financial details, client-confidential information, family or relationship details, private repository data, or full identity/location combinations.
