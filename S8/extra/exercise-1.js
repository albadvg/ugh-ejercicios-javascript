const getCharacters = async () => {
    const firstResponse = await fetch('https://hp-api.onrender.com/api/characters');
    const charactersJson = await firstResponse.json();

    for(const character of charactersJson) {
        paintCharacters(character);
        
    }
}

const paintCharacters = (character) => {
    const card$$ = document.createElement('div');
    const name$$ = document.createElement('h2');
    const image$$ = document.createElement('img');

    name$$.textContent = character.name;
    image$$.setAttribute('src', character.image);
    card$$.appendChild(name$$);
    card$$.appendChild(image$$);
    document.body.appendChild(card$$);
}

getCharacters();