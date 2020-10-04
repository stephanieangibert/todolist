let menuToggle=document.querySelector(".fa-bars");
console.log(menuToggle);
let navigation=document.querySelector(".navigation");

menuToggle.addEventListener('click',function(){
    menuToggle.classList.toggle('fa-times');
    navigation.classList.toggle('active');
})

