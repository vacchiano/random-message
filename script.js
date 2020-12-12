console.log('test');


let choice0 = [
    'Cowboy',
    'Astronaut',
    'Firefighter',
    'Football Player',
    'Teacher',
    'Nurse',
    'Scientist'
];

let choice1 = [
    'California',
    'New York',
    'Kansas City',
    'Canada',
    'Italy',
    'France',
    'Chicago',
    'Miami',
    'Bahamas'
];

let choice2 = [
    '$25,000',
    '$50,000',
    '$75,000',
    '$100,000',
    '$125,000',
    '$150,000',
    '$1,000,000 (JACKPOT!!!)',
];

let choices = [choice0, choice1, choice2];

const randInt = max => {
    return Math.floor(Math.random() * max + 1);
};

// console.log(randInt(4));

const formMessage = (wrd1, wrd2, wrd3) => {
    return `You will be a ${wrd1} in ${wrd2} making ${wrd3} per year!`
};

const rollDice = () => {
    let words = [];
    for (let i=0; i<3; i++) {
        // console.log(choices);
        words.push(choices[i][randInt(choices[i].length-1)]);
    }
    return formMessage(words[0], words[1], words[2]);
};


console.log(rollDice());