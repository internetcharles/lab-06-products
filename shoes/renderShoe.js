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
    p2.appendChild(button);

    return li;
}

export default renderShoe;