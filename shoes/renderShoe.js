import { findById } from '../common/utils.js';

function renderShoe(shoes) {
    const li = document.createElement('li');
    li.className = shoes.category;

    const h3 = document.createElement('h3');
    h3.textContent = shoes.name;
    h3.className = 'name';
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../images/' + shoes.image;
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'description';
    p.textContent = shoes.description;
    li.appendChild(p);

    const p2 = document.createElement('p2');
    p2.className = 'price';

    const usd = '$' + shoes.price;
    p2.textContent = usd;
    li.appendChild(p2);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = shoes.id;
    button.className = 'button';
    button.addEventListener('click', () => {

        // variable for cart in local storage
        let cartInLocalStorage = localStorage.getItem('CART');
        //variable for JS cart
        let cart;
        // checks for cart in local storage
        if (cartInLocalStorage) {
            //JSON turns string cart into an object
            cart = JSON.parse(cartInLocalStorage);
        }
        else {
            // if no cart, empty cart is made
            cart = [];
        }

        // so now cart exists either as it was or newly created
        let itemInCart = findById(cart, shoes.id);

        if (!itemInCart) {
            itemInCart = {
                id: shoes.id,
                quantity: 1
            };

            // push a itemInCart into the cart
            cart.push(itemInCart);
        }
        else {
            // or add to the quantity
            itemInCart.quantity++;
        }

        // convert shopping cart to string
        const stringCart = JSON.stringify(cart);
        // add to local storage
        localStorage.setItem('CART', stringCart);

        // alert user of new addition
        alert('1 ' + shoes.name + ' added to your cart');

    });

    p2.appendChild(button);

    return li;
}

export default renderShoe;