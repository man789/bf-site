let burger = document.querySelector('.nav__burger');
let nav = document.querySelector('.main__nav');
let logo = document.querySelector('.main__nav__logo');
let menuRight = document.querySelector('.main__nav__content');
let link = document.querySelector('.main__nav__content__links');
let links = document.querySelectorAll('.main__nav__content__link');
let navSocial = document.querySelector('.main__nav__content__socials');

burger.addEventListener('click', function () {
  nav.classList.toggle('nav--activ');
  logo.classList.toggle('nav--activ');
  menuRight.classList.toggle('nav--activ');
  link.classList.toggle('nav--activ');
  navSocial.classList.toggle('nav--activ');
  burger.classList.toggle('burger--activ');
});

let lastScrollTop = 0;
let scrollThreshold = 120; // Scroll threshold before hiding
// Hide navbar on scroll down, show on scroll up
window.addEventListener('scroll', function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > scrollThreshold) { 
      // Only activate hiding effect after scrolling 120px
      if (scrollTop > lastScrollTop) {
          // Scrolling down
          nav.style.top = "-120px";
      } else {
          // Scrolling up
          nav.style.top = "0";
      }
  }

  lastScrollTop = scrollTop;
});

// Collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-collapse");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}