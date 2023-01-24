console.log('Задание 1.')
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 1) {
        console.log(`${i} - нечетное число`);
    } else {
        console.log(`${i} - четное число`);
    }
}

console.log('Задание 2.')
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(`Before: ${arr}`);
arr.splice(3, 2);
console.log(`After: ${arr}`);

console.log('Задание 3.')
const generateArray = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
)

const myArray = generateArray(5, 10);
console.log(myArray);

let sumArray = 0;
for (let i = 0; i < myArray.length; i++) {
    sumArray += myArray[i];
}
console.log(`Сумма элементов массива ${myArray} равна ${sumArray}`)

console.log(`Минимальное значение в массиве ${Math.min.apply(null, myArray)}.`)

if (myArray.includes(3) === true) {
    console.log('В массиве есть цифра 3.')
} else {
    console.log('В массиве нет цифры 3.')
}

console.log('Необязательое задание.')

for (let i = ''; i.length < 20; console.log(i += 'x')) { }

