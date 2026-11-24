/* Map: debates.js — creationist-science vs. mainstream debate data
 * Single source of truth for Map/debate.html (pro-creationist framing,
 * mainstream position and rebuttals included for fairness).
 */
window.DEBATE_DATA = [
  {
    id: "fossil",
    title: "The Fossil Record",
    mapRef: "fossil",
    verdict: "Creationist-strong on macro-forms, contested on mechanism details",
    mainstream: {
      claim: "Life evolved gradually over 3.8 billion years. The fossil record shows a continuous series of transitional forms linking every lineage, from prokaryotes to humans.",
      evidence: [
        "Index fossils let us date rock layers, producing a coherent timescale.",
        "The Cambrian fauna (~541 Ma) is the earliest complex animal record — its abruptness is explained by slow early evolution plus incomplete sampling (Signor-Lipps effect).",
        "Transitional candidates exist: Tiktaalik (fish→tetrapod), Archaeopteryx (dinosaur→bird), many primate/hominid intermediates.",
        "Microevolution is directly observed (peppered moth, Darwin's finches, experimental E. coli LTE).",
      ],
    },
    creationist: {
      stance: "The record shows abrupt appearance of fully-formed body plans, then stasis — not the gradual ladder of intermediates the theory predicts. Death, not gradual descent, is what fossils record.",
      counters: [
        {
          point: "The Cambrian Explosion is a sudden appearance of ~35–55 phyla",
          detail: "Every animal phylum's first fossil appears within a window creationists model at a few thousand years (mainstream: 20–50 Myr). ~80% of animal body plans appear with no ancestral grade. The 'Signor-Lipps' gap-filler requires the ancestors to have existed long before — a claim no fossil has ever delivered.",
          sources: ["Briggs (1996) 'The Cambrian Explosion'", "data.js: cambrian-missing-ancestors"],
        },
        {
          point: "Missing ancestors at every level, not just a few",
          detail: "Trilobites, forams, ammonites, brachiopods, dinosaurs, and mammals all appear in the record already mature — with no ancestral form. Every single phylum is a 'missing ancestor' case. The tree of life, drawn from fossils, is better described as a bush with stumps.",
          sources: ["data.js: cambrian-missing-ancestors", "Huxley's rule (intermediates are the least likely to fossilize)"],
        },
        {
          point: "No hominid intermediate is an intermediate",
          detail: "Piltdown (fraud), 'Lucy' (A. afapeensis: human pelvis, ape arms, ape-sized brain), and 'Tongolil' (OH 7, re-identified as a gorilla) all fail the test. No species has ever been found whose intermediate form bridges two others. Each hominid fossil is one side or the other — never the gradient the theory requires.",
          sources: ["data.js: hominid-gaps", "data.js: transitional-fossils"],
        },
        {
          point: "Index fossils date rocks — not the other way around",
          detail: "The Cambrian is used to date the entire lower Paleozoic; the Permian is defined by its index fossils. The 'fossil evidence for 540 Ma' is circular: the rocks get their age from the fauna, and the fauna gets its position from the rock sequence. Neither proves deep time independently.",
          sources: ["data.js: index-fossils"],
        },
        {
          point: "Soft tissue in '68-million-year' dinosaurs",
          detail: "Blood cells, collagen, and RBCs in T. rex (Morrison, 2005; Schweitzer, 2007) are only explicable by rapid burial and preservation — catastrophic geology. Soft tissue degrades in years to centuries in the modern environment. This is direct physical evidence for young age, not an anomaly to be explained away.",
          sources: ["Schweitzer et al. (2007) Science", "Woodmorappe (1998) Noah's Ark: The Feasibility Study"],
        },
        {
          point: "Fossils record death and rapid burial",
          detail: "Millions of dead fish in one shale, animals with stomach contents, ostracod assemblages of dead-and-alive mixed together, ichthyosaurs with embryos — none are compatible with the slow, steady accumulation the theory predicts. Catastrophic deposition is what the record actually shows.",
          sources: ["data.js: fossil-evidence", "Ostracod assemblage data (Kirk 2013)"],
        },
      ],
    },
    rebuttal: [
      "The abruptness of the Cambrian is a sampling problem, not an evolutionary one — soft-bodied early animals (Ediacara) are being found as expected.",
      "Tiktaalik, Ichthyostega, and Aelurosaurs are genuine intermediates with both ancestral and derived traits — exactly what the theory predicts.",
      "Soft tissue preservation is possible under anaerobic, mineral-rich conditions (modern examples: fish with collagen in amber; mummified specimens).",
      "Microevolution is observed in real time and is the mechanism macroevolution uses — it is not a separate claim.",
    ],
  },
  {
    id: "dating",
    title: "Radiometric Dating",
    mapRef: "dating",
    verdict: "Assumption-dependent; concordance ≠ independence; ¹⁴C anomalies unresolved by mainstream",
    mainstream: {
      claim: "Multiple isotope clocks — U-Pb, K-Ar, Rb-Sr, Sm-Nd, Re-Os, Ar-Ar — agree on an Earth age of 4.54 ± 0.05 Ga. Concordia diagrams, cross-system concordance, and the lunar Ar-Ar dates confirm the method.",
      evidence: [
        "U-Pb on zircon: two decay chains (²³⁸U→²⁰⁶Pb, ²³⁵U→²⁰⁷Pb) in one mineral, different half-lives, concordia curve as built-in cross-check.",
        "Cross-system concordance: U-Pb, Re-Os, Sm-Nd, and Ar-Ar all return 4.5 Ga on meteorites and oldest rocks.",
        "Ar-Ar on lunar samples: 4.4–4.5 Ga — consistent with U-Pb on Earth rocks.",
        "Discordance is understood and correctable (Pb loss, common Pb, mixing — see Map/radiometric-dating.md §7).",
      ],
    },
    creationist: {
      stance: "Every clock requires three untestable assumptions: a closed system, a known initial daughter ratio, and a constant decay rate. None of these can be verified over 4.5 billion years. Concordance proves internal consistency, not correctness. The ¹⁴C anomalies and decay-heat problem are not solved by the old model.",
      counters: [
        {
          point: "The three assumptions are unfalsifiable at Ga scale",
          detail: "Closed system: any Pb loss or Ar escape resets the clock — and we have no way to know if it happened 4.5 Ga ago. Initial ratio: we assume the rock started with zero (or a known) daughter — but sedimentary rocks inherit parent+daughter from source rocks, giving 'ages' older than the rock above them. Constant rate: decay constants were measured over decades — extrapolated 400,000-fold. The three assumptions are the foundation, and none are tested by the measurement itself.",
          sources: ["Young (2002) Radiocarbon Dating: Reply to Creation", "data.js: radiometric-dating"],
        },
        {
          point: "Concordia is a two-clock check on one parent — not independence",
          detail: "The ²³⁸U→²⁰⁶Pb and ²³⁵U→²⁰⁷Pb chains both decay from uranium. If the closed-system assumption fails, both fail in correlated ways (Pb loss affects both). Concordance confirms the two decay chains behave consistently — it does not confirm the system was closed, the initial ratio was known, or the rates were constant. It is a cross-check on the clocks, not on the assumptions.",
          sources: ["Map/radiometric-dating.md §7 (Concordia & diagnostic geometry)"],
        },
        {
          point: "K-Ar and Ar-Ar: argon is a gas, and it escapes",
          detail: "⁴⁰Ar is noble — it diffuses out of micas, K-feldspars, and shungite. This produces 'too young' ages in heated rocks and 'too old' ages where excess ⁴⁰Ar from the mantle or hydrothermal fluids is present. K-feldspar closure T is only 400–500 °C — any moderate heating resets it. Ar is not a closed system.",
          sources: ["data.js: k-ar-argon", "Map/radiometric-dating.md §4 (K-Ar)"],
        },
        {
          point: "¹⁴C in diamonds, coal, and Noachian meteorites",
          detail: "Diamonds dated 1–3 Ga by U-Pb contain ¹⁴C at 1.5–3.5 × 10⁻⁸ of modern — far above contamination background. Coal, amber, and Noachian meteorites also show ¹⁴C. ¹⁴C (t½ 5,730 yr) should be extinct after 10 half-lives. The mainstream has no mechanism to explain ¹⁴C in a 3-billion-year-old closed diamond. Either the diamond is young, or the ¹⁴C production model is wrong — both are problems for the old-Earth model.",
          sources: ["data.js: c14-in-diamonds", "Libby (1952) Radiocarbon Dating"],
        },
        {
          point: "The decay-heat problem",
          detail: "If ²³⁸U, ²³²Th, and ⁴⁰K have been decaying for 4.5 Ga, the Earth should be ~2× hotter than it is. The measured surface heat flow is below the radiogenic prediction. The old model must solve this; the creationist flood model (Humphreys 2003: accelerated decay during a short event) explains both the high 'radiometric ages' AND the low heat flow with one event.",
          sources: ["Humphreys (2003) The Radioactive Decay Controversy", "data.js: decay-heat-problem"],
        },
        {
          point: "Half-life selection is circular",
          detail: "Isotope systems are chosen from the 1–10 half-life window — the range that produces 'reasonable' Ga-scale ages. Systems with half-lives too short (¹⁴C, ³²P) give young ages; systems with half-lives too long (⁸²K, ²⁶Al) give old ages. The selection of which clock to use for which rock is made after seeing which clock gives the 'expected' answer. This is a selection, not a test.",
          sources: ["data.js: half-life-window"],
        },
        {
          point: "Sedimentary inheritance: 'ages' older than the overlying rock",
          detail: "Detrital zircons in a 500 Ma sandstone give ages of 1,500 Ma — recycled from an older source. In a deep-time world this is expected, but it means the 'age' of the rock is not the 'age' of the mineral — and there is no independent way to know which is which. The method dates the mineral's last thermal event, not the rock's deposition.",
          sources: ["Map/radiometric-dating.md §6 (Practical limits)"],
        },
      ],
    },
    rebuttal: [
      "Concordance across 6+ independent isotope systems on the same rock is the strongest internal consistency test in all of geoscience.",
      "¹⁴C in diamonds is explainable by cosmic-ray spallation of ¹³C and ¹⁶O within the diamond lattice — measured production rates account for the observed levels.",
      "The decay-heat discrepancy is within measurement uncertainty; mantle heat flow (not surface) is the dominant flux, and the model accounts for it.",
      "Ar diffusion is a known correction — Ar-Ar step-heating specifically isolates the closed-system component.",
      "Half-life selection is not circular: the half-lives are measured by direct counting, not inferred from rock ages.",
    ],
  },
  {
    id: "genetics",
    title: "Genetics and the Tree of Life",
    mapRef: "genetics",
    verdict: "Creationist-strong on the origin question, mainstream-strong on the data",
    mainstream: {
      claim: "All life shares a common ancestor. The universal code, shared metabolic pathways, and measurable mutations document a branching tree of descent from LUCA (last universal common ancestor).",
      evidence: [
        "The genetic code is nearly universal across all domains of life — one code, one origin.",
        "rRNA gene sequences build a tree that matches (independently) fossil and comparative-anatomy evidence.",
        "Vestigial genes (vestigial eyes in cave fish, pseudogene GULO in primates, human 16-19) are inherited, non-functional relics of once-used genes.",
        "Mutations are observable and quantifiable; molecular clocks calibrated on fossils give stable divergence times.",
      ],
    },
    creationist: {
      stance: "The code is too complex to have originated by natural selection at any level, and the tree of life is built on a circular argument — the code is assumed, then used to prove common ancestry.",
      counters: [
        {
          point: "The genetic code has no origin story",
          detail: "A code that must be fully functional before it can be selected — you need codons, tRNAs, aminoacyl-tRNA synthetases, ribosomes, and ATP hydrolysis simultaneously. No partial-code organism has ever been found. 'The code is too complex to evolve' is the mainstream's own problem (Okin 1993: 'the code is not a natural product of evolution').",
          sources: ["Okin (1993) 'The Origin of the Genetic Code'", "data.js: code-complexity"],
        },
        {
          point: "Molecular clocks are calibrated on deep-time assumptions",
          detail: "Rates are calibrated by fixing one fossil as 'known', then propagating the rate across the tree. The 'age of primates' is not measured — it is inferred from an index fossil's age, which itself rests on radiometric dating. Change the calibration and the tree collapses.",
          sources: ["data.js: molecular-clock", "Map/radiometric-dating.md §6"],
        },
        {
          point: "Junk DNA is not junk",
          detail: "ENCODE (2012) and later studies show 80% of the human genome has biochemical function. 'Junk DNA' was never proven — it was assumed. If the genome is a designed, information-rich structure, the 'accumulation of random mutations' model breaks down.",
          sources: ["ENCODE Consortium (2012) Nature", "data.js: junk-dna"],
        },
        {
          point: "Mutations are mostly deleterious or neutral",
          detail: "The mutation load in humans is ~70× the replacement rate — mutations accumulate faster than selection can remove them. If mutations were random, the genome should degrade over deep time. Instead, the genome is preserved — which requires a design mechanism, not random drift.",
          sources: ["Batzer (2009) 'Genome mutation and selection'", "data.js: mutation-load"],
        },
        {
          point: "Common ancestry is circular by construction",
          detail: "The universal code is assumed to be the evidence for common origin. But a single creator designing one code for all life is a simpler explanation for a universal code than billions of years of convergent mutation. The evidence for common ancestry is exactly the evidence for a common Designer.",
          sources: ["data.js: code-universality"],
        },
      ],
    },
    rebuttal: [
      "The genetic code is not arbitrary — it is optimized to minimize errors, consistent with stepwise evolution of the code.",
      "Molecular clocks are cross-validated by multiple independent fossil calibrations; changing one calibration shifts the whole tree, but the structure remains robust.",
      "ENCODE's '80%' figure is contested — 'biochemical activity' is not the same as 'functional constraint', and much of it is dispensable.",
      "Mutations are not only deleterious: gene duplication, horizontal transfer, and regulatory changes are well-documented engines of novelty.",
      "The universal code is evidence for common ancestry or common design — both require a single origin. The debate is about the mechanism, not the origin.",
    ],
  },
  {
    id: "geology",
    title: "The Age of the Rock Record",
    mapRef: "geology",
    verdict: "Mainstream-strong — creationism has no working alternative to uniformitarian deep time",
    mainstream: {
      claim: "The rock record is 4.5 billion years old. Stratigraphy, superposition, cross-cutting relationships, and radiometric dating agree on a coherent, testable history of continents, ice ages, and mass extinctions.",
      evidence: [
        "U-Pb zircon ages from the oldest rocks (4.03 Ga Jack Hills, 3.7 Ga Isua) agree with meteorite and lunar samples (~4.56 Ga).",
        "Cross-cutting relationships and superposition give a relative order; radiometric dating anchors that order to absolute ages.",
        "Continental drift is falsifiable and confirmed: Atlantic widening matches sea-floor spreading rates measured directly.",
        "Ice-age cycles (Milankovitch) match oxygen-isotope records in marine sediment at quantifiable intervals.",
      ],
    },
    creationist: {
      stance: "The rock record is not 4.5 billion years old. The 'law of superposition' is an assumption, the Flood explains stratigraphy, and radiometric ages fail when tested in the field.",
      counters: [
        {
          point: "Superposition is an assumption, not a law",
          detail: "Steno's law assumes sediment laid down flat and undisturbed. But the real rock record is full of overturned, folded, and imbricated strata. A 10,000-year Flood with violent deposition explains the 'out-of-order' layers better than 4.5 Gyr of quiet deposition.",
          sources: ["data.js: superposition", "Map/flood-geology notes"],
        },
        {
          point: "The Flood explains the fossil record",
          detail: "Fossil beds with rapid burial, marine layers on mountains, and mixed-age faunas are predicted by a global Flood — they are an anomaly for gradualism. The 2019 Pikaia preservation (soft tissue in 508 Ma Burgess Shale) shows rapid burial is possible.",
          sources: ["data.js: flood-stratigraphy"],
        },
        {
          point: "Radiometric discordance in field geology",
          detail: "Field geologists routinely report 'anomalous' ages — younger ages in older strata, older ages in younger strata. If dating were reliable, the relative order from superposition would always agree. It does not.",
          sources: ["data.js: discordance"],
        },
        {
          point: "The 'uniformitarian' premise is unproven",
          detail: "The present-is-key-to-the-past assumes processes have been constant. But we have never observed continental drift over 10,000 years, nor observed deep-time deposition. The Flood is a single, known, constant process.",
          sources: ["data.js: uniformitarianism"],
        },
      ],
    },
    rebuttal: [
      "Superposition is not an assumption — it is a testable rule. When strata are overturned, geologists detect the folding and correct the order using cross-cutting relationships and paleomagnetic poles.",
      "Fossil assemblages match geography and age with statistical precision — marine species do not appear in inland beds of the wrong age. A single Flood predicts chaos, not a coherent biogeographic pattern.",
      "Discordant ages are real, but they are also predicted by open-system chemistry — uranium loss in metamorphosed rocks is a known mechanism, not evidence against dating.",
      "Continental drift is directly measured: the Mid-Atlantic Ridge spreads at ~2.5 cm/year, exactly the rate that would have opened the Atlantic in ~200 Myr. This is not inference — it is GPS.",
    ],
  },
  {
    id: "cosmology",
    title: "The Age of the Universe",
    mapRef: "cosmology",
    verdict: "Mainstream-strong on mechanism, creationist-strong on the initial-condition question",
    mainstream: {
      claim: "The universe is 13.8 billion years old. The expanding universe, CMB radiation, and nucleosynthesis of light elements form a coherent, falsifiable picture from Big Bang to present.",
      evidence: [
        "Hubble expansion + CMB + BBN (nucleosynthesis) + large-scale structure all agree on a 13.8 Gyr age with <1% tension.",
        "CMB is a 2.725 K blackbody with anisotropies at 10⁻⁵ — exactly as predicted for a 380,000-year-old plasma.",
        "Olbers' paradox: a static eternal universe would have a bright night sky. It is dark. The universe must be finite in age or space.",
        "Type Ia supernovae + CMB + BAO all converge on the same cosmological parameters.",
      ],
    },
    creationist: {
      stance: "The universe need not be 13.8 billion years old. The light we see from distant galaxies can be explained without light-travel time — by a creation event in which light and galaxies were already in transit, or by a decaying speed of light.",
      counters: [
        {
          point: "Olbers' paradox dissolves the need for deep time",
          detail: "If the universe is young, the night sky is dark because light has not had time to fill space — not because the universe is old. A young universe naturally explains the dark sky. The paradox is a problem for eternal-static models, not for a young one.",
          sources: ["data.js: olbers", "Map/cosmology notes"],
        },
        {
          point: "Distant galaxies do not prove 13 Gyr of light travel",
          detail: "We see light from Andromeda (2.5 Mly) — but was Andromeda 2.5 million light-years away when that light was emitted, or was the light created in transit? The speed of light is not a clock. Creation in transit (Alphaville, 1958; Whitcomb & Morain) is a coherent alternative.",
          sources: ["data.js: creation-in-transit", "Whitcomb & Morain (1983) 'The Day-Light Years'"],
        },
        {
          point: "CMB can be a created relic, not a 380,000-year plasma",
          detail: "The CMB is a 2.725 K blackbody — but a blackbody spectrum does not require a 380,000-year-old plasma. It requires a thermal source. A created thermal radiation field is observationally indistinguishable from a cooled primordial plasma.",
          sources: ["data.js: cmb"],
        },
        {
          point: "The speed of light may not be constant",
          detail: "If c was higher in the past (Maguey et al. 2020, 'Speed of light may have been higher'), light from 13 Gly could arrive in 10,000 years. This resolves the light-travel-time problem without abandoning observation.",
          sources: ["data.js: decaying-c", "Maguey et al. (2020)"],
        },
      ],
    },
    rebuttal: [
      "Creation-in-transit predicts a young local universe and an old distant one — but we observe redshift-luminosity relationships that are flat, not young, across the full observed range.",
      "The CMB anisotropy pattern (acoustic peaks) is a fingerprint of a 380,000-year-old plasma — a created blackbody would not produce the precise peak structure observed by WMAP and Planck.",
      "If c was higher in the past, the fine-structure constant (which depends on c) would have changed. Spectra of distant quasars show no such variation at 10⁻⁶ precision.",
      "The dark night sky is explained by expansion (redshift dilutes photon energy), not by youth. An eternal expanding universe is also dark. Olbers' paradox does not require deep time — it requires non-staticity.",
    ],
  },
  {
    id: "method",
    title: "Methodology and Paradigms",
    mapRef: "method",
    verdict: "The deepest disagreement — it's about what counts as evidence, not what the evidence is",
    mainstream: {
      claim: "Science is a self-correcting method: hypotheses are tested against observation, and the model that best explains the data wins — regardless of who proposes it. Falsifiability, peer review, and replication are the safeguards.",
      evidence: [
        "The same methods that gave us 4.5 Gyr Earth and 13.8 Gyr universe also gave us technologies (GPS, PCR, MRI) that depend on those ages being right.",
        "Peer review + replication: individual errors (e.g., the 1989 cold-fusion claim) are corrected within years.",
        "Falsifiable predictions: BBN predicted 25% helium before it was observed; GR predicted light bending before it was measured.",
        "Method is model-agnostic: a creationist could use the same lab. The question is whether the conclusions follow from the data.",
      ],
    },
    creationist: {
      stance: "Mainstream science is not a neutral method — it is a paradigm (Lakatos: 'methodological conservatism'). The assumption of deep time is an untestable metaphysical commitment, and peer review is a social mechanism that protects incumbents, not truth.",
      counters: [
        {
          point: "Peer review is a social gate, not a truth oracle",
          detail: "Rejection rates of 70–90% in top journals show most decisions are social, not logical. Novels in any field (Sagan's panspermia, Wegener's drift) were rejected for decades by consensus. Consensus is evidence of sociology, not of physics.",
          sources: ["data.js: peer-review", "Lakatos (1970) 'Falsification and the Methodology of Scientific Research Programmes'"],
        },
        {
          point: "Deep time is an untestable prior, not an observation",
          detail: "Every radiometric date, every stratigraphic correlation, every fossil gap-assumption presupposes that the initial conditions were what they are now (uniformitarianism). That presupposition is not itself tested — it is assumed. A 6,000-year-old Earth with different initial conditions is methodologically admissible.",
          sources: ["data.js: uniformitarianism", "Lakatos (1970)"],
        },
        {
          point: "Paradigm shifts do not require consensus to be real",
          detail: "Wegener's continental drift was laughed at for 30 years — then proven right. The fact that a community rejects an idea is not evidence the idea is wrong. The burden is on the data, not the committee.",
          sources: ["data.js: wegener", "Lakatos (1970)"],
        },
      ],
    },
    rebuttal: [
      "Lakatos' critique cuts both ways: a 'hard core' of assumptions protects every research programme, including creationist science. The question is not whether assumptions exist, but which assumptions generate testable, confirmed predictions.",
      "Peer review is imperfect but self-correcting: the 1998 Reinerth cold-fusion retraction, the 2010 Hwang Woo-suk affair, and the 2012 LHCb b→sμμ anomaly all corrected within 2–5 years. A system that corrects itself is not a paradigm lock.",
      "Uniformitarianism (initial conditions = present) is testable: we can measure decay constants in labs, and they are the same now as they were in the samples. The assumption is not a metaphysical prior — it is an empirical measurement.",
      "The decisive test: does the deep-time model generate predictions that are confirmed, or does the young-Earth model? Mainstream science predicted the CMB, BBN helium, and GR light-bending before observation. Young-Earth science has not yet produced a comparable prediction.",
    ],
  },
];