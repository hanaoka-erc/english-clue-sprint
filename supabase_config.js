(()=>{
const endpoint='https://tftltvscewhedrgvwqlt.supabase.co/functions/v1/daily-leaderboard';
window.ER_SUPABASE_CONFIG={url:'edge',anonKey:'public'};
window.ER_LEADERBOARD_ENDPOINT=endpoint;
const idKey='erc_leaderboard_client_id_v1';
let uid=localStorage.getItem(idKey);
if(!uid){uid=(crypto.randomUUID?crypto.randomUUID():'u-'+Date.now()+'-'+Math.random().toString(36).slice(2));localStorage.setItem(idKey,uid)}
const norm=s=>String(s||'').trim().toLowerCase();
const scoreOf=r=>(Number(r.clueScore)||0)+(r.miniCorrect===true?1:0);
const localResults=()=>{try{return JSON.parse(localStorage.getItem('erc_daily_results_v1'))||{}}catch{return{}}};
function localRow(date){const r=localResults()[date];if(!r)return null;return {display_name:r.displayName||'Player',score:scoreOf(r),clue_score:Number(r.clueScore)||0,mini_correct:r.miniCorrect===true,total_time_ms:Number(r.totalTimeMs)||0,completed_at:r.completedAt||null,_local:true}}
function payloadFromLocal(r,date){return {user_id:uid,display_name:r.displayName||'Player',daily_date:date,clue_score:Number(r.clueScore)||0,mini_correct:r.miniCorrect===true,score:scoreOf(r),reading_time_ms:Number(r.readingTimeMs)||0,answer_time_ms:Number(r.answerTimeMs)||0,mini_time_ms:Number(r.miniTimeMs)||0,total_time_ms:Number(r.totalTimeMs)||0}}
async function postResult(payload){const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},cache:'no-store',body:JSON.stringify({...payload,user_id:payload.user_id||uid})});let j={};try{j=await r.json()}catch{}if(!r.ok)throw Object.assign(new Error(j.error||('HTTP '+r.status)),{status:r.status,detail:j});return j}
async function fetchRows(date){const r=await fetch(endpoint+'?date='+encodeURIComponent(date||''),{cache:'no-store'});let j={};try{j=await r.json()}catch{}if(!r.ok)throw Object.assign(new Error(j.error||('HTTP '+r.status)),{status:r.status,detail:j});const rows=Array.isArray(j.rows)?j.rows:[];const lr=localRow(date);if(lr&&!rows.some(x=>norm(x.display_name)===norm(lr.display_name)))rows.push(lr);rows.sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0)||(Number(a.total_time_ms)||0)-(Number(b.total_time_ms)||0)||String(a.completed_at||'').localeCompare(String(b.completed_at||'')));return rows}
async function syncLocalResults(){const all=localResults();const dates=Object.keys(all);let ok=0,failed=0;for(const date of dates){try{await postResult(payloadFromLocal(all[date],date));ok++}catch(e){if(e?.status===409)ok++;else{failed++;console.warn('Daily leaderboard backfill failed',date,e)}}}return {ok,failed,total:dates.length}}
window.ER_LEADERBOARD_API={endpoint,uid,postResult,fetchRows,syncLocalResults};
function from(){let mode='select',payload=null,date=null;const api={insert(v){mode='insert';payload=v;return api},select(){mode='select';return api},eq(k,v){if(k==='daily_date')date=v;return api},order(){return api},then(resolve,reject){const run=async()=>{try{if(mode==='insert'){const data=await postResult(payload||{});return {data,error:null}}const data=await fetchRows(date||'');return {data,error:null}}catch(error){return {data:null,error}}};run().then(resolve,reject)}};return api}
window.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:{user:{id:uid}}},error:null}),getUser:async()=>({data:{user:{id:uid}},error:null}),signInAnonymously:async()=>({data:{user:{id:uid}},error:null})},from})};
setTimeout(()=>syncLocalResults().then(x=>console.info('Daily leaderboard sync',x)).catch(e=>console.warn('Daily leaderboard sync failed',e)),500);
})();