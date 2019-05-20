import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');

api.storage = sessionStorage;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test ('time to test a function', function(assert) {
    //Arrange
    const user = {
        name: 'John',
        title: 'laptop',
        grade: 87,
        coffee: 2
    };
    //Act 
    api.signUp(user);
    const result = api.getUser();

    //Assert
    assert.deepEqual(result, user);
});