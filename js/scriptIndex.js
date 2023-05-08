const nav= document.querySelector('#nav');
const menu= document.querySelector('#menu');
const cerrar= document.getElementById('cerrar-menu');


menu.addEventListener("click", ()=>{
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
})