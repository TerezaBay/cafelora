import './index.html';
import './style.css';

console.log('funguju!');

// rozbalování navigace pro mobil
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

document.querySelector('#nav-btn').addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
});

// objednávání nápojů
const orderBtn = document.querySelector(".order-btn")
const drinkCupElm = document.querySelector(".drink__cup")
let ordered = false

orderBtn.addEventListener("click", () => {
if (ordered === false) {
    drinkCupElm.classList.add(".drink__cup--selected")
    orderBtn.textContent = "Zrušit"
    ordered = true
  } else {
    drinkCupElm.classList.remove(".drink__cup--selected")
    orderBtn.textContent = "Objednat"
    ordered = false
  }
})