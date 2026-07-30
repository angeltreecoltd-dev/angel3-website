const b=document.querySelector('.hamb'),m=document.querySelector('.menu');if(b&&m){b.addEventListener('click',()=>m.classList.toggle('open'));document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>m.classList.remove('open')))}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
