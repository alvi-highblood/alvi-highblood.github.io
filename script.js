const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>loader.classList.add("hide"),350));
document.getElementById("year").textContent=new Date().getFullYear();

const words=["STUDENT","GAMER","BIKE LOVER"];
let wi=0,ci=0,deleting=false;
const typed=document.getElementById("typed");
function type(){
  const word=words[wi];
  typed.textContent=word.slice(0,ci);
  if(!deleting && ci<word.length){ci++;setTimeout(type,90)}
  else if(!deleting){deleting=true;setTimeout(type,1000)}
  else if(ci>0){ci--;setTimeout(type,45)}
  else{deleting=false;wi=(wi+1)%words.length;setTimeout(type,300)}
}
type();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const menu=document.getElementById("menu"), nav=document.getElementById("navLinks");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const progress=document.getElementById("progress"), topBtn=document.getElementById("top");
window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(scrollY/h*100)+"%";
  topBtn.classList.toggle("show",scrollY>500);
});
topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
