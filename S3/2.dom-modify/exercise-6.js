const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let myList$$ = document.createElement('ul');

for (let i = 0; i < apps.length; i++) {
    let myItem$$ = document.createElement('li');
    myItem$$.textContent = apps[i];
    myList$$.appendChild(myItem$$);   
}

document.body.appendChild(myList$$);