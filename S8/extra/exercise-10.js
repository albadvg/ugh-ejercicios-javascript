const getCharacters = async (page) => {
    const response = await fetch(`http://localhost:3000/characters?_page=${page}&_limit=5`);
    const characters = await response.json();

    paintCharacters(characters);
}

const paintCharacters = (characters) => {
    const gallery$$ = document.querySelector('.b-gallery');
    characters.forEach(char => {
        const character$$ = document.createElement('div');
        character$$.classList.add('b-gallery__item');
        character$$.innerHTML = `
            <h3 class="b-gallery__text">${char.name}</h3>
            <img class="b-gallery__img" src="${char.image}">
        `
        gallery$$.appendChild(character$$);
    })
}

const init = async () => {  
    let page = 1;
    getCharacters(page);

    const moreBtn$$ = document.querySelector('.b-btn');
    moreBtn$$.addEventListener('click', () => { 
        page++; 
        getCharacters(page);
        if(page == 5) {
            moreBtn$$.remove();
        } 
    });
}

init();