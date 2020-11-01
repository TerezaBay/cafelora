// komponenta Drink
import './style.css';
import { LayerList } from '../Layer_LayerList/script.js';

export const Drink = (props) => {
  const drinkDiv = document.createElement('div');
  drinkDiv.className = 'drink';
  drinkDiv.innerHTML = `
  <div class="drink__product">
  <div class="drink__cup">
  <img src="/assets/cups/${props.id}.png" />
  </div>
  <div class="drink__info">
  <h3>${props.name}</h3> ${LayerList({ items: props.layers })}
  </div>
  </div>
  <div class="drink__controls">
  <button class="order-btn">Objednat</button>
  </div>`;

  // objednávání nápojů - funkčnost tlačítka
  const orderBtn = drinkDiv.querySelector('.order-btn');
  const drinkCupElm = drinkDiv.querySelector('.drink__cup');

  orderBtn.addEventListener('click', () => {
    drinkCupElm.classList.toggle('drink__cup--selected');
    if (props.ordered === false) {
      orderBtn.textContent = 'Zrušit';
    } else {
      orderBtn.textContent = 'Objednat';
    }
    props.ordered = !props.ordered;
  });

  return drinkDiv;
};
