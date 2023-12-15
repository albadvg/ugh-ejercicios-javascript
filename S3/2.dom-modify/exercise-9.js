let myDivs$$ = document.querySelectorAll('.fn-insert-here');

myDivs$$.forEach(div => {
    let myP$$ = document.createElement('p');
    myP$$.textContent = 'Voy dentro!';
    div.appendChild(myP$$);
});