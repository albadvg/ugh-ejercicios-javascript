async function getCharacters() {
    const characters = await fetch('http://localhost:3000/characters');
    return characters.json();
}

function paintCharacters(characters) {
    const container$$ = document.querySelector('.c-characters');

    characters.forEach(char => {
        const character$$ = document.createElement('div');
        character$$.classList.add('c-characters__item');

        character$$.innerHTML = `
            <h2 class="char__name">${char.name}</h2>
            <img src="${char.avatar}" class="char__img">
            <div class="char-features">
                <p class="char__critic">Critic: ${char.critic}</p>
                <p>Damage:</p>
                <ul class="char-dmg">
                    ${char.damage.map(dmg => `<li class="char-dmg__value">${dmg}</li>`).join('')}
                </ul>
                <p class="char__defense">Defense: ${char.defense}</p>
                <p class="char__vitality">Vitality: ${char.vitality}</p>
            </div>     
        `
        container$$.appendChild(character$$);
        
        character$$.querySelector('.char__img').addEventListener('click', (e) => selectChar(e.currentTarget, char));
    });
}

const selectedChars = [];
function selectChar(selectedImg, char) {
    if(selectedChars.length < 2) {
        const selected = selectedImg.parentNode;
        console.log(selected)
        selectedChars.push(char);
        selected.classList.add('selected');
    }
    
    if(selectedChars.length === 2 && !document.querySelector('.fight-btn')) {

        const arena$$ = document.querySelector('[data-function="arena"]');
        const fightBtn$$ = document.createElement('button');
        fightBtn$$.classList.add('fight-btn');

        fightBtn$$.textContent = 'Fight';
        fightBtn$$.addEventListener('click', (e) => fight(e));
        arena$$.appendChild(fightBtn$$);
    }
}

function fight(e) {
    //quitar boton 'Fight!' una vez pulsado
    e.target.remove();

    //eliminar personajes no seleccionados
    document.querySelectorAll('.c-characters__item').forEach(char => !char.classList.contains('selected') && char.remove());


    document.querySelectorAll('.selected').forEach(char => {
        const playBtn$$ = document.createElement('button');
        playBtn$$.classList.add('play-btn');
        playBtn$$.textContent = 'PLAY';
        playBtn$$.addEventListener('click', () => calcDamage(char));
        char.appendChild(playBtn$$);
    })
}

function calcDamage(char) {
    const damage = char.querySelectorAll('.char-dmg__value');

    //tiradas de dados
    let totalDamage = 0;
    const critic = char.querySelector('.char__critic').textContent;
    damage.forEach(dmg => {
        const tiradaDmg = throwDice(dmg.textContent, critic);
        totalDamage += tiradaDmg;
    });

    //aplicar defensa oponente 
    const opponent = selectedChars.find(c => c.name != char.querySelector('.char__name').textContent);
    const opponentDefense = opponent.defense;
    totalDamage -= opponentDefense;

    //restar daño a vitalidad oponente
    opponent.vitality -= totalDamage;
    const characters$$ = document.querySelectorAll('.selected');
    characters$$.forEach(char => {
        if(char.querySelector('.char__name').textContent == opponent.name) {
            const charVitality$$ = char.querySelector('.char__vitality');
            charVitality$$.textContent = `Vitality: ${opponent.vitality}`;
        }
    });

    opponent.vitality <= 0 && winGame(char);
}

function throwDice(dmgStr, critic) {
    const digits = dmgStr.match(/\d+/g);
    const tiradas = digits[0];
    const caras = digits[1];

    let totalTirada = 0;
    for (let i = 1; i <= tiradas ; i++) {
        let tirada = Math.floor(Math.random() * caras) + 1;
        if (tirada == critic) {
            tirada *=2;
        }
        totalTirada += tirada;
    }
    return totalTirada;
}

function winGame(winner) {
    const arena$$ = document.querySelector('[data-function="arena"]');
    const characters$$ = document.querySelector('[data-function="characters"]');
    arena$$.innerHTML = '';
    characters$$.innerHTML = '';
    const winnerName = winner.querySelector('h2').textContent;
    arena$$.innerHTML = `
        <h1 class="winner-msg">${winnerName} ganó el juego! <br> Yuhuuuu!!</h1>
    `
}



async function init() {
    const characters = await getCharacters();
    paintCharacters(characters);
}

init();