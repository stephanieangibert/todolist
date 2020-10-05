let menuToggle=document.querySelector(".fa-bars");
let fond=document.querySelector(".menuToggle");
console.log(fond);
let navigation=document.querySelector(".navigation");

menuToggle.addEventListener('click',function(){
    menuToggle.classList.toggle('fa-times');
    fond.classList.toggle('Bis');
    navigation.classList.toggle('active');
})

let input=document.querySelectorAll("input");
let contact=document.getElementById("contact");
let hac3=document.querySelector("h3");



let bouton=input[4];
console.log(bouton);
bouton.addEventListener("click",(e)=>{
     e.preventDefault();
    for(i=0;i<input.length-1;i++)
    {
        if(input[i].value!==""){
           contact.classList.add("effetScale");
           let pseudo=input[0].value;
           hac3.innerHTML="Hello "+`${pseudo}`+" 🌼";
           hac3.classList.add("apparition");
        
         }
    }  
    

})


