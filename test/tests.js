import './make-user.test.js';
import './api.test.js';



const test = QUnit.test;
test ('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 'Hey';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = 'Hey';
    //Assert
    assert.equal(expected, result);
});