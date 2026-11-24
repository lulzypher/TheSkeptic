/* Map/data.js — single source of truth for the Map views.
 * index.html / map.html / progress.html all render from window.MANUSCRIPT_DATA.
 *
 * Schema (consumed by all three views):
 *   topics:         [{ id, title, desc, section, branch, status, files?, note?, debate? }]
 *   debate:         optional callout — a creationist-science / "popularly true" point the chapter must answer
 *   structure:      [{ id, title, note }]
 *   branches:       [{ id, title, status, why, notes }]
 *   statusTaxonomy: [[label, desc], ...]
 *   dependencies:   [{ topic: id, on: id }] — topic ids only, for the map.html DAG
 *
 * status: done = written (active or archived complete draft)
 *         draft = archived draft, needs revision
 *         planned = research notes or not started
 * Files are relative to Map/. */
window.MANUSCRIPT_DATA = {
  title: "The Skeptic",
  subtitle: "A Skeptic's Field Guide to Science and Skepticism",
  updated: "2026-11-21",
  source: "../the-skeptic-book-blueprint.html",
  brief: "../manuscript/BRIEF.md",

  statusTaxonomy: [
    ["Done",    "Written — active in manuscript/ or archived complete draft"],
    ["Draft",   "Archived draft in manuscript/_archive/, needs revision"],
    ["Planned", "Research notes or not started"]
  ],

  structure: [
    { id: "0", title: "Prologue",                                  note: "Framing the book — active working file, earlier draft in _archive/" },
    { id: "1", title: "How We Decide What We Know",                note: "Epistemology foundation: the lens for every later chapter" },
    { id: "2", title: "The World We Stand On",                     note: "Earth science: geology, deep time, human antiquity" },
    { id: "3", title: "Life, Health, and Human Origins",           note: "Biology, medicine, genetics, epidemiology" },
    { id: "4", title: "The Universe and Its Clocks",               note: "Cosmology, relativity, atomic physics" },
    { id: "5", title: "The Smallest Scales and the Energy Question", note: "Quantum, nuclear, thermodynamics, materials" },
    { id: "6", title: "Mind, Society, and the Knowledge System",   note: "Consciousness, free will, institutions, AI, final synthesis" },
    { id: "7", title: "Epilogue",                                  note: "Capstone — living without a final answer" }
  ],

  branches: [
    { id: "b1", title: "What you can see", status: "draft",
      why: "Vision is the primary sense — start with how much of 'seeing' is inference.",
      notes: "Ch.1, Ch.27, Ch.28" },
    { id: "b2", title: "Evidence beyond personal experience", status: "draft",
      why: "Most of what we should trust cannot be personally tested.",
      notes: "Ch.5, Ch.18, Ch.19, Ch.32" },
    { id: "b3", title: "Trust in experts and institutions", status: "planned",
      why: "Institutional trust is a distinct failure mode from evidence quality.",
      notes: "Ch.3, Ch.29, Ch.30" },
    { id: "b4", title: "The science itself", status: "planned",
      why: "What the actual claims require — the substance behind the skepticism.",
      notes: "Ch.4, Ch.6, Ch.8, Ch.9, Ch.10, Ch.11, Ch.12, Ch.13, Ch.14, Ch.15, Ch.17, Ch.20, Ch.21, Ch.22, Ch.23, Ch.24, Ch.25, Ch.26, Ch.31" }
  ],

  chapters: [
    { type: "prologue", num: 0, title: "The Bone That Shouldn't Last?", status: "draft", files: ["../manuscript/chapters/00-prologue.html"], note: "Active working file; earlier draft at _archive/prologue.html" },
    { type: "part", num: 1, title: "How We Decide What We Know" },
    { type: "chapter", num: 1, title: "Seeing Is Not the Same as Knowing", status: "draft", files: ["../manuscript/chapters/01-chapter1.html"], note: "First full chapter; old draft at _archive/chapter1.html" },
    { type: "chapter", num: 2, title: "Evidence Beyond Personal Reach", status: "draft", files: ["../manuscript/_archive/02-chapter2.html", "../manuscript/_archive/chapter2.html"] },
    { type: "chapter", num: 3, title: "Models, Uncertainty, and What Would Change Our Minds?", status: "draft", files: ["../manuscript/_archive/03-chapter3.html"] },
    { type: "part", num: 2, title: "The World We Stand On" },
    { type: "chapter", num: 4, title: "Flat Here, Curved There? Earth's Shape, Scale, and Geometry", major: true, status: "draft", files: ["../manuscript/_archive/chapter4.html"], note: "Major feature chapter" },
    { type: "chapter", num: 5, title: "The Clock in the Rock", status: "planned", files: ["radiometric-dating.md"], note: "Research notes live in Map/radiometric-dating.md" },
    { type: "chapter", num: 6, title: "The Fossil, the Tissue, and the Timeline", status: "planned" },
    { type: "chapter", num: 7, title: "Catastrophe or Slow Change?", status: "planned" },
    { type: "chapter", num: 8, title: "Who Came First?", status: "planned" },
    { type: "chapter", num: 9, title: "How Old Is Civilization?", status: "planned" },
    { type: "part", num: 3, title: "Life, Health, and Human Origins" },
    { type: "chapter", num: 10, title: "What Does It Mean to Isolate a Virus?", status: "planned" },
    { type: "chapter", num: 11, title: "Where Did Life Begin?", status: "planned" },
    { type: "chapter", num: 12, title: "Evolution: Evidence, Mechanisms, and Open Questions", status: "planned" },
    { type: "chapter", num: 13, title: "Genes, Heredity, and Human Difference", status: "planned" },
    { type: "chapter", num: 14, title: "When Does a Test Become a Diagnosis?", status: "planned" },
    { type: "chapter", num: 15, title: "Complex Causes: Epidemiology, Nutrition, and Climate", status: "planned" },
    { type: "chapter", num: 16, title: "What Counts as a Species, a Virus, or a Disease?", status: "planned" },
    { type: "part", num: 4, title: "The Universe and Its Clocks" },
    { type: "chapter", num: 17, title: "How Far Away Is Far Away?", status: "planned" },
    { type: "chapter", num: 18, title: "Does Light Have a One-Way Speed?", status: "planned" },
    { type: "chapter", num: 19, title: "A Universe with a Beginning?", status: "planned" },
    { type: "chapter", num: 20, title: "Dark Matter, Dark Energy, and What We Cannot See", status: "planned" },
    { type: "chapter", num: 21, title: "Life Beyond Earth?", status: "planned" },
    { type: "part", num: 5, title: "The Smallest Scales and the Energy Question" },
    { type: "chapter", num: 22, title: "The Atom as a Clock", status: "planned" },
    { type: "chapter", num: 23, title: "What Is Quantum Mechanics Saying About Reality?", status: "planned" },
    { type: "chapter", num: 24, title: "Nuclear Power: Promise, Risk, and Unknowns", status: "planned" },
    { type: "chapter", num: 25, title: "Energy, Entropy, and the Limits of Efficiency", status: "planned" },
    { type: "chapter", num: 26, title: "Materials That Could Change the World", status: "planned" },
    { type: "part", num: 6, title: "Mind, Society, and the Knowledge System" },
    { type: "chapter", num: 27, title: "What Is Consciousness?", status: "planned" },
    { type: "chapter", num: 28, title: "Do We Choose?", status: "planned" },
    { type: "chapter", num: 29, title: "Can We Trust the Knowledge System?", status: "planned" },
    { type: "chapter", num: 30, title: "Psychology, Economics, and the Models We Live By", status: "planned" },
    { type: "chapter", num: 31, title: "Artificial Intelligence and the Meaning of Intelligence", status: "planned" },
    { type: "chapter", num: 32, title: "Can We Know the Whole Story?", status: "planned" },
    { type: "epilogue", num: 33, title: "Living Without a Final Answer", status: "planned" }
  ],
  topics: [
    { id: "ch5", title: "Radiometric dating", desc: "Ch. 5 — The Clock in the Rock", section: "2", branch: "b2", status: "planned", files: ["radiometric-dating.md"], debate: "Creationist geology rejects radiometric ages in favor of a few-thousand-year timeline; the chapter tests the assumptions behind each clock." },
    { id: "ch4", title: "Geology & plate tectonics", desc: "Ch. 4 — Earth's shape, scale, geometry; ch. 7 — catastrophe or slow change", section: "2", branch: "b4", status: "draft" },
    { id: "ch6", title: "Fossils & deep time", desc: "Ch. 6 — The Fossil, the Tissue, and the Timeline", section: "2", branch: "b4", status: "planned" },
    { id: "ch8", title: "Human antiquity", desc: "Ch. 8 — Who Came First?", section: "2", branch: "b4", status: "planned" },
    { id: "ch9", title: "How old is civilization", desc: "Ch. 9 — How Old Is Civilization?", section: "2", branch: "b4", status: "planned", debate: "Creationist timelines compress written history to a few thousand years; the chapter weighs archaeological and stratigraphic evidence against that 'popularly true' claim." },
    { id: "ch10", title: "Viral isolation & diagnostics", desc: "Ch. 10 — What Does It Mean to Isolate a Virus?", section: "3", branch: "b4", status: "planned" },
    { id: "ch11", title: "Origin of life & abiogenesis", desc: "Ch. 11 — Where Did Life Begin?", section: "3", branch: "b4", status: "planned", debate: "'Where did life begin?' is a live creation-science debate point; the chapter separates established chemistry from open questions." },
    { id: "ch12", title: "Evolution & speciation", desc: "Ch. 12 — Evolution; ch. 16 — Species, viruses, diseases", section: "3", branch: "b4", status: "planned", debate: "Creation vs. evolution is the book's signature 'popularly true' flashpoint; the chapter separates the settled record of common descent from live mechanistic questions." },
    { id: "ch13", title: "Human genetics & race", desc: "Ch. 13 — Genes, Heredity, and Human Difference", section: "3", branch: "b4", status: "planned" },
    { id: "ch14", title: "From test to diagnosis", desc: "Ch. 14 — When Does a Test Become a Diagnosis?", section: "3", branch: "b4", status: "planned" },
    { id: "ch15", title: "Epidemiology & nutrition", desc: "Ch. 15 — Complex Causes: Epidemiology, Nutrition, and Climate", section: "3", branch: "b4", status: "planned" },
    { id: "ch17", title: "Cosmological distances & CMB", desc: "Ch. 17 — How Far Away Is Far Away?", section: "4", branch: "b4", status: "planned" },
    { id: "ch18", title: "Speed of light & synchronization", desc: "Ch. 18 — Does Light Have a One-Way Speed?", section: "4", branch: "b2", status: "planned" },
    { id: "ch19", title: "Big Bang & cosmic inflation", desc: "Ch. 19 — A Universe with a Beginning?", section: "4", branch: "b2", status: "planned", debate: "A universe with a beginning collides with young-Earth chronologies; the chapter weighs the independent age estimates (expansion rate, CMB, stellar ages) against the flat-Earth / young-Earth alternative." },
    { id: "ch20", title: "Dark matter & dark energy", desc: "Ch. 20 — Dark Matter, Dark Energy, and What We Cannot See", section: "4", branch: "b4", status: "planned" },
    { id: "ch21", title: "Exoplanets & astrobiology", desc: "Ch. 21 — Life Beyond Earth?", section: "4", branch: "b4", status: "planned" },
    { id: "ch22", title: "Atomic clocks & relativity", desc: "Ch. 22 — The Atom as a Clock", section: "5", branch: "b4", status: "planned" },
    { id: "ch23", title: "Quantum mechanics & reality", desc: "Ch. 23 — What Is Quantum Mechanics Saying About Reality?", section: "5", branch: "b4", status: "planned" },
    { id: "ch24", title: "Nuclear power & radioactive materials", desc: "Ch. 24 — Nuclear Power: Promise, Risk, and Unknowns", section: "5", branch: "b4", status: "planned" },
    { id: "ch25", title: "Thermodynamics & energy", desc: "Ch. 25 — Energy, Entropy, and the Limits of Efficiency", section: "5", branch: "b4", status: "planned" },
    { id: "ch26", title: "Advanced materials", desc: "Ch. 26 — Materials That Could Change the World", section: "5", branch: "b4", status: "planned" },
    { id: "ch27", title: "Consciousness", desc: "Ch. 27 — What Is Consciousness?", section: "6", branch: "b1", status: "planned" },
    { id: "ch28", title: "Free will", desc: "Ch. 28 — Do We Choose?", section: "6", branch: "b1", status: "planned" },
    { id: "ch29", title: "Can we trust the knowledge system", desc: "Ch. 29 — Can We Trust the Knowledge System?", section: "6", branch: "b3", status: "planned", debate: "'Science is just consensus / institutions' is a 'popularly true' rhetorical move; the chapter separates institutional failure modes from evidence quality." },
    { id: "ch1", title: "Scientific method & epistemology", desc: "Ch. 1–2 — Seeing Is Not the Same as Knowing; Evidence Beyond Personal Reach", section: "1", branch: "b1", status: "draft", debate: "The 'eye test' — 'I saw it, so it's true' — is the core 'popularly true' rhetorical move; the chapter separates where observation is reliable from where it becomes inference." },
    { id: "ch3", title: "Models, uncertainty & what would change our minds", desc: "Ch. 3 — Models, Uncertainty, and What Would Change Our Minds?", section: "1", branch: "b3", status: "draft", files: ["../manuscript/_archive/03-chapter3.html"] },
    { id: "ch30", title: "Behavior & economics models", desc: "Ch. 30 — Psychology, Economics, and the Models We Live By", section: "6", branch: "b3", status: "planned" },
    { id: "ch31", title: "Artificial intelligence", desc: "Ch. 31 — Artificial Intelligence and the Meaning of Intelligence", section: "6", branch: "b4", status: "planned" },
    { id: "ch32", title: "Limits of knowledge", desc: "Ch. 32 — Can We Know the Whole Story?", section: "6", branch: "b2", status: "planned" }
  ],
  dependencies: [
    { topic: "ch5", on: "ch4" },
    { topic: "ch4", on: "ch6" },
    { topic: "ch6", on: "ch8" },
    { topic: "ch4", on: "ch8" },
    { topic: "ch5", on: "ch8" },
    { topic: "ch19", on: "ch20" },
    { topic: "ch27", on: "ch28" },
    { topic: "ch3", on: "ch1" },
    { topic: "ch9", on: "ch8" },
    { topic: "ch14", on: "ch10" }
  ]
};

