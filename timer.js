const start = document.querySelector('#start');
const el = document.querySelector("h1");
let intervalid=null;
let sec = 0, min = 25, hr = 0;

function updatedisplay()
{
    el.innerHTML =`${String(hr).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}


start.addEventListener("click", () => {
  
    /*one button*/
    if(start.classList.contains('Push'))
    {
      clearInterval(intervalid);
      intervalid=null;
      start.textContent ='Start';
      start.classList.remove('Push');
    }
    else{
  start.textContent='Push';

  start.classList.add('Push');

  intervalid=setInterval(function timeof1sec() {
    if(sec==0)
    {
      if(min==0)
      {
        min=59;
        sec=59;
        hr--;
      }
      else{
        min--;
        sec=59;
      }
    }else {
      sec--;
    }
    
    
  updatedisplay();
  }, 1000);
  }
});

console.log(start);

/*const end= document.querySelector('Pushed');
end.addEventListener("click",()=>{  
clearInterval(intervalid);
  intervalid=null;
});*/

const reset = document.querySelector('#reset');

reset.addEventListener("click", () => {
  clearInterval(intervalid);
  intervalid = null;
  hr =  sec = 0;
  min = 25;
  updatedisplay();
});
