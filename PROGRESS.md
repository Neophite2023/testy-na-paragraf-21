# PROGRESS.md

## 17. 6. 2026 — GitHub Pages deployment + vizuálny redesign

### Done
- **GitHub repozitár**: inicializovaný git, nastavený remote na `https://github.com/Neophite2023/testy-na-paragraf-21`
- **Commit a push**: 3 commity — inicializácia projektu, GitHub Pages workflow, aktualizácia akcií na Node 24
- **GitHub Pages**: vytvorený `.github/workflows/deploy.yml` — automatický build a deploy pri pushi do master
- **Appka live**: dostupná na https://Neophite2023.github.io/testy-na-paragraf-21/
- **Vizuálny redesign**:
  - Prvý pokus: moderný farebný vzhľad (gradient header, indigová primárna, Inter font) — user povedal že príliš farebné
  - Druhý pokus: decentný tmavý header (#2a2a2a), jednotné sivé tóny, bez gradientov, system font stack
  - Stlmené farby pre správne/chybné odpovede
  - Všetky CSS prepísané, vyhodený Google Fonts (rýchlejšie načítanie)
- **vite.config.ts**: pridaný `base: '/testy-na-paragraf-21/'` pre GitHub Pages

### Project state
- 266/266 otázok (A:76, B:99, C:91)
- React + Vite + TypeScript
- Funkcie: výber blokov, náhodné poradie, zvýraznenie odpovedí, skóre, prehľad výsledkov

### Relevantné súbory
- `https://github.com/Neophite2023/testy-na-paragraf-21` — GitHub repozitár
- `https://Neophite2023.github.io/testy-na-paragraf-21/` — live app
- `.github/workflows/deploy.yml` — GitHub Actions workflow
- `src/App.css`, `src/index.css` — aktuálny dizajn
- `vite.config.ts` — base path nastavený
