const allButtons = document.querySelectorAll('.searchBtn');
const searchBar = document.querySelector('.searchBar');
const searchInput = document.querySelector('#searchInput');
const searchClose = document.querySelector('#searchCloseBtn');
const header = document.querySelector('.header');

const sign = document.querySelector('#signInOrUp');
const login = document.querySelector('#login');
const register = document.querySelector('#signUp');
const noAccount = document.querySelector('#noAccountYet');
const yesAccount = document.querySelector('#backToLogin');

const admin = document.querySelector('.linkToAdmin');

// const listItem = document.querySelectorAll('.listItem');

let clicks = 0;
admin.addEventListener('click', () => {
  clicks++;
  const adminConfirmed = ['I', 'am', 'an', 'Admin.', 'Ye', 'just', 'hev', 'to', 'trust', 'me', 'like', 'a', 'real', 'LAD.'];
  console.log(adminConfirmed[clicks - 1]);
  if(clicks === adminConfirmed.length) {
    admin.setAttribute('href', '/admin');
  }
});

// function isActiveRoute(route, currentRoute) {
//   return route === currentRoute ? 'active' : '';
// }

// listItem.forEach(item => {
//   item.addEventListener('click', () => {
//     currentRoute = `/${item.textContent}`;
//     console.log(currentRoute);
//     setTimeout(() => {
//       item.classList.add('active');
//     }, 1000)
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  for(let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', () => {
      allButtons[i].style.display = 'none';
      searchBar.style.visibility = 'visible';
      header.style.paddingTop = '65px';
      searchBar.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
      searchInput.focus();
    });
  }

  searchClose.addEventListener('click', () => {
    allButtons.forEach(btn => btn.style.display = 'block');
    searchBar.style.visibility = 'hidden';
    header.style.paddingTop = '10px';
    searchBar.classList.add('open');
    this.setAttribute('aria-expanded', 'false');
  });
});

