// Задание 1

let result = prompt("Введите значение:");
let number = +result;

if (!isNaN(number) && typeof number === "number") {
  if (number % 2 === 0) {
    console.log("Чётное число");
  }
  else {
    console.log("Нечётное число");
  }
}
else {
  console.log("Упс, кажется, вы ошиблись");
}