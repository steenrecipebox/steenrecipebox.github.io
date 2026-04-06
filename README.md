# the recipe box

A family recipe site built with Astro. Recipes are Markdown files — add one, push, done.

**Live at:** `https://yourusername.github.io`

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
```

---

## Adding a recipe

Create a file in `src/content/recipebox/`. The filename becomes the URL.

```
src/content/recipebox/moms-apple-pie.md
→ yoursite.com/recipebox/moms-apple-pie
```

### Frontmatter fields

```yaml
---
title:       "Mom's Apple Pie"       # required — shown in list and page heading
description: "Short summary."        # optional — shown in list and page
tags:        [dessert, baking, fruit] # optional — used for filtering
servings:    "8 servings"            # optional
time:        "1 hr 30 min"           # optional — shown in list
yield:       "1 pie"                 # optional
source:      "Mom's recipe box"      # optional — attribution
favorite:    true                    # optional — marks with ★, filterable
---
```

All fields except `title` are optional. Only supply what's relevant.

### Suggested tags

Use whatever makes sense for your family. These are consistent across the sample recipes:

| Tag | Use for |
|-----|---------|
| `breakfast` | Morning dishes |
| `dinner` | Main meals |
| `dessert` | Sweet endings |
| `beverage` | Drinks |
| `bread` | Breads, rolls, biscuits |
| `baking` | Anything oven-made |
| `quick` | 30 minutes or less |
| `slow-cooker` | Crockpot recipes |
| `chicken` / `beef` / `pork` | Protein tag |
| `no-cook` | No heat required |
| `family-favorite` | Extra-loved |

Tags are free-form — whatever you add shows up automatically in the filter bar.

### Recipe body

Write in standard Markdown. The site styles ingredient lists and numbered instructions to look their best:

```markdown
## Ingredients

- 2 cups flour
- 1 tsp salt

### Sauce
- 1 can tomatoes
- 2 cloves garlic

## Instructions

1. Preheat oven to 375°F.
2. Mix dry ingredients in a bowl.
3. Add wet ingredients and stir until just combined.

## Notes

Any tips, variations, or storage info go here.
```

Use `## Ingredients`, `## Instructions`, and `## Notes` as your main headings. Add `###` sub-headings inside Ingredients to group components (dough, filling, frosting, etc.).

---

## Deploying to GitHub Pages

1. Create a GitHub repo (any name — `recipes`, `recipebox`, or `yourusername.github.io`)
2. Update `astro.config.mjs`:
   ```js
   site: 'https://yourusername.github.io',
   // if repo is not <username>.github.io:
   // base: '/recipebox',
   ```
3. Push to `main`
4. GitHub → Settings → Pages → Source → **GitHub Actions**

Every push to `main` redeploys automatically in ~60 seconds.

---

## Project structure

```
src/
  content/
    config.ts              ← frontmatter schema
    recipebox/
      *.md                 ← your recipes go here
  layouts/
    Base.astro             ← shared shell (header, nav, footer, theme)
  pages/
    index.astro            ← recipe list with search + filter
    about.astro            ← instructions page
    404.astro
    recipebox/
      [slug].astro         ← individual recipe pages
  styles/
    global.css             ← full design system
public/
  favicon.svg
.github/workflows/
  deploy.yml               ← GitHub Actions CI/CD
```

---

## Placeholders to update

| File | Change |
|------|--------|
| `astro.config.mjs` | `site:` URL |
| `src/layouts/Base.astro` | Site name, tagline, footer text |
| `src/pages/about.astro` | Family description |
| `src/content/recipebox/*.md` | Delete samples, add real recipes |
