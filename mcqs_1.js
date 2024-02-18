"use strict";
// Your Ultimate 100 MCQs Learning Series - Part-01
Object.defineProperty(exports, "__esModule", { value: true });
// Question No.01 to 20
// Get ready to learn TypeScript with our 100-question quiz series! Perfect for beginners, these simple multiple-choice questions will help you understand TypeScript effortlessly. Dive into the quiz and level up your TypeScript skills!
// Q.01 TypeScript is a superset of which programming language?
// A.01 JavaScript
// Q.02 Which of the following is a key feature of TypeScript?
// A.02 Static typing
// Q.03 What does TypeScript provide in addition to standard JavaScript syntax?
// A.03 Annotations for static typing
// Q.04 Which tool is commonly used to compile TypeScript code to JavaScript?
// A.04 TSC (TypeScript Compiler)
// Q.05 What is the purpose of TypeScript interfaces?
// A.05 To define classes
// Q.06 How is a TypeScript variable type explicitly specified?
// A.07 Using a colon followed by the type
// Q.07 What is the role of the tsconfig.json file in a TypeScript project?
// A.07 It configures TypeScript compiler settings
// Q.08 What does the term "union leteral" refer to in TypeScript?
// A.08 The union of two or more data types
// Q.09 How can you install TypeScript globally on your machine using Node Package Manager (NPM)?
// A.09 npm i -g typescript
// Q.10 Which operator is used to combine multiple types into one in TypeScript, allowing values of any of those types?
// A.10 ' | '
// Q.11 In TypeScript, what does the inquirer library commonly facilitate?
// A.11 User input prompts
// Q.12 Which keyword is used in TypeScript to declare a type that can be any value?
// A.12 any 
// Q.13 In TypeScript, what is the purpose of the 'as' keyword in the context of explicit casting?
// A.13 Perform the type conversion
// Q.14 What is the role of the 'never' type when used in the context of structural typing?
// A.14 Represents a type with no values
// Q.15 What is the primary use case for explicit casting in TypeScript?
// A.15 To enforce strict type checking
// Q.16 How do you represent a nested object with optional properties in TypeScript?
// A.16 type NestedObj = {x:number,y?:{z?:string}};
// Q.17 What happens when you use the '&' operator between two types in TypeScript?
// A.17 Forms an intersection type
// Q.18 What is the difference between 'any' and 'unknown' types in TypeScript?
// A.18 'unknown' is more restrictive than 'any'
// Q.19 Which TypeScript feature allows you to create a type that represents the combination of two types, taking only common properties?
// A.19 Intersection types 
// Q.20 How do you define an object type?
// Your Ultimate 100 MCQs Learning Series - Part-02
// Question No.21 to 40
// Get ready to learn TypeScript with our 100-question quiz series! Perfect for beginners, these simple multiple-choice questions will help you understand TypeScript effortlessly. Dive into the quiz and level up your TypeScript skills!
// Q.21 What is the primary purpose of enums in TypeScript?
// A.21 To define a set of named constant
// Q.22 How do you access the value of a specific property in an object?
// A.22 Using dot notation (e.g., obj.property) and using square bracket notation (e.g., obj['property']) both a and b
// Q.23 How do you declare a string array in TypeScript?
// A.23 let myArr: string[];
// Q.24 What is the correct way to add elements to the end of an array in TypeScript?
// A.24 array.push("element");
// Q.25 In TypeScript, how do you remove the first element from an array?
// A.25 array.shift();
// Q.26 How does the array.reduce() method differ from array.reduceRight() method in TypeScript?
// A.26 'reduce()' processes elements from left to right, while 'reduceRight()' processes elements from right to left
// Q.27 Which of the following array methods in TypeScript alters the original array?
// A.27 'splice()' 
// Q.28 Which array method in TypeScript does not alter the original array?
// A.28 'slice()'
// Q.29 How do you declare a function in TypeScript?
// A.29 function myFun():void{};
// Q.30 How do you declare a default parameter in TypeScript?
// A.30 function myFun(param = 5): void {};
// Q.31 Which symbol denotes an optional parameter in TypeScript?
// A.31 '?'
// Q.32 What happens if you omit a default parameter in a TypeScript function call?
// A.32 It uses the default value
// Q.33 What is the purpose of a rest parameter in TypeScript?
// A.33 To represent an unknown number of arguments as an array
// Q.34 Rest, optional and default parameter can only be _______ of the parameter list?
// A.34 At end
// Q.35 How do you declare a rest parameter in TypeScript?
// A.35 function example(...rest:number[]):void{};
// Q.36 What is function overloading in TypeScript?
// A.36 Creating multiple functions with the same name but different implementations
// Q.37 In TypeScript, what is a tuple?
// A.37 An ordered list of elements with fixed types
// Q.38 How do you define a tuple type in TypeScript? 
// Q.38 type MyTuple = [number, string, boolean];
// Q.39 How do you destructure a tuple in TypeScript?
// A.39 const [a, b] = myTuple;
// Q.40 How do you add an element to the end of a tuple in TypeScript?
// A.40 Tuples cannot be modified once declared
// Your Ultimate 100 MCQs Learning Series - Part-03
// Question No.41 to 60
// Get ready to learn TypeScript with our 100-question quiz series! Perfect for beginners, these simple multiple-choice questions will help you understand TypeScript effortlessly. Dive into the quiz and level up your TypeScript skills!
// Q.41 Which keyword is used to pause the execution of an asynchronous function until a Promise is resolved or rejected?
// A.41 await
// Q.42 What is the significance of using the async keyword before a function declaration?
// A.42 It indicates the function contains asynchronous operations
// Q.43 How is an error handled in an asynchronous function using async/await?
// A.43 Using try-catch blocks
// Q.44 What's a big advantage of using asynchronous programming (async) instead of synchronous programming (sync)?
// A.44 Async allows your program to keep doing things instead of waiting for one task to finish.
// Q.45 Which of the following keywords is used to mark the end of an asynchronouos operation and resume the execution of the program? 
// A.45 return
// Q.46 Which TypeScript keyword is used to handle multiple asynchronous operations in a loop using async/await?
// A.46 Promise.all
// Q.47 Which TypeScript operator can be used to simplify handling Promise rejections within an async function? 
// A.47 catch
// Q.48 How can you use async/await to handle timeouts in TypeScript?
// A.48 using setTimeout within an asynchronous function
// Q.49 In TypeScript, how can you ensure that a specific piece of code executes after multiple asynchronous operations have completed successfully?
// A.49 By chaining '.then' methods on Promises
// Q.50 What is the purpose of the async/await syntax when working with APIs in TypeScript?
// A.50 To handle asynchronous nature of API requests in a more readable manner
// Q.51 How is inheritance achieved in TypeScript classes?
// A.51 Using the extends keyword
// Q.52 What is the purpose of the 'super' keyword in a TypeScript class constructor?
// A.52 Calls the constructor of its parent/base class
// Q.53 How can you make a class property or method private in TypeScript?
// A.53 Using the private modifier, Prefixing with an underscore(_) both (a) and (b) options
// Q.54 What is the purpose of the 'readonly' modifier in TypeScript when applied to a class property?
// A.54 It makes the property immutable after initialization
// Q.55 What is the primary difference between an interface and an abstract class in TypeScript?
// A.55 Abstract classes can have method implementations, interfaces cannot
// Q.56 In TypeScript, how does 'this' keyword behave within a class method?
// A.56 It refers to the class instance on which the method is called
// Q.57 Which TypeScript access modifier allows a class member to be accessible only within the same class and its subclasses?
// A.57 protected
// Q.58 In TypeScript, what is a callback function?
// A.58 A function passed as an argument to another function
// Q.59 What is a potential drawback of using callback functions for handling asynchronous operations in TypeScript?
// Q.59 Callbacks can lead to callback hell or "pyramid of doom"
// Q.60 What is the primary purpose of using a 'getter' and 'setter' in TypeScript?
// A.60 To control access and modification of class
// Your Ultimate 100 MCQs Learning Series 
// Part-04
// Question No. 61 to 80
// Get ready to learn TypeScript with our 100-question quiz series! If you missed the previous parts, link is in description.
// Q.61 What will be the output of the following TypeScript code?
// const sentence = 'hello world';
// const charArray = sentence.split('');
// console.log(charArray);
// A.61 ['h','e','l','l','o', 'w','o','r','l','d']
// Q.62 What will be the output of the following TypeScript code?
// const sentence = 'hello world';
// const newSentence  = sentence.charAt(sentence.length - 1);
// console.log(newSentence); 
// A.62 'd'
// Q.63 What is the expected type of elements stored in the "_array variable?" private_array:T[];
// A.63 Array of any type specified during instantiation
// Q.64 How is a container instance intialized to hold strings?
// A.64 let c = new Container <string>();
// Q.65 What will be the result of executing the following TypeScript code?
/*function newStr<T>(arr: T[]):number{
    return arr.length;
}
console.log(newStr<string>(["a", "b", "c"]));*/
// A.65 3
// Q.66 What will be the output of the following TypeScript code?
// function firstElement<T>(arr: T[]): T {
//     return arr[0];    
// }
// console.log(firstElement<string>(["apple", "banana", "orange"]));
// A.66 "apple"
// Q.67 What will be the output of this code?
// let x: number = 10;
// console.log(typeof x.toFixed());
// A.67 string
// Q.68 What will be the output to this code?
// 
// A.68 130
// Q.69 Consider the following TypeScript code, what will be the output?
// async function fetchData(){
//     return "Data Fetched";
//     }
// fetchData().then(console.log);
// A.69 Data Fetched
// Q.70 How does the "as const" assertion impact the following TypeScript code?
// const colors = ["red", "green", "blue"] as const;
// A.70 It makes the colors array immutable
// Q.71 What is the output of the following TypeScript code?
// const add = (a: number, b?: number): number=> {
//     if (b) { return a + b};
//     return a;
// }
// console.log(add(5));
// A.71 5
// Q.72 What will be the output of this code in console?
// const myStr = (str: string): string => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// };
// console.log(myStr("typescript"));
// Q.72 Typescript
// Q.73 What will be the output of the following TypeScript code?
// const numbers: number[] = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num)=> num * 2);
// console.log(doubled);
// A.73 [2, 4, 6, 8, 10]
// Q.74 What will be the output of the following TypeScript code?
// const sentence = 'hello world';
// const changeStr = sentence.split('').reverse().join('');
// console.log(changeStr);
// Q.74 dlrow olleh 
// Q.75 What will be the output of the following TypeScript code?
// const numbers: number [] = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);
// A.75 [2, 4]
// Q.76 What does the following TypeScript code demonstrate?
// class MathOperations{
//     static async add(a:number, b:number): Promise<number> {
//         return a + b }
// }
// A.76 Asynchronous Method
// Q.77 What is the output of the following TypeScript code?
// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, curr)=> acc + curr, 0);
// console.log(sum);
// A.77 10
// Q.78 What is the purpose of the following TypeScript code?
// interface Shape { draw(): void};
// class Circle implements Shape {
//     draw( ){console.log("Drawing a circle")}
// };
// A.78 Interface Implementation
// // Q.79 What is the output of the following TypeScript code?
// let x: string | number;
// x = "Hello";
// console.log(typeof x);
// Q.79 string
// Q.80 Consider the following TypeScript code what will be the output?
// async function getUser() {
//     return {name: "Alice", age: 30};
// }
// console.log(getUser());
// A.80 Promise {{ name: 'Alice', age: 30}}
