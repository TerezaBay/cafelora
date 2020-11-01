import './index.html';
import './style.css';

// import { LayerList } from './Layer_LayerList/script.js';
import { DrinkList } from './Drink/script.js';

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

// načtení API se seznamem nápojů a jejich předání komponentě DrinkList
const fetchDrinks =() => {
  fetch("http://cafelora.kodim.cz/api/drinks").then((response) => response.json()).then((data) => {
  DrinkList({items: data})
  })
} 

fetchDrinks()
