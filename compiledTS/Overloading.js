"use strict";
class ParentClass {
    constructor() {
        console.log("Parent Class Constructor");
    }
    /**
     *
     * @param arg1
     * a.	Constructor overloading can be done using optional parameters of type any/Unions
     * b.	Method overloading can be done using optional parameters of type any/Unions
     */
    overloadmethod(arg1) {
        console.log(arg1);
    }
    overridemethod() {
        console.log("Parent method override");
    }
}
class ChildClass extends ParentClass {
    // constructor() {
    //     console.log("Child Class constructor");
    // }
    overridemethod() {
        console.log("Child class method override");
    }
}
const obj = new ParentClass();
obj.overridemethod();
const obj1 = new ChildClass();
obj1.overridemethod();
//# sourceMappingURL=Overloading.js.map