// Задание 8

let arr = new Map();

arr.set("number", 1);
arr.set("boolean", false);
arr.set("string", "string");
arr.set("key", "value");
arr.set(5, "number");

for (let key of arr.keys()) {
  console.log("Ключ -" + " " + key + "," + " " + "Значение -" + " " + arr.get(key));
}