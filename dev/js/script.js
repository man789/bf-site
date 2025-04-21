// Burger Menu Animation
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

// Submenu toggle for mobile
let submenuToggles = document.querySelectorAll('.submenu-toggle');

submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    if (window.innerWidth <= 900) {
      e.preventDefault(); // Prevent page navigation
      let parent = this.closest('.with-submenu');
      parent.classList.toggle('open');
      // Toggle arrow direction (optional)
      this.classList.toggle('open');
    }
  });
});

// Hide navbar on scroll down, show on scroll up
let lastScrollTop = 0;
let scrollThreshold = 120; // Scroll threshold before hiding
let breakpoint = 900; // Only trigger for screens wider than this
// Hide navbar on scroll down (only on desktop)
window.addEventListener('scroll', function () {
  if (window.innerWidth > breakpoint) {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > scrollThreshold) {
          if (scrollTop > lastScrollTop) {
              nav.style.top = "-120px"; // Hide nav
          } else {
              nav.style.top = "0"; // Show nav
          }
      } else {
          nav.style.top = "0"; // Always show when scroll is less than threshold
      }

      lastScrollTop = scrollTop;
  }
});

// Collapse
let coll = document.getElementsByClassName("collapsible");
let i;
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

mixitup('.container', {
  animation: {
      enable: false
  }
});