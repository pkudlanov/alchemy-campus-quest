import makeUser from '../src/home/make-user.js';

const test = QUnit.test;

QUnit.module('make user');

test('create user object from form data', (assert) => {
    // arrange
    const formData = new FormData();

    formData.set('name', 'William');
    formData.set('title', 'Teacher');

    // act
    const user = makeUser(formData);

    // assert
    assert.deepEqual(user, {
        name: 'William',
        title: 'Teacher',
        grade: 83,
        coffee: 2
    });
});
