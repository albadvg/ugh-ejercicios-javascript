function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === text) {
            return i;
        }       
    }
}

function removeItem(array, text) {
    let myIndex = findArrayIndex(array, text);
    array.splice(myIndex, 1);
    return array;
}

const arr1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const txt1 = 'Ajolote';

let result = removeItem(arr1, txt1);

console.log(result);