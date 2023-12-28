async function getFilms() {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    return await response.json();
}

function paintFilms(films) {
    const filmsContainer$$ = document.querySelector('.films');
    films.forEach(film => {
        const film$$ = document.createElement('div');
        film$$.innerHTML = `
            <h3 class="film__title">${film.title}</h3>
            <img src="${film.image}" class="film__img">
        `
        filmsContainer$$.appendChild(film$$);
    })
}

async function init() {
    const films = await getFilms();
    paintFilms(films);
}

init();