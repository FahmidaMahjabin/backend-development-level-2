"use strict";
class Classroom {
    constructor(bench, table) {
        this.bench = bench;
        this._table = table;
    }
    get tables() {
        return this._table;
    }
    static haveClasses() {
        console.log("five classes everyday");
    }
    set tableNumber(newTable) {
        this._table += newTable;
    }
}
const class7 = new Classroom(100, 70);
class7.tableNumber = 45;
Classroom.teacher = "rebeka";
Classroom.haveClasses();
console.log(Classroom.teacher);
console.log(class7.tables);
class Perimeter {
    getPerimeter() {
        console.log("perimeter");
    }
}
class Circle extends Perimeter {
    constructor(radious) {
        super();
        this.radious = radious;
        this.radious = radious;
    }
    getPerimeter() {
        return Math.PI * this.radious * 2;
    }
}
const circle1 = new Circle(4);
console.log(circle1.getPerimeter());
