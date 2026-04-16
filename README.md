# Summer Chang Portfolio — website-03

Clean Next.js 16 build. Fresh scaffold, no patch history.

---

## First-time setup

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → open http://localhost:3000

# 3. Build check (catches type errors before pushing)
npm run build
```

---

## Push to GitHub + deploy on Vercel

```bash
# From inside this folder:

git init
git add .
git commit -m "initial: website-03 clean scaffold"

# Create a new repo on github.com called "website-03"
# then connect it:
git remote add origin https://github.com/SummerBreezeChang/website-03.git
git branch -M main
git push -u origin main
```

Then go to vercel.com → Add New Project → Import `website-03` → Deploy.
Vercel auto-detects Next.js. No config needed.

---

## Before you push: add your public assets

Copy these files into the `/public` folder:

| File | Used by |
|------|---------|
| `headshot.png` | Bento grid header avatar |
| `summer-logo.png` | Navigation + Footer logo |
| `favicon-s.png` | Browser tab favicon |
| `Summer-Chang-Resume.pdf` | Nav resume button |

---

## File map

```
website-03/
├── app/
│   ├── layout.tsx              ← fonts (Poppins + Crimson Text), metadata
│   ├── globals.css             ← brand tokens: cream bg, hot pink #E91E8C
│   ├── page.tsx                ← HOME: S1 hero+floating cards → S2 bento → S3 horizontal scroll → contact
│   ├── more/page.tsx           ← all non-featured projects grid
│   └── projects/[slug]/
│       └── page.tsx            ← individual case study pages
├── components/
│   ├── navigation.tsx          ← mobile-responsive nav with logo
│   ├── footer.tsx              ← footer with social icons
│   ├── project-card.tsx        ← card used on /more page
│   ├── project-sections.tsx    ← section renderer for case studies
│   └── ui/
│       └── badge.tsx           ← shadcn badge (used by project-card)
├── lib/
│   ├── projects-v2.ts          ← ALL project data (edit content here)
│   ├── types.ts                ← TypeScript types for projects + sections
│   └── utils.ts                ← cn() helper
├── public/                     ← drop your assets here (see above)
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Scroll interaction map (page.tsx)

| Scroll zone | What happens |
|-------------|-------------|
| 0 → HERO_H×0.35 | Hero text fades + rises |
| 0 → HERO_H×0.65 | Floating cards fly from viewport edges → bento grid centers |
| sp > 0.25 | Bento grid section fades in |
| sp > 0.85 | Floating cards fade out, bento cards snap in (seamless handoff) |
| Showcase zone | Horizontal translateX drives 6 full-screen project cards |
| Contact zone | Card expands from 260×360 pill → full viewport |

---

## To update project content

All case study copy lives in `lib/projects-v2.ts`. Each project is one object in the `projects` array. The `featured: true` flag controls which 6 appear in the home page bento + showcase.
