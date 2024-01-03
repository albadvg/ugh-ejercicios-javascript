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
    const planetsDiv$$ = document.querySelector('[data-function="planets"]');
    for (const planet of planets) { 
        console.log(planet)   
        const planetDiv$$ = document.createElement('div');
        planetDiv$$.classList.add('planet');
        planetDiv$$.setAttribute('idPlanet', `${planet.id}`);
        planetDiv$$.innerHTML= `
            <h2 class="planet__name">${planet.name}</h2>
            <img class="planet__img" src="${planet.image}">
        `
        planetsDiv$$.appendChild(planetDiv$$);

        let planetCharacters = await getPlanetCharacters(planet.id);
        planetDiv$$.addEventListener('click', (e) => {
            document.querySelectorAll('.planet').forEach(p => p.classList.remove('current'));
            planetDiv$$.classList.add('current');
            paintCharacters(planetCharacters, planet.id);     

        });
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

const paintCharacters = async (planetCharacters, planetId) => {   
    console.log(planetId)
    const characterGallery$$ = document.querySelector('[data-function="characters"]');
    characterGallery$$.innerHTML = '';
    for(const character of planetCharacters) {
        const characterDiv$$ = document.createElement('div');
        characterDiv$$.classList.add('character');
        characterDiv$$.setAttribute('idPlanet', `${planetId}`);

        characterDiv$$.innerHTML = ` 
            <img class="character__img" src="${character.avatar}">
            <h4 class="character__name">${character.name}</h4>
        `
        characterGallery$$.appendChild(characterDiv$$);
    }
}

const filterCharacters = (input, characters) => {
    const currentPlanet = document.querySelector('.current').getAttribute('idPlanet');

    console.log(currentPlanet);
    console.log(input);
    console.log(characters);
    let filteredCharacters = characters.filter((char) => {
        return char.idPlanet === currentPlanet
    })
    paintCharacters(filteredCharacters);
}

const init = async () => {
    const characters = await getCharacters();
    const planets = await getPlanets();

    paintPlanets(planets);

    
    const filterInput$$ = document.querySelector('input');
    filterInput$$.addEventListener('input', () => filterCharacters(filterInput$$.value, characters));
}

init();