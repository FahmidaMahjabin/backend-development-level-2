"use strict";
function add(a, b) {
    if (typeof a == 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        return (a.toString() + b.toString());
    }
}
console.log(add('5', '4'));
