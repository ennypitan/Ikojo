// Product Tab
const about = document.querySelector(".product");
const btns = document.querySelectorAll(".tab-btn");
const productPages = document.querySelectorAll(".product-container");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(e.target);
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
  console.log("clicked");
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

// Customer Slider
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  // working with buttons

  // if (counter < slides.length - 1) {
  //   nextBtn.style.display = "block";
  // } else {
  //   nextBtn.style.display = "none";
  // }
  // if (counter > 0) {
  //   prevBtn.style.display = "block";
  // } else {
  //   prevBtn.style.display = "none";
  // }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// prevBtn.style.display = "none";

//AOS Animation

AOS.init({
  duration: 2000,
  once: true,
});
