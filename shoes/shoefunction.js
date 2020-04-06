import shoes from '../data/shoes.js';
import renderShoe from './renderShoe.js';

const list = document.getElementById('shoes');

for (let i = 0; i < shoes.length; i++) {
    const shoe = shoes[i];
    const el = renderShoe(shoe);
    list.appendChild(el);
}