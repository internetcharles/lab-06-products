export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function calcLineItem(quantity, price) {
    let totalPrice = quantity * price;
    let roundPrice = Math.round(totalPrice * 100) / 100;
    return roundPrice;
}

export function calcOrderTotal(cart, shoes) {
    let orderTotal = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const shoe = findById(shoes, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, shoe.price);
        orderTotal += lineTotal;
    }

    return orderTotal;
}