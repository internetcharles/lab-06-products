function findById(array, id) {
    for (let i = 0; i < array.length; i++) {
        let objectId = array[i].id;
        if (objectId === id) {
            return objectId;
        }
    }
    return null;
}

const test = QUnit.test;

QUnit.module('Find by ID');

test('time to test findbyid', assert => {
    //Arrange
    // Set up your parameters and expectations
    const cart = [{
        id: 'yeezy',
        quantity: 5
    }, {
        id: 'fieriChucks',
        quantity: 8
    }, {
        id: 'oldBoot',
        quantity: 2
    }, {
        id: 'tissueBox',
        quantity: 3
    }];

    const cart2 = [{
        id: 'shoe'
    }];

    const expected = 'oldBoot';
    const expected2 = null;
    //Act 
    // Call the function you're testing and set the result to a const

    const dom = findById(cart, 'oldBoot');
    const dom2 = findById(cart2, 'oldBoot');
    //Assert 
    // Make assertions about what is expected valid result
    assert.equal(dom, expected);
    assert.equal(dom2, expected2);
});

