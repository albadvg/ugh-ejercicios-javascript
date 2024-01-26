//variables
const baseUrl = 'https://api.nationalize.io?name=';
const searchButton$$ = document.querySelector('button');

//consultas
const consultaApi = () => {
    const myInputTxt = document.querySelector('input').value;
    fetch(`${baseUrl}${myInputTxt}`)
        .then(res => res.json())
        .then(resJsn => pintarDatos(resJsn));
}


const pintarDatos = (data) => {
    let myP$$ = document.createElement('p');
    let deleteButton$$ = document.createElement('button');

    myP$$.textContent = `El nombre ${data.name} se da`;
    deleteButton$$.textContent = 'X';
    deleteButton$$.addEventListener('click', (e) => {
        e.target.previousElementSibling.remove();
        e.target.remove();
    });

    for (let i = 0; i < data.country.length; i++) {
        const obj = data.country[i];
        if(i !== 0) {
            myP$$.textContent += ` y `;
        }

        myP$$.textContent += ` en un ${obj.probability} porciento de la población de ${obj.country_id}`          
    }

    document.body.appendChild(myP$$);
    document.body.appendChild(deleteButton$$);
}


//eventos
searchButton$$.addEventListener('click', consultaApi);