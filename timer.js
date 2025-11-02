const start = document.querySelector('#start');
const el = document.querySelector("h1");
let intervalid=null;
let sec = 0, min = 0, hr = 0;

function updatedisplay()
{
    el.innerHTML =`${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}


start.addEventListener("click", () => {
  if(intervalid!==null)
      return;
  
  intervalid=setInterval(function timeof1sec() {
    sec++;
    if(sec>= 60){
      sec=0;
    min++;
    }
    if(min>= 60)
  {
      min=0;
    hr++;
  }
    updatedisplay();
  }, 1000);
});

console.log(start);

const end= document.querySelector('#end');
end.addEventListener("click",()=>{  
clearInterval(intervalid);
  intervalid=null;
});

const reset = document.querySelector('#reset');

reset.addEventListener("click", () => {
  clearInterval(intervalid);
  intervalid = null;
  hr = min = sec = 0;
  updatedisplay();
});
