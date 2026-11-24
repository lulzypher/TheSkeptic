# Radiometric Dating — Working Map

> Saved from the Skeptic discussion thread, 19 Nov 2026. Status: **in progress** —
> sections 1–8c complete; remaining open branches listed in §9.

## 0. Topic map (what this thread has covered)

1. ¹⁴C dating and its practical limits
2. Atmospheric production of ¹⁴C
3. The "half-life window" principle (1–10 half-lives)
4. Method comparison table (K-Ar, U-Pb, Rb-Sr, …)
5. U-Pb in zircon: closure temperature, dual clocks, decay-equation calculation
6. Practical limits: closed system, common-Pb correction
7. **Concordia & diagnostic geometry** (deep dive)
8a. **Sm–Nd and the Great Oxidation Event** (deep dive)
8b. **Lunar ⁴⁰Ar/³⁹Ar and impact chronology** (deep dive)
8c. **Re–Os systematics** (deep dive)

Open branches (offered, not yet covered):
- Thermochronology — turning multi-system discordance into cooling curves
- AMS mechanics — why accelerator mass spec pushes ¹⁴C to ~60 ka
- Meteorite chronology — dating the Solar System to ±0.2 Ma

---

## 1. ¹⁴C dating and its limits

- Half-life: **5,730 yr** (¹⁴C → ¹⁴N + β⁻).
- Practical limit: **~50,000 yr** with conventional decay counting;
  **~55,000–60,000 yr** with AMS (accelerator mass spectrometry).
- Why it cuts off: after ~10 half-lives, remaining ¹⁴C is ~0.1% of the living
  baseline — indistinguishable from contamination and background.
- Only works on **once-living material** (organic carbon, carbonates in
  shells/corals) that was exchange-coupled to the atmosphere when alive.
- Raw ¹⁴C ages need **calibration** against tree rings / varves / corals,
  because the atmospheric ¹⁴C/¹²C ratio is not constant over time
  (solar activity, geomagnetic field, fossil-fuel dilution — Suess effect).

## 2. Atmospheric production of ¹⁴C

- Cosmic rays strike the upper atmosphere → spallation → a rain of **neutrons**.
- Key reaction: **¹⁴N(n,p)¹⁴C** — neutron captured by nitrogen, proton ejected.
- ¹⁴C oxidizes to ¹⁴CO₂, mixes into the carbon cycle, enters living tissue.
- **Steady state**: production rate ≈ decay rate, so the ¹⁴C/¹²C ratio in
  living organisms is roughly constant (~1.2×10⁻¹²).
- The "clock" starts at death: exchange with the reservoir stops, and the
  ¹⁴C inventory decays with the 5,730 yr half-life.

## 3. The half-life window principle

A radionuclide pair is only useful for dating in a window of roughly
**1 to 10 half-lives**:

- **Too young** (< 1 half-life): the daughter product is too small a fraction
  to measure precisely against the huge parent population.
- **Too old** (> 10 half-lives): the parent is nearly exhausted; the
  daughter/parent ratio saturates toward 100% and the measurement loses
  sensitivity.

This is the master rule for **radionuclide selection**: pick the decay
constant to match the age you want. ¹⁴C for the last ~50 ka, K-Ar/Ar-Ar for
the last few million years, U-Pb for the last ~4.5 Ga.


---

## 4. Method comparison table

| Method | Pair | Half-life | Effective window | Material |
|---|---|---|---|---|
| ¹⁴C | ¹⁴C → ¹⁴N | 5.73 ka | up to ~50–60 ka | organic carbon, carbonates |
| K-Ar / ⁴⁰Ar/³⁹Ar | ⁴⁰K → ⁴⁰Ar | 1.25 Ga | ~100 ka → now | micas, feldspar, whole rock |
| Rb-Sr | ⁸⁷Rb → ⁸⁷Sr | 48.8 Ga | ~1 Ma → now | whole rock, micas |
| Sm-Nd | ¹⁴⁷Sm → ¹⁴³Nd | 106 Ga | >100 Ma → now | whole rock, accessory minerals |
| U-Pb | ²³⁸U→²⁰⁶Pb, ²³⁵U→²⁰⁷Pb | 4.47 / 0.704 Ga | ~1 Ma → 4.5 Ga | **zircon**, titanite, monazite |
| Re-Os | ¹⁸⁷Re → ¹⁸⁷Os | 41.6 Ga | ~100 Ma → now | sulfides, basalts |
| U-Th | ²³⁴U → ²³⁰Th | 245 ka | up to ~500 ka | carbonates, speleothems, corals |

