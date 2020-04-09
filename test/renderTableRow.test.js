
// IMPORT MODULES under test here:
function calcLineItem(quantity, price) {
    let totalPrice = quantity * price;
    let roundPrice = Math.round(totalPrice * 100) / 100;
    return roundPrice;
}

function renderTableRow(cartItem, shoe) {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.textContent = shoe.name;
    nameTd.classList.add('align-left');

    const priceTd = document.createElement('td');
    priceTd.textContent = shoe.price;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const totalTd = document.createElement('td');
    totalTd.textContent = calcLineItem(cartItem.quantity, shoe.price);
    totalTd.classList.add('line-item-total');

    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(quantityTd);
    tr.appendChild(totalTd);

    return tr;
}

const test = QUnit.test;

QUnit.module('Render table row');

test('time to test rendertablerow', assert => {
    //Arrange
    // Set up your parameters and expectations
    const nikeAirMax = {
        id: 'nikeAirMax',
        name: 'Nike Air Max',
        image: 'nikeairmax.jpg',
        description: 'A Nike Air Max left shoe. We lost the other one.',
        category: 'running',
        price: '30.00',
        cost: '5.00',
    };

    const cartItem = {
        id: 'nikeAirMax',
        quantity: 5
    };

    const expected = '<tr><td class="align-left">Nike Air Max</td><td>30.00</td><td>5</td><td class="line-item-total">150</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderTableRow(cartItem, nikeAirMax);
    const html = dom.outerHTML;

    //Assert 
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
