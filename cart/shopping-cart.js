import { findById, calcOrderTotal } from '../common/utils.js';
import shoes from '../data/shoes.js';
import renderTableRow from './renderLineItems.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

const cartInLocalStorage = localStorage.getItem('CART');
let cart;
// check for local storage cart
if (cartInLocalStorage) {
    // string to parse
    cart = JSON.parse(cartInLocalStorage);
}
else {
    //initialize
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    const shoe = findById(shoes, cartItem.id);
    const dom = renderTableRow(cartItem, shoe);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, shoes);
orderTotalCell.textContent = orderTotal;

// add validator for cart
if (cart.length === 0 ) {
    placeOrderButton.disabled = true;
}
else {
    // adds event listener if cart has objects
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        // true, 2 to make prettier
        alert('Shoes ordered: ' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}