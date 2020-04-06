// IMPORT MODULES under test here:
import renderShoe from '../shoes/renderShoe.js';

const test = QUnit.test;

QUnit.module('Render Shoe');

test('time to test rendershoe', assert => {
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

    const expected = '<li class="running"><h3 class="name">Nike Air Max</h3><img src="../images/nikeairmax.jpg"><p class="description">A Nike Air Max left shoe. We lost the other one.</p><p2 class="price">$30.00<button value="nikeAirMax" class="button">Add</button></p2></li>';
    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderShoe(nikeAirMax);
    const html = dom.outerHTML;

    //Assert 
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});
