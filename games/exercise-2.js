const diggletMove = () => {
    const timeLeft$$ = document.querySelector('[data-function="time-left"]');
    let timeLeft = 30;
    const digglet$$ = document.createElement('div'); 
    digglet$$.classList.add('b-mole');
    digglet$$.addEventListener('click', whacked);

    setInterval(()=> {
        if(timeLeft === 0) {
            clearInterval();
        } else {
            square$$ = randomSquare();
            square$$.appendChild(digglet$$);
            timeLeft -= 0.5;
            if(Number.isInteger(timeLeft)) {
                timeLeft$$.textContent = timeLeft;
            }
            if(timeLeft === 0) {
                showScore();
            }
        }
    }, 500)

}

const randomSquare = () => {
    const squares = document.querySelectorAll('.b-square');
    const randomPosition = Math.floor(Math.random() * squares.length);
    return squares[randomPosition];
}

const whacked = () => {
    let score = Number(document.querySelector('[data-function="score"]').textContent);
    score++;
    document.querySelector('[data-function="score"]').textContent = score;
}

const showScore = () => {
    const score = document.querySelector('[data-function="score"]').textContent;
    alert(`Tu puntuación es: ${score}`);
}

const init = () => {
    diggletMove();
}

init();

