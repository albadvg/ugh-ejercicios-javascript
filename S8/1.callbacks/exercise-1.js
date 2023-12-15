const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, func){
    numbersList.push(func(a, b));
}

father(8 , 9 , sum);
father(7 , 6 , substract);
father(7 , 6 , substract);
father(200, 42, sum);

console.log(numbersList);
