// Задание 2

let x = "Skillfactory";
let result = typeof x; 

if (result == "number") {
    console.log("x - число");
}
else if (result == "string") {
    console.log("x - строка");
}
else if (result == "boolean") {
    console.log("x - логический тип");
}
else {
    console.log("Тип x не определён");
}