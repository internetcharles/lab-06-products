export function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        let objectId = array[i].id;
        if (objectId === id) {
            return objectId;
        }
    }
    return null;
}

export function calcLineItem(quantity, price) {
    let totalPrice = quantity * price;
    let roundPrice = Math.round(totalPrice * 100) / 100;
    return roundPrice;
}