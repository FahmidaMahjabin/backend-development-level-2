type Animal = {
    leg: number;
    color: string;
}
type Human = Animal &  {
    isEducated: boolean;
    occupation: string;
}
const korim: Animal |Human = {
    leg : 2,
    color : "brown",
    // // isEducated: true,
    // occupation : "businessman"
    
}
const age:number = 23;
const condition = age > 18?"adult": "teen";
console.log(condition);
const marks = 0;
const grade = marks || "pass";
console.log(grade);