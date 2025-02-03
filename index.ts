// Annotations --------------------------

// let myName: String = 'Irshad';

// myName = '23';

// console.log(myName);

// --------------------------------------------
let myName: String | Number = 'Irshad';

myName = 23;

console.log(myName);

// Inferring the types - By playing with type script even if we don't assign any type 
// it assume by default whatever value you provide from the start ------------------------

// let age = 23;
// let src = 'Irs'

// age = true
// console.log(typeof age, src);
// -----------------------------------------------------------------------

// Type Any: This is a special type in TypeScript that can represent any type of value. 
// It is used when you don't know the type of a value or when you want to avoid type checking for a value.

// let anyOne: any = true;
// // anyOne = 23;
// anyOne=()=>{
//     console.log('Hello');
//     return "hi"
// };
// // anyOne()
// console.log(anyOne().toUpperCase())

// ----------------------------- Functions Parameter Annotations --------------------------------

// function greet(name) {  // If we didn't provide any type in fun parameter, typescript assume it as any type. But we run the code it gives error
//     return name;
// }
// console.log(greet('Hi, Irshad'));

// function extraOrLessParameter(one: number, two: number, three: number) {
//     console.log(one, two, three);
// }
// extraOrLessParameter(1,2); // Gives error not assign 3rd parameter

// const add = (type: number, type2: number, type3='Default parameter value') =>  type + type2 + type3;
// console.log(add(10, 3));

// ------------------------------------- Returning Function Parameter -----------------------------
function greet(age: number): string { // this string type is of returning value of function
    return `Your age is ${age}`;
}
console.log(greet(23));

const voidFun = (name: String): void => {
    console.log(name);
}
voidFun("Irshad")

// ----------------------------- Never -------------------------------
// The never keyword is used to indicate that a function will
// not return anything, or that a variable can never have a value.
// The never type is useful for indicating that certain
// code paths should never be reached, or that certain
// values are impossible. It can help catch errors at
// compile-time instead of runtime.

// Where to use Never:
// 1. A function that always throws ans error

// function throwError(msg: string): never {
//     throw new Error(msg);
// }

// // 2. A function that has an infinite loop
// function infiniteLoop(): never {
//     while (true){}
// }

// // 3. A variable that never have a value
// let x:never;
// function neverReturn ():never {
//     while(true){}
// }

// x= neverReturn();

// ---------------------- Arrays Types --------------------------
// Arrays are a type of object that can store multiple values
// of the same data type. Arrays in TypeScript are typed,
// which means you can specify the type of values that an
// array can hold.

// We can assign array in 2 ways
let arr:Number[] = [1,2,3,4,5];
// OR
// let arr:Array<Number> = [1,2,3,4,5];
console.log(arr);

// let items: string[] = [];
// items.push("First", "Second", "Third");
// items.pop();
// console.log(items);

// ---------------------------- Multi Dimensional Array ------------------------------
// A multi-dimensional array is an array that contains other arrays as its elements. 
// Multi-dimensional arrays can be defined using the same notation as one-dimensional
// arrays, but with nested square brackets.

let matrix: number[][] = [
    [1,2],
    [3,4]
];
console.log(matrix);

let matrix3D: number[][][] = [matrix];
// OR
// let matrix3D: number[][][] = [[
//     [1,2],
//     [3,4]
// ]];P
console.log(matrix3D);

// --------------------------------------- Objects -----------------------------
// An object in TypeScript is a structured data type that represents
// a collection of properties, each with a key and an associated value. 
// The properties of an object can have specific types, and the object itself can
// be annotated with a type, often defined using an interface or a type alias. 
// TypeScript uses structural typing, meaning that the shape of an object (its structure or
// properties) is what matters for type compatibility.