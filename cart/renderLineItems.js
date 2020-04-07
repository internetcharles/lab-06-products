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

}

export default renderTableRow;