import { calcLineItem } from '../common/utils.js';

const test = QUnit.test;

QUnit.module('Calc Line Total');

test('time to test calclinetotal', assert => {
    //Arrange
    // Set up your parameters and expectations
    const p = 15.43;
    const q = 6;

    const expected = 92.58;
    //Act 
    // Call the function you're testing and set the result to a const

    const dom = calcLineItem(q, p);
    //Assert 
    // Make assertions about what is expected valid result
    assert.equal(dom, expected);
});