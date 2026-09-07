# English Clue Sprint — 200-question blueprint

## Goal
Train fast, accurate parsing of English clue prose used in logic/deduction puzzles. Logic difficulty should stay mostly low; English parsing difficulty is the main variable.

## Category allocation (200 total)

| Category | Questions | Main focus |
|---|---:|---|
| Ordering / Ranking | 28 | before/after, ahead/behind, higher/lower, places apart, gap vs rank difference |
| Position / Arrangement | 34 | left/right, immediately/directly, next to, somewhere, between, ends |
| Scheduling / Timeline | 20 | earlier/later, no earlier/later than, immediately before/after, consecutive, every other |
| Assignment / Matching | 24 | assigned to, belongs to, same/different, uniqueness, person who/whose |
| Conditional deduction | 30 | if, only if, unless, whenever, iff, necessary/sufficient wording |
| Selection / Grouping | 24 | exactly/at least/at most, both/neither/either, linked/excluded pairs |
| Truth-teller / Liar | 16 | truth/lie, exactly one, at least one, neither, both |
| Realistic mixed clue prose | 24 | multi-attribute wording, `the person whose...`, `Of A and B...`, `all different people` |
| **Total** | **200** | |

The mixed-prose questions are not intended as hard logic-grid puzzles; they should reproduce realistic English clue syntax with light deduction burden.

## Difficulty mix

- English ★1: 30 questions — basic anchor phrases
- English ★2: 45 questions — common puzzle wording
- English ★3: 60 questions — paraphrases and modest nesting
- English ★4: 45 questions — Japanese-speaker traps / multi-clause clues
- English ★5: 20 questions — dense but realistic clue prose

Logic difficulty should be mostly ★1–2 for Clue Sprint.

## Three training layers

### 1. Core phrase recognition (~70 questions)
Short clues that establish exact meanings quickly.
Examples of targets: `immediately after`, `at most`, `neither...nor`, `only if`.

### 2. Contrast / trap training (~70 questions)
Near-neighbor wording where one word changes the constraint.
Examples:
- `left of` vs `immediately left of`
- `two places ahead` vs `two people between`
- `at least` vs `at most` vs `exactly`
- `if` vs `only if`
- `either/or` vs `either/or, but not both`

### 3. Realistic clue prose (~60 questions)
Clues that resemble real puzzle sites while preserving low logic load.
Examples:
- `The athlete whose favorite obstacle is the fence is taller than the athlete named Maya.`
- `Of Adam and Steven, one is 6'4" tall and the other prefers the staircase.`
- `Adam, the 6'1" athlete, and the athlete who prefers the handrail are all different people.`

## High-priority trap tags

Each question should carry one or more tags where appropriate:

- `adjacent-vs-relative`
- `gap-vs-distance`
- `only-if-reversal`
- `if-direction`
- `unless`
- `at-least-vs-at-most`
- `exactly-vs-bound`
- `either-or-scope`
- `neither-nor`
- `negated-or`
- `all-but-one`
- `one-the-other`
- `all-different`
- `same-vs-different`
- `referential-whose`
- `multi-clause`
- `japanese-literal-reading`
- `category-order-before-after` (low frequency; principle only needs a few examples)

## Phrase repetition policy

- High-value traps: 3–5 paraphrased appearances
- Standard frequent expressions: 2–4 appearances
- Once-understood mechanical conventions such as Puzzleship category-order `before/after`: 1–3 appearances only
- Avoid superficial duplicates that differ only by names

## Quality checklist for every question

Before `status: reviewed`, verify all of the following:

1. English is natural or authentically puzzle-style.
2. The intended constraint is unambiguous in the supplied context.
3. The correct option is fully correct, not merely "closest".
4. All three wrong options are definitely wrong.
5. Wrong options correspond to plausible parsing mistakes where possible.
6. The question trains English reading more than puzzle-solving difficulty.
7. It does not duplicate another question without adding a paraphrase/trap benefit.
8. Inclusive/exclusive boundaries are explicit when natural English could be ambiguous.
9. Referential sets (`all players`, `the other`, etc.) are clearly defined.
10. If a site-specific convention is being trained, the clue/context makes that convention clear.

## Proposed question schema

```js
{
  id: "conditional_017",
  category: "Conditional deduction",
  english: "Alice attends only if Bob attends.",
  correct: "Alice → Bob",
  wrong: ["Bob → Alice", "Alice and Bob must both attend", "Exactly one attends"],
  target: ["only if"],
  trap: ["only-if-reversal"],
  englishDifficulty: 4,
  logicDifficulty: 1,
  layer: "contrast",
  status: "reviewed"
}
```

## Production workflow

1. Review/fix the existing 42.
2. Create 25 new questions per batch.
3. Run a second-pass review on each batch before merging into production.
4. Track coverage by category, target phrase, trap tag, and difficulty.
5. Stop at ~200 only after coverage is balanced; do not force exact counts by filler.
