"use strict";
const isGoing = true;
console.log(isGoing);
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(8, 12));
function addNumbers(...numbers) {
    let sum = 0;
    numbers.forEach(number => sum = number + sum);
    return sum;
}
const myFriends = ["Moneca0", "Rachel", "Ross"];
const [casts] = myFriends;
console.log(addNumbers(4, 5, 6, 2, 10));
