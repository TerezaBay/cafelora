import './index.html';
import './style.css';

// import { LayerList } from './Layer_LayerList/script.js';
import { Drink } from './Drink/script.js';
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

(DrinkList({items: drinkMeta}));


