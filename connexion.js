let bouton=document.querySelectorAll("input")[2];
let encart=document.getElementById("encart");
let input=document.querySelectorAll("input");
let connexion=document.getElementById("connexion");

console.log(bouton);
bouton.addEventListener("click", (e)=>{
    e.preventDefault(e);
    for(i=0;i<input.length-1;i++){
if(input[i]!==""){
    encart.classList.add("effetScale");
    connexion.innerHTML="CONNEXION✔️";
    connexion.classList.add("apparition");
   
}
    }
    
})