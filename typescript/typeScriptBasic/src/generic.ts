interface User{
    name: string;
    age:number;

}
const user1 = {
    name:"Eva",
    age:27
}

function identity<Type>(data:Type):Type{
    return data;
}
console.log(typeof identity("hey there"));
console.log(typeof identity(123));
console.log(typeof identity<User>(user1));
type genericArray<Type> = Array<Type>
const rollNumber: genericArray<number> = [12, 13];
const names : genericArray<string> = ["a", 'b'];

interface Book<i>{
    name: string,
    price: i,
}
const bookList: Book<number>[]= [
    {name:"book thief", price:200}, 
    {name:"choto golpo", price:100}
]
function getListOfProperties<Type extends {name: string}>(object1:Type):void{
    const properties = {...object1}
    console.log(properties)
    
}
const book1 : Book<number>={
    name: "book thief",
    price: 200
}

getListOfProperties<Book<number>>(book1)

type bookKeys = keyof Book<number>
const a:bookKeys = "name";
const b: bookKeys = "price";
console.log({a, b})

function getProperty<obj1, key1 extends keyof obj1>(obj:obj1, key:key1){
    console.log(obj[key])
}

getProperty(book1, "price")