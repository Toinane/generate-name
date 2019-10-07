const firstnames = require('./assets/firstname.json');
const lastnames = require('./assets/lastname.json');

const randomize = list => {
    const number = Math.floor(Math.random() * Math.floor(list.length));

    return list[number];
}

module.exports = {
    first: () => randomize(firstnames),
    last: () => randomize(lastnames)
}