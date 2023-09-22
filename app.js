// Product Tab
const about = document.querySelector(".product");
const btns = document.querySelectorAll(".tab-btn");
const productPages = document.querySelectorAll(".product-container");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other pages
    productPages.forEach((productPage) => {
      productPage.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

//Responsive menu

const menuIcon = document.querySelector(".hamburger");
const menuList = document.querySelector(".mobile-overlay");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  menuList.classList.toggle("active");
});

//pop up quote
const requestBtn = document.querySelector(".btn-primary");
const popUp = document.querySelector(".quote-layer");
const closeBtn = document.querySelector(".close");

requestBtn.addEventListener("click", () => {
  popUp.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  popUp.classList.toggle("active");
});

//AOS Animation

AOS.init({
  duration: 2000,
  once: true,
});
