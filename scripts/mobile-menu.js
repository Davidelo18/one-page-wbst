const burgerBtn = document.querySelector('#burgerBtn');
const myNav = document.querySelector('#myNav');

burgerBtn.addEventListener('click', () =>{
    myNav.classList.toggle('active-nav');
});