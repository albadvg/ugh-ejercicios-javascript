function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === text) {
            return i;
        }       
    }
}

const arr1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const txt1 = 'Ajolote';

let result = findArrayIndex(arr1, txt1);

console.log(result)