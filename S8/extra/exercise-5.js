const getTrivia = async (num) => {
    const response = await fetch(`https://opentdb.com/api.php?amount=${num}&type=multiple`);
    const jsonResponse = await response.json();

    paintQuestions(jsonResponse.results);
}

const paintQuestions = (questions) => {
    const gameBoard$$ = document.querySelector('[data-function="gameboard"]');
    gameBoard$$.innerHTML = '';

    questions.forEach((ques, iQues) => {
        const question$$ = document.createElement('div');
        question$$.classList.add('question');
        question$$.innerHTML = `<p class="question__phrase">${ques.question}</p>`;

        //randomize correct answer position
        let randomPosition = Math.floor(Math.random() * ques.incorrect_answers.length);      
        const answers = [...ques.incorrect_answers];
        answers.splice(randomPosition, 0, `${ques.correct_answer}`);
  
        //answers radiobuttons
        let answers$$ = document.createElement('div');
        answers$$.classList.add('question-answers');

        answers.forEach((answ) => {
            const answer$$ = document.createElement('div');
            answer$$.innerHTML = `
                <input type="radio" class="question-answers__answr" id="${answ}" name="${iQues}" value="${answ}">
                <label for="${answ}">${answ}</label>
            `

            answer$$.firstElementChild.addEventListener('click', (e) => checkAnswer(e, questions));
            answers$$.appendChild(answer$$);
           
        })
        question$$.appendChild(answers$$);
        gameBoard$$.appendChild(question$$);
    });
    
}

let answersCounter = 0;
const checkAnswer = (e, questions) => {
    const thisQuestion = questions[e.target.name];
    if(e.target.id === thisQuestion.correct_answer) {
        answersCounter++
    }
    console.log(answersCounter);
}

const checkGame = () => {
    const gameBoard$$ = document.querySelector('[data-function="gameboard"]');
    gameBoard$$.innerHTML = '';
    gameBoard$$.innerHTML = `
        <h3>Has acertado ${answersCounter} preguntas</h3>
    `
}

const init = async () => {
    const questionsInput$$ = document.querySelector('[data-function="questions-number"]');
    const startBtn$$ = document.querySelector('[data-function="start-game"]');
    const checkBtn$$ = document.querySelector('[data-function="check-game"]');

    startBtn$$.addEventListener('click', () => getTrivia(questionsInput$$.value));

    checkBtn$$.addEventListener('click', checkGame);
}

init();