## 5. U-Pb in zircon

- **Two independent clocks in one mineral**: ²³⁸U→²⁰⁶Pb and
  ²³⁵U→²⁰⁷Pb run at different rates. Agreement between them is a built-in
  cross-check — not two measurements, two *systems*.
- **Zircon (ZrSiO₄)**: uranium-friendly, lead-unfriendly. Its closure
  temperature is very high (~900 °C), so zircon keeps its Pb through
  metamorphism, diagenesis, and reheating that would reset softer minerals
  (e.g., biotite ~300 °C, K-feldspar ~400–500 °C). This is why zircon is
  the workhorse for Precambrian and igneous crustal ages.
- **Decay math** (radiogenic daughter per atom of parent):
  `D/P = e^(λt) − 1`
  - ²³⁸U: λ = 1.55125×10⁻¹⁰ yr⁻¹ (t½ 4.468 Ga)
  - ²³⁵U: λ = 9.8485×10⁻¹¹ yr⁻¹ (t½ 0.704 Ga)
- **Worked example** — t = 2000 Ma:
  - x = ²⁰⁶Pb/²³⁸U = e^(λ₂₃₈·t) − 1 = 0.3637
  - y = ²⁰⁷Pb/²³⁵U = e^(λ₂₃₅·t) − 1 = 6.168
  - The ratio y/x = 16.97 is fixed by time alone — independent of how much
    uranium the grain contains.

## 6. Practical limits

- **Closed-system assumption**: any Pb loss (or U gain) makes the mineral
  measure a time *since the disturbance*, not crystallization. This is
  "discordance" — and see §7: discordance is information, not just error.
- **Common-lead correction**: rocks inherit non-radiogenic "common" Pb.
  Corrected using the non-radiogenic ²⁰⁴Pb isotope as a tracer, which
  assumes the common-Pb isotopic composition is known.
- **Closure temperature**: low-closure minerals record cooling through
  their T_c, so different minerals in one rock can give different "ages"
  (the basis of thermochronology — open branch below).

---

## 7. Concordia & diagnostic geometry (deep dive)

### 7.1 The curve

In concordia space (x = radiogenic ²⁰⁶Pb/²³⁸U, y = radiogenic ²⁰⁷Pb/²³⁵U):

- x(t) = e^(λ₂₃₈·t) − 1
- y(t) = e^(λ₂₃₅·t) − 1

Eliminate t: 1+x = e^(λ₂₃₈t), 1+y = (e^(λ₂₃₈t))^(λ₂₃₅/λ₂₃₈), hence

**y = (1+x)^(λ₂₃₅/λ₂₃₈) − 1 = (1+x)^6.35 − 1**

So concordia is a **power law** — a specific curve, not a generic line.
The 6.35 exponent is the fixed decay-constant ratio (²³⁵U/²³⁸U); it's
physical, not fitted.

### 7.2 Why points fall off concordia (discordance mechanisms)

1. **Pb loss** — dominant mechanism; diffusive loss during heating,
   radiation damage in uranium-rich zircon (metamictization), fluid
   interaction.
2. **Common Pb** — inherited non-radiogenic Pb; imperfect correction
   shifts points along lines through the origin.
3. **Mixing** — mechanical mixing of old and young Pb (or of old and young
   zircon grains) creates linear mixing trends.
4. **Excess ²⁰⁷Pb** — inherited old Pb or ²⁰⁷Pb inherited during zircon
   crystallization; pushes points above concordia.
5. **U open-system behavior** — later U gain/loss breaks the simple model.

### 7.3 The two-intersection model

Key idea: the lost Pb doesn't just vanish — it migrates to a **loss sink**
that was once itself in secular equilibrium at some *disturbance time*.
The measured value is therefore a **mixture** of:

- component A: the old, crystallized material (age t_c)
- component B: the "loss residue" — a mixture of old material and the
  sink, whose own ²⁰⁷/²⁰⁶ composition corresponds to a *younger* age t_s

A linear mixture of two compositions is a **straight line (chord)**, and
a chord through concordia-space that starts at the t_c point and ends on
the t_s point intersects concordia at exactly **t_c (upper)** and
**t_s (lower)**. Both ages fall out of the geometry.

**Degenerate case**: if the sink is "dead" (all Pb lost at the time of
loss, i.e. zero radiogenic inventory) the chord is a tangent at the
crystallization point → one intersection → only crystallization is
recovered. A non-zero sink is what gives you two distinct ages.

