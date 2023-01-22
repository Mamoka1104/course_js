console.log('Задание 1.')
const up = (num1, num2) => num1 ** 3 + num2 ** 3;
console.log(up(2, 3));


function inputSomeValue() {
    let userAnswer = prompt('Введите число:')
    if (isNaN(userAnswer)) {
        alert('Это не число :( Попробуйте снова.');
        inputSomeValue();
    } else {
        userAnswer = userAnswer * 0.87;
        alert(`Размер заработной платы за вычетом налогов равен ${userAnswer}.`)
    }
}
inputSomeValue();


const maxNum = () => {
    return Math.max(num1, num2, num3);
}

let num1 = Number(prompt('введите первое число.'));
let num2 = Number(prompt('введите второе число.'));
let num3 = Number(prompt('введите третье число.'));

alert(`Максимальное значение: ${maxNum()}`)

console.log('Задание 4.')

function sum(num1, num2) {
    return num1 + num2;
}
function diff(num1, num2) {
    return Math.abs(num1 - num2);
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
console.log(sum(2, 6));
console.log(diff(2, 6));
console.log(mul(2, 6));
console.log(div(2, 6));