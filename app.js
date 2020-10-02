let date=document.querySelector(".jourSemaine");
let date1=document.querySelector(".numeroMois");
let date2=document.querySelector(".mois12");
let maDate=new Date();
let jour=maDate.getDay();
let numero=maDate.getDate();
let mois=maDate.getMonth();
if(jour==0){
 jour="Dimanche";
}
else if(jour==1){
    jour="Lundi";
}
else if(jour==2){
    jour="Mardi";
}
else if(jour==3){
    jour="Mercredi";
}
else if(jour==4){
    jour="Jeudi";
}
else if(jour==5){
    jour="Vendredi";
}
else if(jour==6){
    jour="Samedi";
}
if(mois==0){
    mois="janvier";
}
else if(mois==1){
    mois="Février";
}
else if(mois==2){
    mois="Mars";
}
else if(mois==3){
    mois="Avril";
}
else if(mois==4){
    mois="Mai";
}
else if(mois==5){
    mois="Juin";
}
else if(mois==6){
    mois="Juillet";
}
else if(mois==7){
    mois="Août";
}
else if(mois==8){
    mois="Septembre";
}
else if(mois==9){
    mois="Octobre";
}
else if(mois==10){
    mois="Novembre";
}
else if(mois==11){
    mois="Décembre";
}
console.log(jour,numero,mois);
date.textContent=jour;
date1.textContent=numero;
date2.textContent=mois;

let form1=document.querySelector(".ur");
let input1=document.querySelector(".inputUrgence");
let ul1=document.querySelector(".ul1");
let toutesLesTaches=[];


form1.addEventListener("submit",e=>{
    e.preventDefault();
    const text=input1.value.trim();
    if(text!==''){
rajouterDuTexte(text);
      input1.value='';
    }    
})
function rajouterDuTexte(text){
    const toDo = {
        text,
        id:Date.now()
    }
    const input=document.createElement("input");
    input.setAttribute("type",'checkbox');
    const item=document.createElement("li");
    item.appendChild(input);
    input.innerHTML=text;
    input.addEventListener('click',tacheFaite); 
    ul1.appendChild(item);
    item.setAttribute("data-key",toDo.id);
    const txt=document.createElement("span");
    item.appendChild(txt);
    txt.innerHTML=toDo.text;
    const btn=document.createElement("button");
    item.appendChild(btn);
     const img=document.createElement("img");
     btn.appendChild(img);
   
   img.setAttribute("src","ressources/fermer.svg");
    item.appendChild(btn);
    
    toutesLesTaches.push(item);
    console.log(toutesLesTaches);
    btn.addEventListener('click', (e)=>{
      
     toutesLesTaches.forEach(elt=>{
         console.log(item.getAttribute("data-key"));
         if(item.getAttribute("data-key")===elt.getAttribute("data-key")){
             elt.remove();
              toutesLesTaches = toutesLesTaches.filter(li => li.dataset.key !== elt.dataset.key);
         }
     })
      
    })
    
}
function tacheFaite(e){
    e.target.parentNode.classList.toggle("finDeTache");
 }
 