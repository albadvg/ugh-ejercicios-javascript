function rollDice(caras) {
    return Math.floor(Math.random() * caras) + 1;
}

let tirada = rollDice(6);
console.log(tirada)