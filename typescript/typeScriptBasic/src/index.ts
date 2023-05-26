let text= "hello world";
console.log(text.endsWith("p"));
console.log(text);
let student ;
student = "eva";
student = 12;
let numbers:number[] = [1, 2, 3, 4, 5]
numbers.map(number => console.log(number));
let user:[number, string] = [12, "eva"];

console.log(user[0])

type Person = {
    name?: string;
    age: number;
    color: string;
    isMarried: boolean;

}
const abul:Person = {
    
    age: 23,
    color: "brown",
    isMarried:true
}
const mokbul:Person = {
    age: 23,
    color: "brown",
    isMarried:true,
  
}
interface Iperson{
    name?: string;
    age: number;
    color: string;
    isMarried: boolean;
}
// type Person{
//     weight: number;
// }
const eva: Iperson = {
    name:"eva",
    age:27,
    color:"brown",
    isMarried:true,
    
}
console.log(mokbul);
console.log("type of abul:", typeof abul);
console.log("type of eva:", typeof eva);
