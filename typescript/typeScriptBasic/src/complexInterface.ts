interface Iproperty{
    name: string;
    age:number
}
interface Imethods{
    getAge():string
}

interface Model<property, methods>{
    property : property;
    methods : methods
}

type myModel = Model<Iproperty, Imethods>;
interface A {
    propA: number;
    propB: number;
  }
export class User implements myModel{
    property: Iproperty;
    methods:Imethods;
    constructor(name:string, age:number){
        this.property = {name, age};
        this.methods =
        { getAge :
            () => `${name} is ${age} year old`
    }
    }
}  
const user1 = new User( "eva",28,
);
console.log(user1.methods.getAge())
  class B implements A {
    propA = 0;
    propB = 3;
  }