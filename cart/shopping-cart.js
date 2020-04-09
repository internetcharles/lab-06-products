import { findById, calcOrderTotal } from '../common/utils.js';
import shoes from '../data/shoes.js';
import cart from '../data/cart.js';
import renderTableRow from './renderLineItems.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const shoe = findById(shoes, cartItem.id);
    const dom = renderTableRow(cartItem, shoe);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, shoes);
orderTotalCell.textContent = orderTotal;
