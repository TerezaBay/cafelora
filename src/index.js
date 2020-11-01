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

// komponenty pro ingredience
const Layer = (props) => {
  return `
  <div class="layer">
      <div
        class="layer__color"
        style="background-color: ${props.color}"
      ></div>
    <div class="layer__label">${props.label}</div>
  </div>`
}

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

const LayerList = (props) => {
  let result = ""

  props.items.forEach((item) => {
    result += Layer(item);
  })
  return result
}

document.querySelector(".drink__info").innerHTML += LayerList({items: drinkMeta})
