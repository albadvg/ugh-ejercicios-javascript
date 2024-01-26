async function getCharacters () {
    let firstResponse = await fetch('https://rickandmortyapi.com/api/character')
    let dataResponse = await firstResponse.json();
    
    console.log(dataResponse);

}

getCharacters();