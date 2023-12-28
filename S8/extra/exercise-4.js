const filterInput$$ = document.querySelector('input');

const getCharacters = async () => {
    try {
        let response = await fetch('http://localhost:3000/characters');
        let characters = await response.json();
        return characters;
    } catch (error) {
        console.log(error);
    }
}

const getPlanets = async () => {
    try {
        let response = await fetch('http://localhost:3000/planets');
        let planets = await response.json();
        return planets;
    } catch (error) {
        console.log(error);
    }
}

const paintPlanets = async (planets) => {
    for (const planet of planets) {
        const planetsDiv$$ = document.querySelector('[data-function="planets"]');
        const planetDiv$$ = document.createElement('div');
        const planetName$$ = document.createElement('h2');
        const planetImg$$ = document.createElement('img');

        planetName$$.textContent = planet.name;
        planetImg$$.setAttribute('src', planet.image);
        planetImg$$.setAttribute('planetId', planet.id);
        planetImg$$.style.width = '300px';

        planetDiv$$.appendChild(planetName$$);
        planetDiv$$.appendChild(planetImg$$);
        planetsDiv$$.appendChild(planetDiv$$);

        let planetCharacters = await getPlanetCharacters(planet.id);
        planetImg$$.addEventListener('click', () => paintCharacters(planetCharacters));
        filterInput$$.addEventListener('input', () => filterCharacters(filterInput$$.value, planetCharacters));
    }   
}

const getPlanetCharacters = async (planetId) => {
    try {
        let response = await fetch(`http://localhost:3000/characters?idPlanet=${planetId}`);
        let planetCharacters = await response.json();
        return planetCharacters;

    } catch (error) {
        console.log(error);
    }   
    
}

const paintCharacters = async (planetCharacters) => {
    const characterGallery$$ = document.querySelector('[data-function="characters"]');
    characterGallery$$.innerHTML = '';
    
    for(const character of planetCharacters) {
        const characterDiv$$ = document.createElement('div');
        const characterName$$ = document.createElement('h5');
        const characterImg$$ = document.createElement('img');

        characterName$$.textContent = character.name;
        characterImg$$.setAttribute('src', character.avatar);

        characterDiv$$.appendChild(characterName$$);
        characterDiv$$.appendChild(characterImg$$);
        characterGallery$$.appendChild(characterDiv$$);
    }

}

const filterCharacters = (input, charactersToFilter) => {
    console.log(charactersToFilter);
    let filteredCharacters = charactersToFilter.filter((char) => {
        char.name.toLowerCase().includes(input.toLowerCase());
    })

    paintCharacters(filteredCharacters);
}

const init = async () => {
    const characters = await getCharacters();
    const planets = await getPlanets();

    paintPlanets(planets);

}

init();