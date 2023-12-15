let myBody = document.querySelector('body');
let myBtn = document.createElement('button');
myBtn.id = 'btnToClick';

myBody.appendChild(myBtn);

myBtn.addEventListener('click', function(e) {
    console.log(e);
})