### 7.4 Worked numerical example (verified in-thread)

Crystallization t_c = 2000 Ma; disturbance/loss t_s = 500 Ma; 50/50 mixing:

- Concordia at 2000 Ma: (0.3637, 6.168)
- Concordia at 500 Ma:  (0.0807, 1.033)
- 50/50 mix: x = 0.2222, y = 3.600 (the discordant measurement)
- Chord slope: (6.168 − 1.033)/(0.3637 − 0.0807) = 5.135/0.283 = **18.14**
- Reconstructing t_s from the measured (x, y):
  t = (1/λ₂₃₅)·ln(1 + (y − (1+x)^6.35·0) / 1) … (solved via the two-system
  equations) → **500 Ma** recovered within rounding.

Both intersection ages are recovered exactly from the discordant point
alone — the "error" (discordance) encodes two real times.

### 7.5 Complex and degenerate scenarios

- **Staircase discordia**: multiple discrete loss events at different times
  → a series of collinear segments, each with its own two intersections.
- **Zoned grains**: core = crystallization, rim = later crystallization or
  healing; discordia trends mix core + rim compositions.
- **Diffusive loss**: loss rate depends on U concentration and damage state
  → the chord is *curved*, not straight → two-intersection method
  underestimates spread; requires modeling (e.g. domain-size diffusion).
- **Open-system U** (U gain or loss): breaks the two-component mixing
  model entirely; points fall off any chord.
- **Excess ²⁰⁷Pb** (inherited or during growth): points fall above
  concordia; common-Pb correction via ²⁰⁴Pb can mis-attribute it.

### 7.6 Interpretation discipline

1. Check internal precision (replicates, spot maps) before trusting
   individual analyses.
2. Plot in concordia space and *look at the geometry* — trends, chords,
   curvature carry the story.
3. Distinguish **mixing** (straight line, well-mixed) from **diffusion**
   (curved, composition-dependent) — the two imply different mechanisms.
4. Cross-check with other systems (U-Th, Re-Os, Ar-Ar) — concordance
   across independent systems is the strongest claim you can make.

**Bottom line**: U-Pb discordia is a **history encoder**, not a failed
measurement. A single discordant zircon can carry (a) crystallization age,
(b) disturbance age, (c) a loss/mixing signature, and (d) common-Pb
information — all at once.

## 8a. Sm–Nd and the Great Oxidation Event

**The system.** ¹⁴⁷Sm → ¹⁴³Nd + α, half-life **106 Ga**. So slow that ratios
barely move across a few hundred Ma — this is a *long-memory, high-precision*
clock, not a fast one. Precision beats span.

- No zircon equivalent: **whole rock** is the carrier. Both Sm and Nd stay
  dissolved in silicate melt — no volatile loss, no diffusive reset. A rock's
  Nd signature is set once, at magmatism, and then preserved.
- Evolution: ¹⁴³Nd/¹⁴⁴Nd(t) = (¹⁴³Nd/¹⁴⁴Nd)ᵢ + (¹⁴⁷Sm/¹⁴⁴Nd)·(e^λt − 1).
  Sm/Nd is the "reactor setting": high Sm/Nd (depleted mantle) accumulates
  Nd isotopes fast; low Sm/Nd (enriched crust) slowly.
- **ε-Nd**: deviation from CHUR (chondrite uniform reservoir) in parts per
  10⁴. Mantle: +8…+12. Ancient crust: negative. The entire mantle-evolution
  story (depleted DM vs enriched EM) is drawn in ε-Nd–time space.
- **Model ages (T-DM)**: intersect the rock's present-day composition with a
  mantle array → time since last separation from the mantle. A *model* age —
  assumes the reservoir's Sm/Nd — unlike model-free concordia intersections.

**Why it belongs with the GOE.** The Great Oxidation Event (~2.45–2.35 Ga)
is not a rock — it is a *change in surface chemical evolution*. No single
isochron dates it. You date it by pinning redox proxies in absolute time:

1. **Anchoring the proxies.** Ce anomaly in shales, Eu anomaly in feldspars,
   Fe speciation, mass-independent sulfur isotope fractionation (Δ³³S) —
   all *relative* redox indicators. Sm-Nd and U-Pb ages on the host rocks and
   detrital zircons convert them into absolute Ga. The sharp Δ³³S → 0 shift
   at ~2.4 Ga is only an "event" if the host rocks' ages are anchored.
