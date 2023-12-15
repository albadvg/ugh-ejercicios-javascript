const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

const pequeñas = [];
const medianas = [];
const grandes = [];

for(let i = 0; i < movies.length; i++) {
    if(movies[i].durationInMinutes < 100) {
        pequeñas.push(movies[i]);
    } else if(movies[i].durationInMinutes < 200 ) {
        medianas.push(movies[i])
    } else {
        grandes.push(movies[i]);
    }
}

console.log('pelis pequeñas:' , pequeñas);
console.log('pelis medianas:' , medianas);
console.log('pelis grandes' , grandes);