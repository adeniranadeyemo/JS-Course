'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');

// Returns live update on elements
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Returns live update on elements
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  '<p>We use cookies for improved functionality and analytics</p> <button class="btn btn--close-cookie">Got it!</button>';
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

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
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

  section1.scrollIntoView({ behavior: 'smooth' });
});
