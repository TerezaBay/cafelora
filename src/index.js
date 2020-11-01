import './index.html';
import './style.css';

import {Layer} from "./Layer_LayerList";
import {LayerList} from "./Layer_LayerList";

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

// objednávání nápojů - funkčnost tlačítka
const orderBtn = document.querySelector(".order-btn")
const drinkCupElm = document.querySelector(".drink__cup")
let ordered = false

orderBtn.addEventListener("click", () => {
drinkCupElm.classList.toggle("drink__cup--selected")
if (ordered === false) {
    orderBtn.textContent = "Zrušit"
  } else {
    orderBtn.textContent = "Objednat"
  }
  ordered = !ordered
})

// data pro Layer a LayerList
const drinkMeta = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  }
];

document.querySelector(".drink__info").innerHTML += LayerList({items: drinkMeta})

// 