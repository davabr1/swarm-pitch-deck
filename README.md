# swarm · pitch deck

Interactive 12-slide pitch for Southern California Blockchain Conference 2026.

## Local preview

```bash
python3 -m http.server 8765
```

Open http://localhost:8765

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `swarm-deck`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "initial"
   git branch -M main
   git remote add origin git@github.com:<you>/swarm-deck.git
   git push -u origin main
   ```
3. On GitHub → repo → **Settings** → **Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` · `/ (root)`
4. Wait ~30s. Deck lives at `https://<you>.github.io/swarm-deck/`.

The `.nojekyll` file is required — without it, GitHub Pages skips the `media/_assets/` folder (Jekyll ignores underscore-prefixed paths).

## Controls

- `→` / `←` · next / prev slide
- `space` · next
- pointer to bottom of screen · reveals nav HUD
- `?export=1` · static 1920×1080 render (for screenshot/export)

## Files

- `index.html` · deck markup, 12 slides
- `styles-v3.css` · 16:9 stage + slide styles
- `script-v3.js` · stage fit, keyboard nav, HUD autohide
- `media/_assets/prague-claywork.png` · image referenced on slide 6
