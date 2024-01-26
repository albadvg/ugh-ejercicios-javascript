//variables
const baseUrl = 'https://api.nationalize.io?name=';
const searchButton$$ = document.querySelector('button');

//consultas
// const consultaApi = async () => {
//     const myInputTxt = document.querySelector('input').value;
//     const firstResponse = await fetch(`${baseUrl}${myInputTxt}`);
//     const data = await firstResponse.json();

//     pintarDatos(data);
// }

const consultaApi = () => {
    const myInputTxt = document.querySelector('input').value;
    fetch(`${baseUrl}${myInputTxt}`)
        .then(res => res.json())
        .then(resJsn => pintarDatos(resJsn));
}

const pintarDatos = (data) => {
    let myP$$ = document.createElement('p');
    myP$$.textContent = `El nombre ${data.name} se da`;

    for (let i = 0; i < data.country.length; i++) {
        const obj = data.country[i];
        if(i !== 0) {
            myP$$.textContent += ` y `;
        }

        myP$$.textContent += ` en un ${obj.probability} porciento de la población de ${obj.country_id}`          
    }
    document.body.appendChild(myP$$);
}


//eventos
searchButton$$.addEventListener('click', consultaApi);