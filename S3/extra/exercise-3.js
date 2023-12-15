const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let body$$ = document.querySelector('body');
let divToPrint$$ = document.querySelector('div[data-function="printHere"');

let carList$$ = document.createElement('ul');

for (let car of cars) {
    let carItem$$ = document.createElement('li');
    carItem$$.textContent = car;
    carList$$.appendChild(carItem$$);
}

body$$.appendChild(carList$$);