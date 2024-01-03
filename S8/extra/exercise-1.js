const getCharacters = async () => {
    const firstResponse = await fetch('https://hp-api.onrender.com/api/characters');
    const charactersJson = await firstResponse.json();
    
    paintCharacters(charactersJson);
}

const paintCharacters = (characters) => {
    const container$$ = document.querySelector('.container');

    characters.forEach(char => {
        const card$$ = document.createElement('div');
        card$$.classList.add('card');
        card$$.innerHTML = `
            <div class="card-front">
                <h2 class="card__name">${char.name}</h2>
                <img class="card__img" src="${char.image}">
            </div>
            <div class="card-back flip card-back--${char.house}">
                <ul class="card-back-list">
                    <li class="card__li">House: ${char.house}</li>
                    <li class="card__li">Species: ${char.species}</li>
                    <li class="card__li">Patronus: ${char.patronus}</li>
                    <li class="card__li">Wand: <br> 
                        core: ${char.wand.core} <br>
                        wood: ${char.wand.wood}
                    </li>
                </ul>
            </div>
            
        `
        card$$.addEventListener('click', (e)=> flipCard(e));
        container$$.appendChild(card$$);
    });
    
}

const flipCard = (e) => {
    e.currentTarget.children[0].classList.toggle('flip');
    e.currentTarget.children[1].classList.toggle('flip');

}

const init = () => {
    getCharacters();
}

init();
