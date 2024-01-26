//variables
const baseUrl = 'https://api.nationalize.io?name=';
const searchButton$$ = document.querySelector('button');

//consultas
//OPCIÓN 1
const consultaApi = () => {
    const myInputTxt = document.querySelector('input').value;
    fetch(`${baseUrl}${myInputTxt}`)
        .then(res => res.json())
        .then(resJsn => console.log(resJsn));
}


//OPCIÓN 2
// const consultaApi = async () => {
//     const myInputTxt = document.querySelector('input').value;
//     const firstResponse = await fetch(`${baseUrl}${myInputTxt}`);
//     const data = await firstResponse.json();

//     console.log(data);
// }

//eventos
searchButton$$.addEventListener('click', consultaApi);