const showDrawerMenu = () => {
const menu = document.querySelector('#menu');
const hero = document.querySelector('#hero');
const logo = document.querySelector('#app-bar');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav-bar');

  menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
  console.log(drawer);
  });
  logo.addEventListener('click', function () {
  drawer.classList.remove('open');
  });

  hero.addEventListener('click', function () {
  drawer.classList.remove('open');
  });

  main.addEventListener('click', function () {
  drawer.classList.remove('open');
  });
}

showDrawerMenu();

const showActiveNav = () => {
const nav = document.querySelector(".nav-list");
nav.addEventListener('click', function(e) {
const targetNav = e.target;
if(targetNav.classList.contains('nav-link')) {
  const navLinkActive = document.querySelector("ul.nav-list li a.active");
  if(navLinkActive !== null && targetNav.getAttribute('href') !== navLinkActive.getAttribute('href')) {
      navLinkActive.classList.remove('active');
  }
  targetNav.classList.add('active');
}
});

}

showActiveNav();
