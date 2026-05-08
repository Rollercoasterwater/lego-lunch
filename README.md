# 🧱 Lego Lunch Builder

A modular meal prep app for building freezer-ready "lego" lunches from 290 ingredients — shuffle, filter by pantry, plan your week, and track what you've made.

**[→ Open the App](https://YOUR-USERNAME.github.io/lego-lunch/)**

---

## What It Is

Lego Lunch is built around one idea: cook components in bulk, freeze them as modular "bricks," and mix-and-match them into meals throughout the week. Instead of prepping full dishes, you prep building blocks — a protein, a starch, a vegetable, a sauce — and shuffle them into endless combinations.

The app holds 290 ingredients across 9 categories, each with freeze life, reheat method, macros, cost per serving, cuisine lane, and a freeze-and-reheat quality rating. Shuffle them into a meal in one tap.

---

## Features

### 🥣 Builder
- Shuffle 290 ingredients into a meal in one tap
- Four meal modes: Bowl, Soup Meal, Noodle Bowl, Comfort Plate, Dessert Build
- **Weighted shuffling** — higher-rated ingredients appear more often
- **Chaos mode** — deliberately surfaces unusual or low-rated combos
- **Surprise Me** — picks from the bottom 35% of each category to push you out of your comfort zone
- **Coherent cuisine lane** — lock the shuffle to a single cuisine (Mexican, Italian, Korean, etc.)
- **Lock bricks** you like and reshuffle the rest
- **Drag and drop** to swap brick positions
- **Swipe left/right** on a brick to swap it (mobile)
- **Compat mode** — lock one brick and reshuffle all others to match its cuisine lane
- **Compact view** to see all 4 bricks at a glance
- **Reheat sequence** — step-by-step instructions timed by thaw time
- **Reheat conflict warnings** when bricks require incompatible methods
- **Shared ingredients** highlighted across the meal so you can prep once

### 🥫 Pantry
- Log 260+ ingredients you actually have at home, organized into 8 groups
- Each ingredient shows how many recipe items use it
- Enable **Pantry filter** in the builder to only shuffle items you can make
- **% pantry match** badge on every brick
- Selections persist between sessions

### 📅 Weekly Planner
- Generate a full 7-day meal plan in one tap
- Mixed mode rotates through all meal types across the week
- Per-day calorie, protein, and cost breakdown
- **Shopping list** auto-generated from the week's ingredients, with checkboxes

### ★ Saved Meals
- Save any combination with a custom name
- Load saved meals back into the builder
- Full macro and cost summary per saved meal

### 🕐 History
- Log meals with 1–5 star ratings and notes
- Tap any history entry to reload it in the builder

### 🔍 Ingredient Spotlight
- Search all 290 ingredients by name, cuisine, category, or dietary flag
- Full detail card: macros, freeze life, reheat method, key ingredients, cuisine lanes
- **Use in Builder** button sends any ingredient directly to the builder

### 🎯 Nutrition Goals
- Set a calorie or protein target
- Shuffle steers toward items that hit the target per slot
- Live progress bars in the sidebar

---

## The Ingredient Database

| Category | Count |
|---|---|
| Proteins | 52 |
| Vegetables | 69 |
| Starches / Carbs | 35 |
| Sauces / Flavor Bases | 32 |
| Soups / Stews | 38 |
| Noodles & Dumplings | 11 |
| Warm Puddings & Comfort | 10 |
| Grain Bowls & Specialty Bases | 10 |
| Desserts | 33 |
| **Total** | **290** |

Every ingredient includes:
- Freeze & reheat quality rating (out of 10), split into texture and flavor scores
- Best reheat method (microwave, oven, skillet, room temp, stovetop)
- Thaw time (minutes)
- Freeze life (weeks)
- Calories, protein, carbs, fat per serving
- Active prep time and hands-off cook time
- Container size
- Key shared ingredients
- Cuisine lanes
- Dietary flags (V, VG, GF, DF)
- Estimated cost per serving (2025 US grocery prices)

---

## Installing on Your Phone

This is a PWA — it installs directly from the browser with no App Store needed.

**iPhone (Safari):**
1. Open the app URL in Safari
2. Tap the Share button (box with arrow)
3. Tap **Add to Home Screen**
4. Tap **Add**

**Android (Chrome):**
1. Open the app URL in Chrome
2. Chrome will show an **Install App** banner at the bottom — tap it
3. Or tap the three-dot menu → **Add to Home Screen**

Once installed it runs fullscreen with no browser chrome, and works completely offline.

---

## Running Locally

No build step, no dependencies, no server required. Just open the file:

```bash
git clone https://github.com/YOUR-USERNAME/lego-lunch.git
cd lego-lunch
open index.html
```

For the service worker to work properly (offline caching), you need to serve it over HTTP rather than opening the file directly. Use any static server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .

# Then open http://localhost:8000
```

---

## Tech Stack

- Vanilla HTML, CSS, JavaScript — no frameworks, no build tools
- PWA: Web App Manifest + Service Worker for offline support
- localStorage for pantry, favorites, and history persistence
- Google Fonts: Syne + Instrument Sans
- Self-contained single file — the entire app and all 290 ingredients ship in one `index.html`

---

## Data Sources

Macros are based on USDA FoodData Central reference values for standard cooked serving sizes. Costs reflect 2025 US average grocery prices per serving. Freeze life windows are based on USDA freezer storage guidelines. Freeze-and-reheat quality ratings are editorial assessments based on how well each item holds texture and flavor through the freeze-thaw-reheat cycle.

---

## License

MIT — use it, fork it, adapt it for your own meal prep system.
