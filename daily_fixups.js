(()=>{
if(!window.DAILY_PACKS)return;
const m1=DAILY_PACKS.find(p=>p.mini?.id==='daily_m1')?.mini;
if(m1){
  m1.clues=m1.clues.map(c=>c==='Cara finishes two places behind Ben.'?'Cara finishes immediately after Ben.':c);
  m1.key='Ben is immediately after Ava and Cara is immediately after Ben, so Ava–Ben–Cara is a three-person block. Eli is last and Diego is ahead of Ava, forcing Diego–Ava–Ben–Cara–Eli.';
  m1.first='Combine the two immediately-after clues into Ava–Ben–Cara, then place Eli last.';
  m1.expressions=['immediately after','ahead of','finishes last'];
}
const m2=DAILY_PACKS.find(p=>p.mini?.id==='daily_m2')?.mini;
if(m2){
  if(!m2.clues.includes('Eli is not selected.'))m2.clues.push('Eli is not selected.');
  m2.key='Ava is selected and Eli is out. If Diego is out, unless forces Ben, and Ben only if Cara forces Cara. If Diego is in, exactly three leaves one slot; Ben would force Cara as a fourth, so Ben is out and Cara fills the third slot. Cara is required in every case.';
  m2.first='Translate unless as not-Diego → Ben and only if as Ben → Cara, then use the exact count.';
  m2.expressions=['only if','unless','cannot both','not selected'];
}
const m5=DAILY_PACKS.find(p=>p.mini?.id==='daily_m5')?.mini;
if(m5){
  m5.clues=m5.clues.map(c=>c==='Carol says, “Alice and Bob are different types.”'?'Carol says, “Alice and Bob are the same type.”':c);
  m5.key='Alice says Bob is a liar, so Alice and Bob must be opposite types. Carol claims they are the same type, so Carol must be lying. Bob therefore tells the truth, which makes Alice a liar. Bob is the only truth-teller.';
  m5.first='Alice’s statement makes Alice and Bob opposite types. That immediately makes Carol’s same-type statement false.';
  m5.expressions=['is a liar','the same type','truth-teller'];
}
})();