import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.module('create quest link');

test ('creates correct html', (assert) => {
    const quest = { 
        id: 'bigClassroom',
        image: 'classroom.jpg',
        imageAlt: 'Alchemy classroom'
    };

    const expected = '<a class="quest" href="quest.html?id=bigClassroom"><img src="./assets/classroom.jpg" alt="Alchemy classroom" width="300px"></a>';

    const dom = createQuestLink(quest);

    assert.equal(dom.outerHTML, expected);
});

{/* <main>
<h2>Which Room Will You Choose?</h2>
<p class="quest-links-container">
        <a href="./quest.html"><img src="./assets/classroom.jpg" alt="Alchemy classroom" width="300px"></a>

        <a href="./quest.html"><img src="./assets/kitchen.jpg" alt="Alchemy kitchen" height="300px"></a>

        <a href="./quest.html"><img src="./assets/shannons-office.jpg" alt="shannons-office at Alchemy" width="300px"></a>
</p>
<a href="./">Home Page</a>
</main> */}