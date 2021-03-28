declare class ParentClass {
    constructor();
    /**
     *
     * @param arg1
     * a.	Constructor overloading can be done using optional parameters of type any/Unions
     * b.	Method overloading can be done using optional parameters of type any/Unions
     */
    overloadmethod(arg1: any): void;
    overridemethod(): void;
}
declare class ChildClass extends ParentClass {
    overridemethod(): void;
}
declare const obj: ParentClass;
declare const obj1: ChildClass;
