// OPCIÓN 1

fetch('https://api.agify.io?name=michael')
    .then(response => response.json())
    .then(resJson => console.log(resJson));



//OPCIÓN 2

// const recibirDatos = async () => {
//     let firstResponse = await fetch('https://api.agify.io?name=michael');
//     let jsonResponse = await firstResponse.json();

//     console.log(jsonResponse);
// }

// recibirDatos();