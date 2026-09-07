# English Clue Sprint — Existing 42-question review

Status legend: KEEP / REVISE / REPLACE

| # | Target clue | Status | Review note |
|---|---|---|---|
| 1 | Alice finished before Bob. | KEEP | Basic order phrase. Useful low-difficulty anchor. |
| 2 | Claire finished immediately after David. | KEEP | Good contrast with plain `after`. |
| 3 | Ethan finished no earlier than Fiona. | REVISE | In a ranking context, ties may or may not be allowed. Move `no earlier than` to an explicit time/schedule context so inclusive meaning is unambiguous. |
| 4 | Grace finished no later than Henry. | REVISE | Same issue as #3. Use an explicit clock/date context. |
| 5 | Ivy finished two places ahead of Jack. | KEEP | High-value trap: rank difference 2 vs two people between. |
| 6 | There are exactly two people between Kate and Liam. | KEEP | High-value gap-vs-distance phrase. |
| 7 | Maya sits immediately to the left of Noah. | KEEP | Core adjacency phrase. |
| 8 | Olivia sits somewhere to the right of Peter. | KEEP | Core contrast with `immediately to the right`. |
| 9 | Quinn sits at either end of the row. | KEEP | Useful `either end` phrase. |
| 10 | Rachel does not sit next to Sam. | KEEP | Core negative adjacency phrase. |
| 11 | Tina sits between Uma and Victor. | REVISE | Correct idea, but answer/distractors should explicitly teach that `between` does not by itself imply adjacency. |
| 12 | Wendy sits two seats to the right of Xavier. | KEEP | Good seat-distance trap; distinguish from two people between. |
| 13 | The meeting takes place before lunch. | KEEP | Very easy, but useful baseline item. |
| 14 | The interview is scheduled immediately after the presentation. | KEEP | Good scheduling adjacency phrase. |
| 15 | The workshop cannot be held on Monday or Friday. | KEEP | Good Japanese-speaker trap: under negation, neither Monday nor Friday. |
| 16 | The audit must occur no later than Thursday. | KEEP | Good inclusive deadline phrase (`by Thursday`). |
| 17 | The training session is held every other day. | KEEP | Useful fixed expression. |
| 18 | Each person is assigned exactly one task. | KEEP | Good quantifier + assignment phrase. Must not imply each task is used exactly once. |
| 19 | No two players are assigned the same role. | KEEP | Common uniqueness constraint. |
| 20 | Ben is assigned either the blue room or the green room. | REVISE | Bare `either A or B` can be context-sensitive re inclusive/exclusive OR. Make the intended XOR explicit or build the context explicitly. |
| 21 | Exactly one of Alice and Bob is telling the truth. | KEEP | Core truth/lie phrase. |
| 22 | At least one of Carol and David is lying. | KEEP | Good `at least one` vs `exactly one` distinction. |
| 23 | Neither Emma nor Frank is telling the truth. | KEEP | Core `neither ... nor ...` phrase. |
| 24 | If Alice is selected, Bob must also be selected. | KEEP | Basic implication A→B. |
| 25 | Alice is selected only if Bob is selected. | KEEP | Essential high-value trap: A→B, not B→A. |
| 26 | Alice is selected if Bob is selected. | KEEP | Essential contrast with #25: B→A. |
| 27 | Alice is selected if and only if Bob is selected. | KEEP | Useful biconditional. |
| 28 | Unless Carol is selected, David must be selected. | KEEP | High-value `unless` item. |
| 29 | Whenever Emma is assigned to Team A, Frank is assigned to Team B. | KEEP | Useful alternative implication wording. |
| 30 | Exactly three of the five players must be selected. | KEEP | Core exact-count constraint. |
| 31 | At least two members of Team A must be women. | KEEP | Core lower-bound quantifier. |
| 32 | At most one of George and Hannah may be selected. | KEEP | Core upper-bound quantifier; explicitly allows zero. |
| 33 | Either Ian or Julia must be selected, but not both. | KEEP | Explicit XOR; good contrast with ambiguous bare `either/or`. |
| 34 | Kevin and Laura must either both be selected or both be left out. | KEEP | Common linked-pair constraint. |
| 35 | Mia and Noah cannot be on the same team. | KEEP | Common grouping exclusion. |
| 36 | Olivia must be on the same team as Peter. | KEEP | Common grouping linkage. |
| 37 | No more than two of the four events may occur on Tuesday. | KEEP | Good synonym for `at most two`. |
| 38 | At least one, but no more than three, must be selected. | KEEP | Good combined lower/upper bound. |
| 39 | All but one of the players finished before Zoe. | REPLACE | Reference set is ambiguous if Zoe herself is one of `the players`; current Japanese answer also bakes in an assumption. Replace with a cleaner `all but one` clue. |
| 40 | Exactly one person sits between Ryan and Sofia. | KEEP | Good gap phrase. |
| 41 | Tom is not necessarily selected even if Uma is selected. | REVISE | Semantically valid, but sounds more like meta-commentary than a normal puzzle clue. Replace with a more natural puzzle-style construction while retaining the target idea if desired. |
| 42 | Victor is selected unless Wendy is selected. | KEEP | Good `unless` item; must not be misread as an exclusive relationship. |

## Summary

- KEEP: 36
- REVISE: 5 (#3, #4, #11, #20, #41)
- REPLACE: 1 (#39)

## Main weakness of the current bank

The current 42 questions are a solid foundation for isolated English logic phrases, but they are much simpler than actual PuzzleShip / LogicGridPuzzles / Puzzle Baron clue prose. The 200-question expansion should add more realistic clue shapes such as:

- `the athlete whose ...`
- `the person who ...`
- `Of A and B, one is X and the other is Y.`
- `A, B, and C are all different people.`
- multi-attribute clues using `in Height`, `in Age`, `in Price`, etc.
- one-clue sentences containing two linked constraints

The goal is not to make the logic itself harder; it is to make the English closer to real puzzle clues while keeping the deduction burden low enough to isolate reading skill.
