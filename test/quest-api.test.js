import questApi from '../src/map/quest-api.js';
const test = QUnit.test;

QUnit.module('create quest link');

test ('creates correct html', (assert) => {
    const quest = { 
        id: 'bigClassroom',
        image: 'classroom.jpg',
        imageAlt: 'Alchemy classroom'
    };

    const expected = '<a class="quest" href="quest.html?id=bigClassroom"><img src="./assets/classroom.jpg" alt="Alchemy classroom" width="300px"></a>';

    const dom = questApi.createQuestLink(quest);

    assert.equal(dom.outerHTML, expected);
});