const aside=document.querySelector("aside");
const cross=document.querySelector("i");
const croix=document.getElementById("croix");
const contact=document.getElementById("contact");
const raye=document.getElementById("trait");
cross.addEventListener("click",()=>{
    cross.classList.toggle("fa-times");
     croix.classList.toggle("dark");
    aside.classList.toggle("contactBis");
    raye.classList.toggle("rayer");
})

