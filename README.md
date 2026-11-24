# The Skeptic — A Skeptic's Field Guide to Science and Skepticism

**The Skeptic** is a book manuscript about how we know what we know — paired with an interactive web map that visualizes the book's structure, topic dependencies, writing progress, and the specific creationist-science / "popularly true" debates each chapter must answer. The book walks through epistemology first, then works its way up through Earth science, biology and medicine, cosmology, quantum physics and energy, and finally mind, society, and the knowledge system itself — always separating what is settled from what is genuinely open, and always meeting the strongest counter-argument head-on.

The repository has two working components plus the original outline:

```
TheSkeptic/
├── README.md                          ← you are here
├── the-skeptic-book-blueprint.html    ← original book outline (the source everything else is built from)
├── the-skeptic-book-blueprint.pdf     ← printed copy of the same outline
├── manuscript/                        ← the book itself
│   ├── BRIEF.md                       ← the brief: voice, structure, rules, what "done" means
│   ├── check.py                       ← tag-balance checker (ad-hoc, no CLI args)
│   ├── specs/                         ← machine-checkable specs
│   │   ├── spec_a.txt                 ← structural / format rules
│   │   └── spec_b.txt                 ← content / argumentation rules
│   ├── chapters/                      ← active working files (prologue, ch1, ch5)
│   └── _archive/                      ← superseded early drafts
└── Map/                               ← interactive web map (static, no build step)
    ├── index.html                     ← map entry point (progress + structure, from data.js)
    ├── map.html                       ← scientific dependency DAG (Mermaid, drag/zoom) — lowercase "map.html"
    ├── Map.html                       ← book outline tree view (parts → chapters) — uppercase "Map.html", a different file
    ├── data.js                        ← single source of truth for all Map views
    ├── debates.js                     ← debate topic data (mainstream vs. creationist, rebuttals, verdicts)
    ├── debate.html                    ← per-topic debate view, rendered from debates.js
    ├── progress.html                  ← reading/writing progress report
    ├── radiometric-dating.md          ← worked example: Chapter 5 research notes
    └── test-render.js                 ← render test harness
```

---

## Manuscript (`manuscript/`)

### How to read the book

Active chapters are self-contained HTML (or Markdown for Chapter 5) files in `manuscript/chapters/`. Currently three active working files are in place:

```
manuscript/chapters/00-prologue.html   "The Bone That Shouldn't Last?"
manuscript/chapters/01-chapter1.html   "Seeing Is Not the Same as Knowing"
manuscript/chapters/05-chapter5.md     "The Clock in the Rock" — Markdown + research notes
```

Open any of them directly in a browser — no build step, no server. Older or superseded drafts live in `manuscript/_archive/` (7 files: `prologue.html`, `chapter1.html`, `chapter2.html`, `02-chapter2.html`, `03-chapter3.html`, `chapter4.html`, `part1.html`). Active working files stay in `chapters/`; when a chapter is rewritten or replaced, the prior version moves to `_archive/`.

### `BRIEF.md` — the rules of engagement

`BRIEF.md` is the governing brief for the whole book. Before writing or revising any chapter, read it. It defines:

- **Voice and stance** — first-person field guide, not textbook; skeptical in method, not in conclusions.
- **What counts as evidence** — primary sources, data, and citations over assertion; the "eye test" fallacy explicitly named and policed.
- **Structure** — each chapter opens with the "popularly true" rhetorical move it must answer, develops the mainstream position, presents the strongest counter-argument in good faith, then gives the book's verdict.
- **Definition of "done"** — a chapter is not done until it satisfies both specs in `specs/`.

### `specs/` — the quality gate

Two machine-checkable specifications that a chapter must pass:

| Spec | What it checks |
|------|----------------|
| `specs/spec_a.txt` | Structural and format rules — required sections, heading hierarchy, citation format, length bands, file naming |
| `specs/spec_b.txt` | Content and argumentation rules — that the "popularly true" claim is stated, that the counter-argument is presented with named sources, that a verdict is reached, that open questions are not glossed over |

### `check.py` — the tag-balance checker

`check.py` is a small ad-hoc HTML tag-balance checker (13 lines). It opens a chapter file and confirms that paired tags are balanced. It takes **no command-line arguments** — the target path is hardcoded in the script (currently pointing at `/tmp/tsk/chapter4.html`) — and it is a quick structural sanity check, not a full spec runner over `specs/`:

```bash
cd manuscript
python3 check.py
```



### `Map/data.js` — where every chapter stands

