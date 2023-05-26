// import { Classroom } from "./class";
import * as classts from "./class";
function add(a:number|string, b: number|string){
    if(typeof a == 'number' && typeof b === 'number'){
        return a +b;
    }
    else if(typeof a == 'string' && typeof b == 'string'){
        return (a.toString() + b.toString())
    }
}
const class1 = new classts.Classroom(100, 12);
const circle2 = new classts.Circle(7);
console.log(circle2)
console.log(class1.bench)
console.log(add('5','4'));