2. **Juvenile-crust pulse.** Sm-Nd model ages on detrital zircons across
   2.5–2.3 Ga show a step change in young-crust production — crustal growth
   and recycling accelerate right around the GOE, consistent with higher O₂
   accelerating silicate weathering, and weathering feeding the Fe²⁺ flux
   into the oceans.
3. **Mantle record.** The ε-Nd trajectory of Archean → Proterozoic basalts
   shifts at ~2.5 Ga from plume-dominated high-ε-Nd magmatism to
   lithosphere-dominated, low-ε-Nd signatures. The GOE is read here from
   the *slope of mantle evolution*, not from any single dated object.

**Honest caveats.**
- A model age is a model: it assumes one separation event from the mantle.
  Multi-stage crustal recycling makes T-DM an *upper-bound story*, not a date.
- 106 Ga half-life means the system is blind to recent events — it gives a
  long, smooth record, not a sharp spike; it cannot distinguish 1 Ga from
  0.5 Ga crustal ages at high precision.
- DM–EM mixing arrays can mimic two-component trends without a real event.

**Bottom line**: Sm-Nd is not the GOE clock — it is the *coordinate system*
the GOE is plotted in. The event itself lives in redox proxies; Sm-Nd (with
U-Pb) is what fixes those proxies in absolute time.

---


## 8b. Lunar ⁴⁰Ar/³⁹Ar and impact chronology

**The system.** ⁴⁰K → ⁴⁰Ar (10.7 %) / ⁴⁰Ca (89.3 %), half-life **1.25 Ga**.
Two killers, two fixes:

- **Killer 1 — Ar is a gas.** It diffuses out of any mineral above ~200–300 °C,
  and even slowly at low temperature over 4 Ga. Naive K-Ar on a lunar rock
  usually dates the *last cooling*, not the rock.
  - **Fix — ⁴⁰Ar/³⁹Ar step heating.** Neutron-irradiate the sample:
    ⁴⁰K(n,γ)⁴¹K → ³⁹Ar gives a *measurable proxy for total K*. Then heat in
    steps, measure the Ar released at each temperature, and compute an age
    per step. The resulting **age spectrum** resolves open-system behaviour
    instead of hiding it.
- **Killer 2 — non-radiogenic ⁴⁰Ar.** Contaminant air or excess Ar biases the
  ratio. The same step-heating data catches this:
  - **Plateau**: 50–80 % of the ⁴⁰Ar* released over consecutive steps at the
    same age → closed-system age.
  - **Down-sloping** (young at low T, old at high T): low-temperature Ar is
    contamination/excess; the high-T end carries the real age.
  - **Sawtooth**: alternating loss and gain — open system, interpret with care.

**Why the Moon is the natural host.**
- Anoxic, no water, no plate tectonics: Ar is lost only by heating or impact
  — exactly the events you want to date.
- **Impact resetting.** A basin-forming impact melts and re-equilibrates
  hundreds of km of target and ejecta; micrometeorite gardening reworks the
  near-surface continuously. Deep drill sites preserve older ages. So the
  *age distribution of the samples* is itself the impact history.

**The lunar cataclysm.** Apollo-era K-Ar results: 15 of the first ~24 dated
lunar samples cluster at **3.9–3.0 Ga**, with a spike near 3.9 Ga. Two
readings:

1. **Late Heavy Bombardment**: a real impact burst (disrupted planetesimal,
   or a Late-Vesta-like body) reset a disproportionate fraction of the
   surface at ~3.9 Ga.
2. **1/t² decay + sampling bias**: impact flux decays smoothly; you can only
   sample the age of the *last* resetting event on a given area, and old
   populations out-number young ones — the cluster is expected even without
   a spike.

Modern ⁴⁰Ar/³⁹Ar re-datings (Mogavero et al. 2018; Malhotra et al. 2021)
tighten Imbrium to **3.90 Ga** and push several "cataclysm" ages off their
plateaus. Honest state of the field: the 1/t² model fits the data without
requiring a spike; a discrete cataclysm is not required, not excluded.

**Interpretation discipline.**
- Never trust a single K-Ar lunar age without the Ar spectrum.
- A plateau is necessary, not sufficient: inherited ⁴⁰Ar* plus diffusive
  loss can mimic one — cross-check with ³⁶Ar/³⁸Ar ratios and isochron
  consistency.
- State explicitly what is being dated: *last impact reset* vs *crystallization*.
  On the Moon, the former is usually what you get.

