//Responsive menu

const menuIcon = document.querySelector('.hamburger')
const menuList = document.querySelector('.mobile-overlay');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('active');
    menuList.classList.toggle('active');

})


//pop up quote
const requestBtn = document.querySelector('.btn-primary');
const popUp = document.querySelector('.quote-layer');
const closeBtn = document.querySelector('.close');


requestBtn.addEventListener('click',()=>{
   popUp.classList.toggle('active')
})
closeBtn.addEventListener('click',()=>{
    popUp.classList.toggle('active')
})



//AOS Animation

  AOS.init({
    duration: 2000,
    once: true});
