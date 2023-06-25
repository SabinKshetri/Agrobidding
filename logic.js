const button=document.getElementById('login')
const list=document.getElementById('sub-item');
 
button.addEventListener('click', ()=>{
  list.classList.toggle('sub-menu');
});
