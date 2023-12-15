const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let body$$ = document.querySelector('body');
let countriesList$$ = document.createElement('ul');

for (const country of countries) {
    let countryItem$$ = document.createElement('li');
    countryItem$$.textContent = country;
    countriesList$$.appendChild(countryItem$$);
}

body$$.appendChild(countriesList$$);