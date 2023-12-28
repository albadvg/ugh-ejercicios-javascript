const callBtn$$ = document.querySelector('.call');
callBtn$$.addEventListener('click', callACat);

async function callACat() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const cat = await response.json();
    paintACat(cat[0]);
}

function paintACat(cat) {
    const gallery$$ = document.querySelector('.b-gallery');
    const cat$$ = document.createElement('div');
    cat$$.classList.add('b-gallery__item')
    cat$$.innerHTML = `
        <img class="b-gallery__img" src="${cat.url}">
        <button class="b-gallery__delete">Borrar</button>
    `
    gallery$$.appendChild(cat$$);

    const delete$$ = cat$$.querySelector('.b-gallery__delete');
    delete$$.addEventListener('click', () => cat$$.remove());
}

