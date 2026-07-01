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

## 23. 6. 2026 — Oprava chýbajúcich odpovedí

### Hotovo
- Opravená otázka B/19, v ktorej bola odpoveď `a) 30` omylom súčasťou zadania a nedala sa vybrať.
- Odpovede otázky B/19 sú vyčistené na hodnoty `30`, `32`, `34`, `36`.
- Kontrolou dát boli nájdené a opravené aj chýbajúce možnosti v otázkach B/15, C/55 a C/79.
- Overené, že každá správna odpoveď uvedená v poli `correct` existuje medzi možnosťami otázky.
- Produkčný build `npm run build` prešiel úspešne.
- Oprava bola odoslaná na GitHub do vetvy `master` v commite `a5f6adb`.

### Postup pri ďalších opravách
1. Nájsť príčinu problému a skontrolovať súvisiace záznamy, či sa chyba neopakuje.
2. Upraviť iba relevantné súbory; nesúvisiace a pomocné súbory nezahŕňať do commitu.
3. Spustiť primerané overenie, minimálne build pri zmenách aplikácie alebo dát.
4. Skontrolovať výsledný diff a pracovný strom.
5. Vytvoriť samostatný commit s výstižným slovenským názvom.
6. Po úspešnom overení automaticky odoslať commit na `origin/master`.

## 29. 6. 2026 — Opravy OCR textov otázok

### Hotovo
- Vyčistené zjavné OCR chyby v `src/data/questions.json` naprieč otázkami a odpoveďami.
- Opravené opakované zámeny ako `móže` -> `môže`, `napátie` -> `napätie`, `častť` -> `časť`, české znaky `ů/ř` a prilepené útržky strán.
- Cielene opravené otázky:
  - B/66: beznapäťový stav a skratovacia súprava.
  - B/76: dovolenie na začatie práce podľa príkazu B vopred.
  - B/81: opätovný vstup pracovníkov na pracovisko.
  - C/12: sieť na obrázku, správna odpoveď `TN-C-S`.
- Pri dátových zmenách bol spustený produkčný build `npm.cmd run build`.
- Zmeny boli odoslané na GitHub do vetvy `master`.

### Commity
- `ee36944` — Fix OCR text in questions
- `4d7506e` — Fix block B question 81 text
- `0afd53a` — Fix block B question 66 text
- `4632d07` — Fix block C question 12 text
- `4f31adb` — Fix block B question 76 text

### Poznámka
- V tomto projekte sa majú po dokončení a overení úprav automaticky vytvoriť commit a push na `origin/master`, ak používateľ nepovie inak.

## 30. 6. 2026 — Doplnenie presných textov a obrázkov k otázkam

### Hotovo
- Opravené texty podľa PDF/OCR a dodaných screenshotov v `src/data/questions.json`:
  - A/15: odstránený OCR šum `prúdu 1` a upravené znenie otázky.
  - B/83: doplnený celý text otázky o príkaze B a odstránenej skratovacej súprave.
  - C/1: odstránený poškodený symbol `ň(___)` z textu otázky.
  - C/10: odpoveď D opravená na `Sieť TT`.
- Pridaná všeobecná podpora obrázkov pri otázkach:
  - nové voliteľné polia `image` a `imageAlt` v type `Question`,
  - render obrázka v `QuestionCard`,
  - štýly `.question-image-wrap` a `.question-image` v `src/App.css`.
- Z PDF boli vyrezané a pridané obrázky:
  - `public/question-images/c12-ac-tn-c-s.png` pre otázku C/12,
  - `public/question-images/c13-dc-tn-c.png` pre otázku C/13.
- Otázka C/13 bola vyčistená od OCR útržku `1 o VEŽIVÉ` a napojená na obrázok.
- Overenie:
  - validácia `questions.json` cez `JSON.parse`,
  - produkčný build `npm.cmd run build` prešiel.
- Zmeny boli odoslané na GitHub do vetvy `master`.
- Pomocné lokálne súbory `tmp_check.py`, `tmp_check2.py`, `tmp_check3.py` zostali mimo commitov.

### Commity
- `9ab15e8` — Fix question text OCR errors
- `36d744c` — Add images for network questions

## 1. 7. 2026 — Ďalšie opravy otázok a obrázky pri odpovediach

### Hotovo
- Opravená otázka C/87:
  - rozdelené poškodené odpovede `Minimálne 1 mm2 1,5 mm2 2,5 mm2 4 mm2`,
  - správna odpoveď zostala `D`,
  - možnosti sú teraz `1 mm2`, `1,5 mm2`, `2,5 mm2`, `4 mm2`.
- Opravené zobrazovanie obrázkov na GitHub Pages:
  - obrázky otázok sa skladajú cez `import.meta.env.BASE_URL`,
  - tým sa opravilo zobrazovanie otázky C/12 a ďalších obrázkov v `public/question-images`.
- Opravené texty otázok podľa screenshotov a OCR/PDF:
  - A/31: doplnené `privolaný lekár` a rozdelená zlepená veta,
  - B/20: doplnené `(PPN - práca pod napätím)` a opravené zlepenie otázky.
- Pridaná podpora malých obrázkov pri odpovediach:
  - nové voliteľné pole `optionImages` v type `Question`,
  - render obrázka odpovede v `QuestionCard`,
  - štýl `.option-image` v `src/App.css`.
- Otázka C/16 dostala malé obrázky značiek pri odpovediach:
  - `public/question-images/c16-symbol-5003.png`,
  - `public/question-images/c16-symbol-5194.png`,
  - `public/question-images/c16-symbol-5033.png`,
  - `public/question-images/c16-symbol-5001.png`.
- Pri zmenách bol spustený produkčný build `npm.cmd run build`.
- Zmeny boli odoslané na GitHub do vetvy `master`.

### Commity
- `184c9c5` — Fix block C question 87 options
- `669e56f` — Fix question image paths for GitHub Pages
- `d76e1e6` — Fix block A question 31 text
- `fccecdd` — Fix block B question 20 text
- `1a524d4` — Add option images for block C question 16
