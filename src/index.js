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

// pole s údaji pro jednotlivé nápoje pro komponenty Layer, LayerList, Drink a DrinkList
const drinkMeta = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
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
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

// načtení API se seznamem nápojů a jejich předání komponentě DrinkList
const fetchDrinks =() => {
  fetch("http://cafelora.kodim.cz/api/drinks").then((response) => response.json()).then((data) => {
  DrinkList({items: data})
  })
} 

fetchDrinks()
