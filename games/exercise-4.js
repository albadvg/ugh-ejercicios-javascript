const promptUser = () => {
    const rowsCols = [];
    const rows = prompt('Cuántas filas quieres que tenga tu tablero?');
    const cols = prompt('Cuántas columnas quieres que tenga tu tablero?');
    rowsCols.push(rows, cols);
    return rowsCols
}

const buildBoard = (rowsCols, randomCell) => {
    const board$$ = document.querySelector('[data-function="board"]');

    for(let i = 1; i <= rowsCols[0] ; i++) {
        const tRow$$ = document.createElement('tr');
        for(let j = 1 ; j <= rowsCols[1]; j++) {
            const tCell$$ = document.createElement('td');
            tCell$$.innerHTML = `
                <img class="cell__img" src="./public/exercise-4/x.png">
            `;
            tCell$$.style.width = `calc(100% / ${rowsCols[1]})`;
            tCell$$.classList.add('cell');
            tCell$$.addEventListener('click', (e) => checkCell(e, randomCell));
            tRow$$.appendChild(tCell$$);
            tCell$$.querySelector('.cell__img').setAttribute('cell' , `${i} ${j}`);
        }
        board$$.appendChild(tRow$$);
    }
}

const checkCell = (e, randomCell) => {
    const clickedCellCoord = e.target.getAttribute('cell');
    const randomCellCoord = randomCell.join(' ');
    console.log(clickedCellCoord);
    console.log(randomCellCoord);
    if(clickedCellCoord === randomCellCoord) {
        e.target.setAttribute('src', './public/exercise-4/chest.png');
        endGame();
    } else {
        e.target.setAttribute('src', './public/exercise-4/skull.png');
        let attempts$$ = document.querySelector('[data-function="attempts"]');
        let attempts = attempts$$.textContent;
        attempts++;
        attempts$$.textContent = attempts;

    }
    
}

const endGame = () => {
    const board$$ = document.querySelector('[data-function="board"]');
    setTimeout(() => {
        board$$.innerHTML = '';
        board$$.innerHTML = `
            <h1 class="win-message">!!Encontraste el tesoro!! ¡¡BIEEEEEEEEN!!</h1>
            <button class="restart">Reiniciar</button>
        ` 
        const restartBtn$$ = document.querySelector('.restart');
        restartBtn$$.addEventListener('click', init);
    }, 500);
    
}

const init = () => {
    const board$$ = document.querySelector('[data-function="board"]');
    board$$.innerHTML = '';
    
    const rowsCols = promptUser();
    const randomCell = rowsCols.map(el => Math.floor(Math.random() * Number(el)) + 1);
    buildBoard(rowsCols, randomCell);
}

init();