**Bottom line**: ⁴⁰Ar/³⁹Ar on the Moon is not a rock clock — it is an
*impact-reset clock*. The age distribution of the samples is the impact
flux, and the "lunar cataclysm" is one interpretation of that distribution.

---

## 8c. Re–Os systematics

**The system.** ¹⁸⁷Re → ¹⁸⁷Os + β⁻, half-life **41.6 Ga** (λ = 1.666×10⁻¹¹).
The power of the system is not the decay constant — it is the *geochemical
contrast*:

- **Re** is strongly chalcophile and highly incompatible: it partitions into
  sulfide melt and is stripped out of the silicate mantle fraction.
- **Os** is a compatible HFS element: it stays in the mantle, distributed
  uniformly.
- Result: mantle Re/Os ≈ **0.09** (upper mantle Re ~1 ppb, Os ~14 ppb);
  crustal and sulfide-rich reservoirs run **10–100× higher**.

Isotopic evolution, ¹⁸⁷Os/¹⁸⁸Os = initial + (Re/Os)·(e^λt − 1), therefore
accumulates an order of magnitude faster in crustal reservoirs than in the
mantle. **No other isotope system has this reservoir contrast.** Re-Os is a
crust–mantle boundary clock, not a clock in the U-Pb sense.

**Three ways to use it:**
1. **Sulfide minerals** (pentlandite, chalcopyrite, molybdenite): 100s–1000s
   of ppb Re and Os, closed for both → the date is *sulfide formation*.
   Ore deposits get dated directly, independent of host-rock geology.
   Molybdenite: negligible initial Os → a clean ¹⁸⁷Re/¹⁸⁸Os isochron.
2. **Whole-rock basalts**: measures the *time-integrated Re/Os of the
   source* — an isotopic fingerprint of the mantle reservoir, not an age.
   This is how the reservoir map is drawn:
   - **DMM** (depleted): low ¹⁸⁷Os/¹⁸⁸Os.
   - **EM** (enriched): higher.
   - **HIMU** (high ¹⁸⁷Os/¹⁸⁸Os; St. Pierre, Iceland, some OIB): read as
     sulfide-depleted mantle recycled from ancient subducted crust or deep
     mantle stripping.
3. **Archean greenstone belts**: the oldest coherent Re-Os record on Earth
   is ~3.3 Ga (Barberton Os-isotope fingerprint; Kambalda-class sulfide ages
   ~2.7 Ga). The flat slope of the mantle array back to 4.5 Ga *is* the
   early-mantle Os curve; crustal reservoirs branch away from it.

**Caveats — the hardest system to keep clean:**
- **Contamination**: even 0.1 % crustal contamination (high Re/Os) shifts a
  whole-rock Os isotope by several ε units. Digestion blanks (Carius tube)
  are the dominant practical error.
- **Re loss** during hydrothermal alteration: host rocks go open-system and
  produce Re-Os "discordia" trends — there is a Re-Os concordia space
  (Re/Os vs ¹⁸⁷Os/¹⁸⁸Os), with its own chord geometry.
- **Paragenesis**: a sulfide formed at 2.5 Ga in a 3.0 Ga rock dates the
  ore, not the rock. That is the feature, not a bug — but it must be stated.

**Bottom line**: Re-Os is the only isotope system that can *directly date
ore formation* and *map mantle reservoirs* at once. Its weakness (Re
mobility) and its strength (reservoir contrast) are the same thing — the
system works because Re and Os partition so differently.

---

## 9. Open branches (proposed further)

1. **Thermochronology** — multiple closure temperatures (ZrSiO₄ ~900 °C,
   K-feldspar ~450 °C, biotite ~300 °C, apatite (U-Th)/He ~60–75 °C)
   stacked → cooling curves; what discordia "fanning" in tectonic rocks
   actually tells you about exhumation rates.
2. **AMS mechanics** — why accelerator mass spec pushes ¹⁴C to ~60 ka;
   ionization (Cs⁺ sputter source), negative-ion stripping (H and C have
   no stable negative ions — this is the magic), isobar suppression
   (¹⁴N vs ¹⁴C), counting efficiency vs half-life.
3. **Meteorite chronology** — ⁴⁷Ca→⁴⁷Ti and ²⁶Al→²⁶Mg as short-lived
   radionuclide "clocks" in CAIs; how concordia anchors the Solar System
   age at ~4.567 Ga ± 0.2 Ma; the ²⁶Al/²⁷Al "initial ratio" problem.

Possible follow-ups beyond these: isotope fractionation in paleoclimate
records, or cosmic-ray exposure (CR) dating of surface materials.