The single live source of truth for manuscript progress is `Map/data.js`. For each chapter it records the current state plus the chapter/topic data that every Map view renders from. Update `data.js` whenever a chapter changes state — it is the fastest way to keep the whole Map (and any progress view) accurate.

### `_archive/` — superseded drafts

`manuscript/_archive/` holds earlier drafts that have been replaced by the current files in `chapters/`. It is not part of the active workflow — treat it as a reference for what was tried and discarded.

| Archived file | Notes |
|---------------|-------|
| `prologue.html` | early prologue draft (now `chapters/00-prologue.html`) |
| `chapter1.html` | early Chapter 1 draft (now `chapters/01-chapter1.html`) |
| `chapter2.html` / `02-chapter2.html` | early Chapter 2 drafts (not currently in `chapters/`) |
| `03-chapter3.html` | early Chapter 3 draft (not currently in `chapters/`) |
| `chapter4.html` | early Chapter 4 draft (not currently in `chapters/`) |
| `part1.html` | front matter + Case File 1 |

---

## Map (`Map/`)

The Map is a set of static HTML/JS pages that visualize the book without requiring any build tool. Open `Map/index.html` in a browser to start. All pages read their data from `data.js` and `debates.js`, so the views stay consistent.

### Views

| File | What it shows |
|------|---------------|
| `Map/index.html` | Entry point; links to the views below |
| `Map/map.html` | **Scientific dependency DAG** — each topic as a node, edges show which chapters depend on which prior concepts (Mermaid, drag/zoom). Lets you see at a glance why epistemology comes before cosmology. |
| `Map/Map.html` | **Outline tree** — the book's parts → chapters structure (uppercase `Map.html`, a different file from `map.html`). |
| `Map/debate.html` | **Per-topic debate view** — for any topic in `debates.js`, renders the mainstream position, the strongest counter-argument, the rebuttal, and the book's verdict. |
| `Map/progress.html` | **Progress report** — reads `data.js` chapter states and renders a per-chapter progress table. |

### Data files

- **`Map/data.js`** — the canonical list of chapters, topics, and chapter/topic state. This is the single source of truth; all Map views import it, and it doubles as the manuscript's live progress record. When a chapter's state changes, update `data.js` so the Map stays accurate.
- **`Map/debates.js`** — structured debate data: for each topic, the "popularly true" claim, the mainstream case, the strongest counter-argument with its named sources, the rebuttal, and the verdict. `debate.html` renders this; `radiometric-dating.md` is a worked example of what a complete debate entry looks like.
- **`Map/radiometric-dating.md`** — Chapter 5 ("The Clock in the Rock") research notes: the radiometric dating methods the chapter will cover, their assumptions, the strongest creationist counter-arguments (e.g. U–Pb discordance, K–Ar reset, decay-constant measurements), and the rebuttal strategy.
- **`Map/test-render.js`** — a small Node/browser harness that loads `data.js` and `debates.js` and asserts the render functions produce expected DOM, used to catch data-shape drift. Run with:

```bash
node Map/test-render.js
```

### Working on the Map

1. Edit `data.js` or `debates.js` — these are the only files that need changing to update content.
2. Reload the relevant view in the browser.
3. Run `node Map/test-render.js` to confirm the render harness still passes.

---

## The blueprint

`the-skeptic-book-blueprint.html` is the original full-book outline: every chapter's working title, its "popularly true" rhetorical move, and the dependency order. It is the source of truth for *what* the book contains; `manuscript/BRIEF.md` and `manuscript/specs/` define *how* it must be written. If a chapter's scope is ever in question, the blueprint is the reference.

## Quick start

```bash
# Open the book (no server needed)
xdg-open manuscript/chapters/00-prologue.html

# Open the map
xdg-open Map/index.html

# Run the manuscript spec checks
cd manuscript && python3 check.py chapters/

# Run the map render harness
node Map/test-render.js

# See where every chapter stands (single source of truth)
cat Map/data.js
```

## Adding a new chapter

1. Create the file in `manuscript/chapters/` following the naming convention (`NN-chapterN.html` or `.md`).
2. Write it against `BRIEF.md` and `specs/spec_a.txt` + `specs/spec_b.txt`.
3. Run `python3 check.py chapters/NN-chapterN.html` and clear every failing rule.
4. Update `Map/data.js` with the chapter's state.
5. If the chapter introduces a debate topic, add it to `Map/debates.js` and verify `node Map/test-render.js` still passes.

