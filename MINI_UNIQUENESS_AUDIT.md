# Mini Puzzle uniqueness audit

Audit rule:
- **Grid-placement puzzles:** the entire board must have exactly one valid arrangement.
- **Question/choice puzzles:** the answer to the question must be unique. The hidden complete assignment may have multiple models when the question does not ask for the full model.

Audited: 2026-09-07.

## Existing Mini Puzzle bank (40)

| ID | Verdict | Note |
|---|---|---|
| mini_order_001 | PASS | Full order unique |
| mini_position_001 | PASS | Full seating unique |
| mini_sched_001 | PASS | Full schedule unique |
| mini_select_001 | PASS | Selected set unique |
| mini_truth_001 | PASS | Truth types unique |
| mini_floor_001 | PASS | Top-floor answer unique; lower-floor assignment has >1 model |
| mini_match_001 | PASS | Amy=Bird unique; remaining pets need not be unique |
| mini_mixed_001 | PASS | Full order unique |
| mini_cond_001 | PASS | Selected set unique |
| mini_sched_002 | PASS | Full schedule unique |
| mini_group_001 | PASS | Required pair Diego+Emma unique; fourth selected person not fixed |
| mini_number_001 | PASS | Full age assignment unique |
| mini_order_002 | PASS | Last-place answer Dana unique; two full orders remain |
| mini_grid_001 | PASS | Coffee drinker Daniel unique; unused attributes need not be unique |
| mini_mixed_002 | PASS | Tuesday visitor Cara unique; some city attributes remain free |
| mini_order_003 | PASS | Full order unique |
| mini_position_002 | PASS | Full seating unique |
| mini_sched_003 | FIXED → PASS | Originally Wednesday was not unique. Added: “The Expo takes place after the Briefing.” |
| mini_select_002 | PASS | Emma is required in every valid selection; multiple complete selected sets remain |
| mini_truth_002 | PASS | Truth types unique |
| mini_match_002 | PASS | Amy=Bird unique; Bob/Dana cat/fish orientation remains free |
| mini_floor_002 | PASS | Top floor Diego unique; lower floors need not all be fixed |
| mini_number_002 | PASS | Full price assignment unique |
| mini_grid_002 | PASS | Kobe person Ben unique; some colors remain free |
| mini_order_004 | PASS | Full order unique |
| mini_gridplace_001 | PASS | Full 2×3 board unique |
| mini_gridplace_002 | PASS | Full 2×3 board unique |
| mini_gridplace_003 | FIXED → PASS | Originally left/right mirror pair. Added: “The Crown is to the left of the Ring.” |
| mini_gridplace_004 | PASS | Full 2×3 board unique |
| mini_gridplace_005 | PASS | Full 2×3 board unique |
| mini_gridplace_006 | PASS | Full 2×3 board unique |
| mini_gridplace_007 | PASS | Full 2×3 board unique |
| mini_gridplace_008 | PASS | Full 2×3 board unique |
| mini_gridplace_009 | PASS | Full 2×3 board unique |
| mini_gridplace_010 | PASS | Full 2×3 board unique |
| mini_gridplace_011 | PASS | Full 2×3 board unique |
| mini_gridplace_012 | PASS | Full 2×3 board unique |
| mini_gridplace_013 | PASS | Full 2×3 board unique |
| mini_gridplace_014 | PASS | Full 2×3 board unique |
| mini_gridplace_015 | PASS | Full 2×3 board unique |

## Daily Mini Puzzle starter bank (7)

| ID | Verdict | Note |
|---|---|---|
| daily_m0 | PASS | Full 2×3 board unique |
| daily_m1 | FIXED → PASS | Original clue set had no valid model because “two places behind” conflicted with Eli=last. Changed to “Cara finishes immediately after Ben.” |
| daily_m2 | FIXED → PASS | Cara was not originally required. Added “Eli is not selected.” Cara is now required in every valid model |
| daily_m3 | PASS | Full 2×3 board unique |
| daily_m4 | PASS | Full schedule unique |
| daily_m5 | FIXED → PASS | Original truth/lie answer was wrong. Carol’s statement changed to “Alice and Bob are the same type.” → Bob only is unique |
| daily_m6 | PASS | Full 2×3 board unique |

## Result

- Existing bank: **40/40 have a unique graded answer after 2 fixes.**
- Grid-placement subset: **15/15 have a unique complete board after 1 mirror fix.**
- Daily starter Mini Puzzles: **7/7 have a unique graded answer after 3 fixes.**

Future rule: every new grid-placement puzzle should be checked for mirror/rotation symmetries; every question-type Mini Puzzle should be checked across all valid models to ensure the requested answer is invariant.
