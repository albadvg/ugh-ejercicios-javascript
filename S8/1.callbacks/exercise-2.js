const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, cBFunc){
    let answer = cBFunc(description);
    userAnwsers.push(answer);
}

console.log(father('escribe algo', promptExample));
console.log(father('confirma', confirmExample));
console.log(father('escribe algo', promptExample));


console.log(userAnwsers);
