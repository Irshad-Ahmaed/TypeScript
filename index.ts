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
// let arr:Number[] = [1,2,3,4,5];
// // OR
// // let arr:Array<Number> = [1,2,3,4,5];
// console.log(arr);

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
// console.log(matrix);

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

// const person: {name: string; age: number} = {
//     name: "John",
//     age: 30
// }
// console.log(`Name: ${person.name}, Age: ${person.age}`);

function getPersonData(): {name: string; age: number, occupation: string} {
    return{
        name: 'Irshad',
        age: 23,
        occupation: 'Software Engineer'
    }
    
}
const personData = getPersonData();
console.log(personData);

// ----------------------- Type Aliases, readonly And optional property ----------------------
// A type alias is a way to create a new name for an existing type. It
// allows you to define a "custom type" that refers to another type and
// give it a more meaningful or descriptive name.

// Type aliases are defined using the "type keyword", followed by the
// name of the alias, an equal sign (=), and the type it refers to.

type Person = {
    name: string;
    age: number;
    location?: string;  // optional property
    readonly occupation: string;
}

const data = (person: Person) => {
    // person.occupation = 'Software' // If we want to change the readonly prop value it gives error because we can assign readonly prop only one time.
    console.log(`Name: ${person.name}, Age: ${person.age}, Location: ${person.location}, Occupation: ${person.occupation}`); // we did not provide any location, so therefore its shows undefine
}
const person: Person = {name: 'Irshad', age: 23, occupation: 'Student'} // we don't have to provide location but we need to define occupation one time only 
data(person);

// ------------------------- Intersection Type --------------------------------
// An intersection type is a way to 'combine multiple types' into a
// single type that includes all the properties and methods of each
// constituent type. An intersection type is denoted by the "&" symbol.

type userInfo = {
    name: string;
    age: number;
}

type AccountInfo = {
    email: string;
    password: string;
}

const user: userInfo & AccountInfo = {
    name: 'Irshad',
    age: 23,
    email: 'irshad@gmail.com',
    password: '123456'
}

console.log(user);

// -------------------------- Union Type --------------------------------
// Unions are used to declare a type that can have one of several
// possible types. Unions are useful when we want to allow a variable
// or parameter to accept multiple types.

// The syntax for defining a union type in TypeScript uses the pipe symbol (|).

// type Info = {
//     email: string;
//     password: string | number;
// }

// const showInfo: Info = {
//     email: 'Irshad@gmail.com',
//     password: 123456  // can be String or Number
// }
// console.log(showInfo)

// type USerData = {
//     name: string;
//     age: number;
// }

// type TakeUnion = Info | USerData;

// const res: TakeUnion = {
//     email: 'Irshad@gmail.com',
//     password: 123456,
//     name: 'Irshad',
// }
// console.log(res);

const arrayUnion: (string | number)[] = ["arrayUnion",1,2,"HI", 3];
console.log(arrayUnion);

// ------------------------------- Literals Type ---------------------------------
// Literal types allow you to specify a value that can only be one specific literal value. 
// This means that a variable with a literal type can only have one specific value and no other.

// let color: 'red' | 'green' | 'blue'
// color = 'red'
// // color = 'yellow' // give error Type "yellow" is not assignable to type "red" | "green" | "blue"
// console.log(color)

// let isCorrect: true;
// isCorrect = true;
// // isCorrect = false; // give error Type "false" is not assignable to type "true"

// let nums: 1 | 2 | 7;
// nums = 7;
// // nums = 5; // give error Type "5" is not assignable to type 1 | 2 | 7

// ---------------------------------- Tuple Type ---------------------------------
// Tuple is a type that represents an array with a "fixed number of elements"
// where each element can have a different type. The order of the types in
// the tuple definition corresponds to the order of the values in the actual
// array. Tuples are similar to arrays, but they have a specific structure and
// can be used to model finite sequences with known lengths.

