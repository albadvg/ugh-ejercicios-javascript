let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];




const board$$ = document.querySelector('.b-grid');
const scoreSpan$$ = document.querySelector('[data-function="score"]');
const attemptsSpan$$ = document.querySelector('[data-function="attempts"]');

let score = 0;
let attempts = 0;

for(const card of cardArray) {
    //create elements
    let card$$ = document.createElement('div');
    let cardBack$$ = document.createElement('img');
    let cardFront$$ = document.createElement('img');

    //give classes
    card$$.classList.add('card');
    cardBack$$.classList.add('card__back');
    cardFront$$.classList.add('card__front' , 'flip');

    //set attributes
    cardBack$$.setAttribute('src', 'public/exercise-1/universe.svg');
    cardFront$$.setAttribute('src', card.img);
    cardFront$$.setAttribute('name', card.name);
    cardFront$$.setAttribute('data-id', card.id);

    //events
    card$$.addEventListener('click', myCardFunction);

    //add to document
    card$$.appendChild(cardBack$$);
    card$$.appendChild(cardFront$$);
    board$$.appendChild(card$$);
}

let clickCount = 0;
let firstClickedName;
let firstClickedId;

function myCardFunction(e) {
    const backCard = e.target.classList.contains('card__back') ? e.target : e.target.previousElementSibling;
    const frontCard = e.target.classList.contains('card__front') ? e.target : e.target.nextElementSibling;

    //card flip
    backCard.classList.toggle('flip');
    frontCard.classList.toggle('flip');
    
    clickCount++;
    console.log(clickCount);
    if (clickCount === 1) { //store first flipped card values
        firstClickedName = frontCard.getAttribute('name');
        firstClickedId = frontCard.getAttribute('data-id');

    } else if(!checkValidity(frontCard)){ //if not valid
        const previousCard = document.querySelector(`[data-id="${firstClickedId}"]`);
        setTimeout(() => {
          previousCard.classList.toggle('flip');
          previousCard.previousElementSibling.classList.toggle('flip');
          frontCard.classList.toggle('flip');
          backCard.classList.toggle('flip');
        }, 500);  

        clickCount = 0;
        attempts++;
        attemptsSpan$$.textContent = attempts;

    } else if(checkValidity(frontCard)){  //valid pair case
      const previousCard = document.querySelector(`[data-id="${firstClickedId}"]`);
      previousCard.setAttribute('isValidated', true);
      frontCard.setAttribute('isValidated', true);
      setTimeout(() => {
        previousCard.setAttribute('src', 'public/exercise-1/tick.svg');
        frontCard.setAttribute('src', 'public/exercise-1/tick.svg');
      }, 500);
      
      clickCount = 0;
      score++;
      scoreSpan$$.textContent = score;

      checkGameIsCompleted();
    }
    
}

//check if pair is valid or not
function checkValidity(card) {
    let secondClickedName = card.name;  
    let secondClickedId = card.id;
  
    if(firstClickedId === secondClickedId) { //case click on same card
        return false;
    } else if (card.isValidated){ //case is already validated
        return false;
    } else if (firstClickedName !== secondClickedName) { //case cards are different
        return false;
    } else {
        return true;
    }  
}

function checkGameIsCompleted() {
    const cards = document.querySelectorAll('.card__front');
    const title$$ = document.querySelector('h1');
    const scoreAttempts$$ = document.querySelector('.score-attempts');
    const congratulations$$ = document.querySelector('.congratulations');

    if (score === cards.length / 2) {
      setTimeout(() => {
        title$$.classList.add('exitViewport');
        scoreAttempts$$.classList.add('exitViewport');

        for(let i = 0 ; i < cards.length ; i++) {
          cards[i].style.transitionDelay = `${.05 * i}s`;
          cards[i].classList.add('exitViewport');
        }     
      }, 1000);
      
      setTimeout(() => {
        congratulations$$.classList.add('showCongrats')
      }, 2000);
        
      
    }
}

