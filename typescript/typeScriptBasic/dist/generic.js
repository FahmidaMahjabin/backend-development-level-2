"use strict";
const user1 = {
    name: "Eva",
    age: 27
};
function identity(data) {
    return data;
}
console.log(typeof identity("hey there"));
console.log(typeof identity(123));
console.log(typeof identity(user1));
const rollNumber = [12, 13];
const names = ["a", 'b'];
const bookList = [
    { name: "book thief", price: 200 },
    { name: "choto golpo", price: 100 }
];
function getListOfProperties(object1) {
    const properties = Object.assign({}, object1);
    console.log(properties);
}
const book1 = {
    name: "book thief",
    price: 200
};
getListOfProperties(book1);
const a = "name";
const b = "price";
console.log({ a, b });
function getProperty(obj, key) {
    console.log(obj[key]);
}
getProperty(book1, "price");
