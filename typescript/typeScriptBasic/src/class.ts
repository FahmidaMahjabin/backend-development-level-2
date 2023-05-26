export class Classroom{
    bench: number;
    private _table: number;
    static teacher: string;
    
     constructor( bench:number, table:number){
        this.bench = bench;
        this._table = table

    }
    get tables():number{
        return this._table;
    }
    static haveClasses(){
        console.log("five classes everyday");
    }
    set tableNumber(newTable:number){
        this._table += newTable;
    }
}
const class7 =new Classroom(100, 70);
class7.tableNumber = 45;
Classroom.teacher = "rebeka";
Classroom.haveClasses();
console.log(Classroom.teacher);
console.log(class7.tables)
export class Perimeter{
    getPerimeter(){
        console.log("perimeter")
    }
}
export class Circle extends Perimeter{
    constructor(public radious:number){
        super();
        this.radious = radious;

    }
    getPerimeter(): number {
        return Math.PI *this.radious*2
    }
}
const circle1 = new Circle(4);
console.log(circle1.getPerimeter())

