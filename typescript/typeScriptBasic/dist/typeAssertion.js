"use strict";
function kgToGram(kg) {
    if (typeof kg === 'number') {
        return kg * 1000;
    }
    else if (typeof kg === 'string') {
        return `amount is: ${parseFloat(kg) * 1000}`;
    }
}
const potol = kgToGram('12');
console.log(potol);
