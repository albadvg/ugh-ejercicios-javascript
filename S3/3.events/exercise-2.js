let myInput = document.querySelector('input');
myInput.addEventListener("focus", () => {
    console.log(myInput.value);
});