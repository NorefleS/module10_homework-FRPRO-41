// Задание 6

let arr = [1, 1, 1, 2];
let check = true;

for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            check = false;
        }
    }
}

if (check) {
    console.log("Элементы массива одинаковые");
}
else {
    console.log("Элементы массива НЕ одинаковые");
}