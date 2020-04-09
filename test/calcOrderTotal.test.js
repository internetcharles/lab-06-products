import shoes from '../data/shoes.js';
import cart from '../data/cart.js';
import { calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;

QUnit.module('Render Shoe');

test('time to test calcOrderTotal', assert => {

//Arrange
// Set up your parameters and expectations
    const expected = 17203;

    //Act 
    // Call the function you're testing and set the result to a const

    const dom = calcOrderTotal(cart, shoes);

    //Assert 
    // Make assertions about what is expected valid result
    assert.equal(dom, expected);
});