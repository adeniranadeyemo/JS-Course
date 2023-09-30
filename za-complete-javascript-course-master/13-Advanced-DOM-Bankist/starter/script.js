'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
//
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Modern Btn Scrolling
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element caused the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();

    // Matching strategy
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// DOM traversing
const h1 = document.querySelector('h1');
const learnMoreBtn = document.querySelector('.btn--scroll-to');
learnMoreBtn.style.color = '#fff';
learnMoreBtn.style.transform = 'scale(1.2)';

// Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
h1.firstElementChild.style.color = '#fff';
h1.lastElementChild.style.color = 'midnightblue';

// Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('.header').style.background = 'lightpink';
// h1.closest('h1').style.background = 'lightblue';

// Going sideways: siblings
// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(.8)';
// });

// Tabbed component
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Activate tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area
  tabsContent.forEach(tabCon =>
    tabCon.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// document.getElementById('section--1');

// Returns live update on elements
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// Returns live update on elements
// console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   '<p>We use cookies for improved functionality and analytics</p> <button class="btn btn--close-cookie">Got it!</button>';
// message.textContent = 'We use cookies for improved functionality and analytics';

// const message2 = document.createElement('div');
// message2.classList.add('cookie-message');
// message2.innerHTML = `We use cookies for improved functionality and analytics<button class="btn btn--close-cookie">Got it!</button>`;

// header.insertAdjacentHTML('afterbegin', message2);

// header.prepend(message);
// header.append(message.cloneNode(true));
// header.append(message);

// header.before(message);
// header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
// message2.remove();

// message.parentElement.removeChild(message);
// message.parentElement.removeChild(message2);
// });

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).height);
// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 60 + 'px';

// console.log(message.style.height);

const root = document.documentElement;
// root.style.setProperty('--color-primary', 'violet');

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// logo.alt = 'Minimalist logo';
// console.log(logo.alt);

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// console.log(logo.className);

// console.log(logo.getAttribute('designer'));

// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('company'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.getAttribute('href'));
// console.log(link.href);

// Data attributes
// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// Don't USE! It overrides existing classes
// logo.className = 'jonas';

///////////////////////////
///////////////////////////
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert(`addEventListener: Great! You are reading the heading :D`);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.removeEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert(`addEventListener: Great! You are reading the heading :D`);
// };

/////////////////////////////////////////////////
////////////////////////////////////////////////
// const navGrandChild = document.querySelector('.nav__link');
// const navParent = document.querySelector('.nav__links');
// const navGrandParent = document.querySelector('.nav');

// rgb(255, 255, 255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// navGrandChild.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

// Stop Propagation
// e.stopPropagation();
// });

// navParent.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// navGrandParent.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// btnScrollTo.addEventListener('click', function (e) {
// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);

// console.log(e.target.getBoundingClientRect());

// console.log('Curreny scroll (X/Y):', window.scrollX, scrollY);

// console.log('Height/Width of viewport', root.clientHeight, root.clientWidth);

// Scrolling
// window.scrollTo(
//   s1coords.left + window.scrollX,
//   s1coords.top + window.scrollY
// );

// window.scrollTo({
//   left: s1coords.left + window.scrollX,
//   top: s1coords.top + window.scrollY,
//   behavior: 'smooth',
// });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });
