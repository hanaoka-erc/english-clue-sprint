(()=>{
const grid=MINI_PUZZLES.find(x=>x.id==='mini_gridplace_003');
if(grid){
  if(!grid.clues.includes('The Crown is to the left of the Ring.')) grid.clues.push('The Crown is to the left of the Ring.');
  grid.key='Mask is between Crown and Ring in the top row, so Crown and Ring occupy the two ends. The left/right clue fixes the mirror: Crown–Mask–Ring, with Gem–Scroll–Vase directly below.';
  grid.first='between alone leaves a mirror-image ambiguity. Use The Crown is to the left of the Ring to fix orientation.';
  grid.expressions=[...new Set([...(grid.expressions||[]),'to the left of'])];
}
const sched=MINI_PUZZLES.find(x=>x.id==='mini_sched_003');
if(sched){
  if(!sched.clues.includes('The Expo takes place after the Briefing.')) sched.clues.push('The Expo takes place after the Briefing.');
  sched.key='Call=Friday and Demo=no earlier than Thursday, so Demo=Thursday. Audit–Briefing must be consecutive, and Expo is after the Briefing, forcing Audit=Monday, Briefing=Tuesday, Expo=Wednesday.';
  sched.first='Fix Friday/Thursday first, then use the Audit–Briefing block together with Expo after Briefing.';
  sched.expressions=[...new Set([...(sched.expressions||[]),'after the Briefing'])];
}
})();