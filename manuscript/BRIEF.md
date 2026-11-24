# THE SKEPTIC - Manuscript Completion Brief (background writer)

Mission: finish the whole book. Every remaining chapter written in full (no placeholders),
verified, and assembled into one complete manuscript document. You are done only when
STATUS.md says COMPLETE. Do not stop at the end of any part; continue until the epilogue
and assembly are done.

## Files
- Source of truth for structure: ../the-skeptic-book-blueprint.html
  Six parts, Case Files 1-30, plus Prologue and Epilogue. Read it fully before writing.
  Chapter titles, part assignments, and per-chapter guidance all come from it.
- Canonical style exemplar: chapter4.html (Case File 4, done).
  Copy its entire <head> (CSS + meta) VERBATIM into every new chapter document.
- Front matter + Case File 1: part1.html (done - never modify or overwrite).
- Chapter specs: specs/spec_a.txt and specs/spec_b.txt (extra guidance for chapters 4-26).
- Checker: check.py (tag-balance checker; it hardcodes chapter4.html - extend it to
  accept a file path as argv[1], then use it on every chapter you write).

## Already done - do NOT rewrite or overwrite
- part1.html (front matter + Case File 1 "The Case for a Case File")
- chapter4.html (Case File 4 "Flat Here, Curved There?")

## What to write, in this order
1. Prologue - "The Bone That Shouldn't Last?" (title per blueprint)
2. Case File 2, Case File 3 (titles per Part I of the blueprint)
3. Case Files 5-30 (blueprint order; specs cover chapters 4-26 in detail)
4. Epilogue - "Living Without a Final Answer" (title per blueprint)

## Chapter template (mirror chapter4.html exactly)
- Standalone document: <!doctype html><html><head> (copied verbatim from chapter4.html,
  only the <title> text changes) </head><body><main> ... </main></body></html>
- Inside <main>, one <article class="chapter"> containing:
  * <span class="casefile">Case File N</span>  (Prologue/Epilogue: no casefile span,
    put the word in the eyebrow instead, e.g. "Prologue")
  * <div class="eyebrow">Part label</div>
  * <h2>Chapter title</h2> immediately followed by <div class="rule"></div>
  * <p class="lead">opening lead paragraph</p>
  * Sections: <h3> N.x - Section title </h3> each followed by <div class="rule"></div>,
    then <p> body text. Number sections from the chapter number (e.g. 7.1, 7.2 ...).
  * Evidence ledger: <div class="table-wrap"><table class="ledger"> with <thead> and
    <tbody>. Status cells use <span class="tag pass|fail|mod|unk|inf|dis">
    (pass=confirms, fail=contradicts, mod=modified, unk=unknown, inf=inferred,
    dis=disputed). Every evidence claim in the chapter should appear in the ledger.
  * Reader exercises: <div class="card"><p class="card-lead">... where the spec calls
    for one. Two-column layout: <div class="grid2">. Warnings: <div class="callout warn">.
  * Footnotes: <p class="footnote">.
  * Close with <h3> N.x - Verdict </h3>, <div class="rule"></div>, then
    <div class="verdict"> with the honest verdict plus a short list of open questions.
- Heading levels: <h1> is reserved for book level (cover / part dividers) and NEVER
  appears inside a chapter. Chapters use <h2>; sections use <h3>.
- Length: 3000-4500 body words per case file (chapter4 = 3,210). Prologue 2000+.
  Epilogue 2500+.

## Voice and method (the book's identity)
- Fair skeptic: state the opposing claim in its strongest, most charitable form
  ("the honest version") BEFORE examining evidence.
- For each piece of evidence: prediction -> method -> sources of error -> what it can
  and cannot establish.
- Never assume the outcome in advance; every chapter ends with Verdict + open questions.
- Reader-accessible observation exercises where the spec calls for them.
- No ad hominem, no smirking at the opponent; they deserve serious treatment.
- No placeholder text anywhere: no "TBD", "TODO", "to follow", lorem ipsum, or
  HTML comments promising content.

## Filenames
- chapters/00-prologue.html
- chapters/02-<slug>.html, chapters/03-<slug>.html, chapters/05-<slug>.html,
  ... chapters/30-<slug>.html (slugs lowercase-hyphen, 3-5 words)
- (Chapter 1 lives in part1.html; chapter 4 in chapter4.html - leave both alone.)

## Verification (mandatory per chapter, BEFORE starting the next one)
- python3 check.py chapters/NN-slug.html  -> every tag OK (extend check.py's tag list
  to: h1 h2 h3 h4 p div article main section table thead tbody span)
- Word count: strip tags and count; must be within the length band above.
- Grep for placeholder words; must be zero.
If a check fails, fix the chapter in place, then move on.

## Assembly (after ALL chapters verify)
Create the-skeptic-manuscript.html in the manuscript/ root - one complete book document
using the same CSS:
1. Cover: <h1>The Skeptic</h1> + subtitle + rule
2. Front matter body from part1.html (About this book / How to read / Table of
   contents). The table of contents MUST list every part and all 30 case files plus
   prologue and epilogue with correct titles.
3. Prologue
4. For each of Parts I-VI: an <h1> part divider (eyebrow + part title + the part's
   intro line from the blueprint) followed by that part's chapters IN ORDER
5. Epilogue, then a short colophon (built locally, date, no cloud services).
Reuse each chapter's <article class="chapter"> block verbatim.
Verify the assembly with the same tag-balance check.

## Status reporting
- After every chapter, update STATUS.md (manuscript/ root): completed list with word
  counts and check results, and the next chapter.
- When finished, STATUS.md's first line must read:
  COMPLETE: 28 chapters + assembly, <total words> words, all checks pass.

## Constraints
- No git commits. No deletes. No writes outside this project directory.
- Do not start ComfyUI, Wan, Hi3D, or any other heavy/GPU service - the GPU belongs
  to ComfyUI (currently idle) and to nothing else.
- If a chapter title or part assignment is in doubt, the blueprint wins.
- You may write and re-read files as much as needed; prefer steady progress over
  perfection. A verified, complete, in-voice chapter beats an abandoned masterpiece.