let tuple: [string, string, number];
// tuple = ["Irshad", 23, "Ahmad"]; // Can't assign a value anywhere in the tuple
tuple = ["Irshad", "Ahmad", 23];
// console.log(`Hi my name is ${tuple[0] + ' ' + tuple[1]} and I'm ${tuple[2]} years old`);

// Destructure the values of tuple:
let [first, last, age] = tuple;
console.log(`Hi my name is ${first + ' ' + last} and I'm ${age} years old`);

// Arrays tuple:
const prod: (string | number)[] = ["Item1", 2, 'prod']
console.log(prod)

// ------------------------------ Enum Type --------------------------------------
// Enum is a way to define a set of named constants. Enums allow
// you to define a collection of related values that can be used
// interchangeably in your code.

// enum WeatherConditions {
//     Sunny,
//     Cloudy,
//     Rainy,
//     Snowy,
//     Windy
// };
// console.log(`Todays weather is ${WeatherConditions[1]}`);

enum WeatherConditions {
    Sunny = 'sunny',
    Cloudy = 'cloudy',
    Rainy = 'rainy',
    Snowy = 'snowy',
    Windy = 'windy',
};

console.log(`Todays weather is ${WeatherConditions.Cloudy.toUpperCase()} coming from Enum`);

// -------------------------------- Class Prop And Annotations -------------------------------
// You can annotate class properties with a type. This allows you to define the
// data type of the property and ensure that it is always consistent.

class PersonClass {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const providingPerson = new PersonClass("Irshad", 23);
console.log('Coming from class: ', providingPerson.name, providingPerson.age);

// -------------------- Access Modifier --------------------------- 
// In TypeScript, you can use access modifiers to control the visibility
// of class members (properties and methods). Access modifiers determine the 
// ways in which class members can be accessed from within and outside the class.

// We have 3 types of Modifier in TypeScript:
// 1. Public 
// Public: Members marked as public can be accessed from anywhere, 
// both inside and outside the class.

// 2. Private 
// Private: Members marked as private can only be accessed 
// from within the class they are defined in.

// 3. Protected
// Protected: Members marked as protected can be accessed from within the class 
// they are defined in, as well as any subclasses that extend the class.

class Animal {
    public name: string;
    private age: number;
    protected species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    getDetails(): string {
        return `Animal is ${this.name}, age is ${this.age}, and its species is ${this.species}`;
    }
}

class animalData extends Animal {
    public breed: string;
    public animal: string;

    constructor(name: string, animal:string , age: number, species: string, breed: string) {
        super(name, age, species);
        this.animal = animal;
        this.breed = breed;
    }

    getAnimalDetails(): string { // Age is not accessible here because it is Private
        // return `Dog is ${this.name}, age is ${this.age}, species is ${this.species}, and breed is ${this.breed}`;
        return `${this.name} is ${this.animal}, species is ${this.species}, and breed is ${this.breed}`;
    }
}

const myDog = new animalData('Buddy', 'Dog', 3, 'Canine', 'Golden Retriever');
console.log(myDog.getAnimalDetails());


// const animalData = new Animal("Cat", 3, "Persian")

// console.log(animalData.name); // name can be accessible because it is public
// console.log(animalData.age); // age is private can't access outside of class
// console.log(animalData.species); // species is protected can't access outside of class and its subclass
// console.log(animalData.getDetails()); // But we can access the details with method

// const Cat = new subAnimal('Irshad', 'Jack', 'Cat', 4, 'Persian');
// console.log(Cat);

// ------------------------- Getter And Setters -----------------------------
// Getters and setters are used to access and modify class properties.
// Getters and setters allow you to define a property in a class that 
// looks like a simple variable from the outside but internally has
// additional logic for getting and setting the value.

class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number {
        return this._myProperty;
    }

    set myProperty(value: number) {
        this._myProperty = value;
    }
}

const value = new MyClass();
value.myProperty = 2; // Initialize the value
console.log(`My value is ${value.myProperty}`) // get the value

// ----------------------------- Interfaces -------------------------
// Interface is a way to define a contract for the shape of an object. 
// It specifies the properties and their types that an object must have.
// Interfaces are a powerful tool for enforcing a certain structure in your code.

