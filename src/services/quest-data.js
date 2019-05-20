const bigClassroom = {
    id: 'bigClassroom',
    title: 'Big Classroom',
    image: 'classroom.jpg',
    imageAlt: 'Alchemy classroom',
    description: `
        The class is silent. Everyones eyes are like dagres penetrating
        your inner workings. There's a noise coming from the corner of the
        room. As if someones scratching their nails on a chalkboard. Peculiar 
        because there isn't a single chalkboard in all of Portland, Oregon.
    `,
    choices: [{
        id: 'investigate',
        choice: 'You decide to be the good Samaritan and see what is going on',
        result: `
            Turns out it was the canine earthling, gnawing on the metal
            leg of the recliner. As you approach to chase away the animal,
            the animal starts growling. You tell it to leave which makes it
            even angrier. It lunges at you, and clings on to your right
            pointer finger. You spill your coffee. All the school faculty is
            angry at you for agitating the thing. After a very serious board
            meeting it is decided the school will be better off without you.
            Your career is ruined because you don't have an education and
            now you can't even type anymore from the finger injury.
        `,
        grade: -78,
        coffee: 0
    }, {
        id: 'ignore',
        choice: 'Ignore all the stares and take it like a MAN!!!!',
        result: `
            You take all the stares like a man. Let someone else deal with
            it. You have more important things to do then to get distracted
            by petty sounds coming from the corner of the room. Some people
            may be a tad irratated, lowering your grade a tad but you get
            time to code a sick new program that will compete against the
            Adobe Creative Suite. Now you also have some free time to load
            up on coffee. 
        `,
        grade: -7,
        coffee: 4
    }, {
        id: 'getHelp',
        choice: 'Transfer all the attention to your neighbor and ask him to check it out',
        result: `
            Your closest neighbor seems like a great target to transfer all
            the attention to. After semi kindly asking them to scout out the
            disturbance they find that its the local hairy canine friend gnawing
            at the metal recliner leg. They take care of all the business and
            now they're a hero. You on the other hand are now a nobody. You
            do get a raise in your grade for getting someone to help in the
            situation. You only gain one cup of coffee though so you won't be
            terribly awake in class and will learn a bit less.
        `,
        grade: 17,
        coffee: 1
    }]
};

const kitchen = {
    id: kitchen,
    title: 'Kitchen',
    image: 'kitchen.jpg',
    imageAlt: 'Alchemy kitchen',
    description: `
        Sitting right there in front of you is one big juicy gronola bar. The
        nice and chewy one with a bit of crunch from the almonds. It's been a
        long day of staring at cursor move accross the screen. Blinking occsiionally, 
        on the dark background when it decides to take a break. Everyone else
        is preoccupied and has no knowledge of the treasure sitting on the kitchen 
        table.
    `,
    choices: [{
        id: 'eat',
        choice: 'Your tastebuds just couldn\'t resist the treat. You devour it in 7 seconds',
        result: `
            In the process you don't even notice how much noise you made with the
            whole ordeal. Everyone is staring at you now. You even cought the
            attention of the quite but hungry canine, once friend. Megan comes
            running in shouting, "Did someone take my granola bar?!" It is decided
            for such a heinous act you are allowed to stay but the whole teaching
            crew is now biased against you and every assignment just happens to
            lose points for the most unorthodox things like a 3 space tab instead
            of 4 spaces. While you were in the kitchen you did manage to get
            yourself loaded on 2 cups of coffee though.
        `,
        grade: -4,
        coffee: 2
    }, {
        id: 'ask',
        choice: 'You\'re such a kind soul and ask around till you find the owner',
        result: `
            You find the owner after searching for 15 minutes. Turns out it is
            one of the TA's birthday's. Megan decided to treat them to a world
            class granola bar. You are saved from the misery of being shamed for
            eating someone elses food. Everyone is happy so you get a boost to your
            grade. You get a great boost to your morale so you go get yourself two
            cups of coffee.
        `,
        grade: 14,
        coffee: 2
    }, {
        id: 'ignore',
        choice: 'You leave it right where you saw it and get back to your work',
        result: `
            The granola bar wont turn you into a thief. You're better then that.
            You get 4 cups of coffee, and get a lot of work done. Nobody really
            cares you're getting a lot of progress in you school work. So the grade
            boost isn't anything to brag about.
        `,
        grade: 7,
        coffee: 4
    }]
};

const shannonsOffice = {
    id: 'shannonsOffice',
    title: 'shannons-office.jpg',
    image: 'imageToCome',
    imageAlt: 'Shannons office at Alchemy',
    description: `
        Sitting silently, you wonder, what your reply shall be. She just spent the
        last 11 minutes straight lecturing you about something and everything just
        flew over your head. You can't help it that the new unicycle you ordered,
        arrived yesterday. Its sitting at home, luring your thoughts away from the
        conversation at hand. What will your reply be?
    `,
    choices: [{
        id: 'quit',
        choice: `
            All this schooling is too much for you. You throw all the papers in
            the air, and walk out screaming, "I don't need no education!!! Shannon!!
            please leave me alone!!!!!
        `,
        result: `
            It was quite a scene to say the least. You inspired another 3 students to
            follow lead and and drop out as well. This did not play well with the faculty.
            Your grade went down 7 letter grades. To add to all this chaos you now also
            owe the school 9 cups of coffee. When you threw all the papers in the air,
            some ended up finding a landing site in the local coffee maker. It had 9
            cups of coffee in it.
        `,
        grade: -70,
        coffee: -7
    }, {
        id: 'yeah',
        choice: `
            After giving it a few seconds of thought, you decide the conversation
            was about the networking event next week at the local geeks who drink
            social hour. Hey, who can give up such an oppertunity. You get up to your
            feet and announce, "Absolutely!" I am for sure going to that event.
        `,
        result: `
            Unfortunetly, your guess for the topic of conversation was as good as
            chopsticks for paddles in a white water rafting excursion. Thankfully,
            since you were so far away from the truth, she takes it as a bad joke.
            She again asks you about how your linkedin profile is coming along.
            You tell her your profile picture is of you on a unicycle. She doesn't
            give you a grade boost but doesn't lower your grade either. You do end
            up having to get her one cup of coffee for such a lame joke
        `,
        grade: 0,
        coffee: -1
    }, {
        id: 'no',
        choice: `
            "Are you out of your mind? Like really what kind of person would even
            suggest such a thing?!" That is your reply to her.
            `,
        result: `
            Both of you stand there staring at each other? Then she breaks the
            akwardness and asks, "Whats wrong with the linkedin profile?" You get
            yourself out of the pickle by telling her, "Oh but this is serious! The
            linkedin profile isn't just all you said. It is much more! It is the
            pedestal of importance in getting a job." She praises you for taking it
            so seriously. A boost in your grade is well deserved for engineering your
            way out of that one. She even gives you two cups of coffee for that reply.
        `,
        grade: 18,
        coffee: 2
    }]
};

const careerPaths = [bigClassroom, kitchen, shannonsOffice];

export default careerPaths;