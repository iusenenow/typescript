"use strict";
// Tutorial 2 - Compiling
// const character = 'luigi'
// console.log(character)
// const inputs = document.querySelectorAll('input')
// console.log(inputs)
// inputs.forEach(input => console.log(input))
// Tutorial 3 - Type Basics
// let character = 'mario'
// let age = 30
// let isBlackBelt = false
// character = 20 character has to be a number
// character = 'luigi'
// age = 'yoshi' age has to be a string
// age = 40
// isBlackBelt = 'yes' isBlackBelt has to be a Boolean
// isBlackBelt = true
// const circle = (diameter: number) => {
//   console.log(diameter * Math.PI)
// }
// diameter: 直径
// circle(5)
// Tutorial 4 - Object & Array Types
// Arrays
// let names = ['luigi', 'mario', 'yoshi']
// names.push('toad')
// names.push(3)
// names[0] = true
// let numbers = [10, 20, 30, 40]
// numbers.push(25)
// numbers.push('shaun')
// numbers[0] = 'shaun'
// let mixed = ['ken', 4, 'chun-li', 8, true]
// mixed.push('ryu')
// mixed.push(89)
// mixed.push(false)
// Objects
// let ninja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// }
// ninja.age = 40
// ninja.name = 'ryu'
// ninja.belt = 30
// ninja.skills = ['fighting', 'sneaking']
// ninja = {
//   name: 'yoshi',
//   belt: 'orange',
//   age: 99,
//   // skills: []
// }
// Turorial 5 - Explicit Types
// explicit types
// let character: string
// let age: number
// let isLoggedIn: boolean
// age = 'luigi'
// age = 30
// isLoggedIn = 25
// isLoggedIn = true
// arrays
// let ninjas: string[] = []
// ninjas.push('shaun')
// union types
// let mixed: (string | number | boolean)[] = []
// mixed.push('hello')
// mixed.push(20)
// mixed.push(false)
// let uid: string|number|boolean
// uid = '123'
// uid = '123'
// uid = true
// objects
// let ninjaOne: object
// ninjaOne = {
//   name: 'yoshi',
//   age: 30
// }
// let ninjaTwo: {
//   name: string,
//   age: number,
//   isLoggedIn: boolean
// }
// ninjaTwo = {
//   name: 'mario',
//   age: 20,
//   isLoggedIn: false
// }
// Tutorial 6 - Dynamic(any) Types
// let age: any = 25
// age = true
// console.log(age)
// age = 'luigi'
// console.log(age)
// age = { name: 'luigi', age: 30 }
// console.log(age)
// let mixed: any[] = []
// mixed.push(5)
// mixed.push('luigi')
// mixed.push(true)
// console.log(mixed)
// let ninja: { name: any, age: any }
// ninja = { name: 'yoshi', age: 30 }
// console.log(ninja)
// ninja = { name: 30, age: 'yoshi' }
// console.log(ninja)
// Tutorial 7 - Better Workflow & tsconfig
// tsc --init
// Tutorial 8 - Function Basics
// let greet: Function; // Function needs captal letter F
// greet = () => console.log('hello again!')
// greet()
// const add = (a: number, b: number, c?: number | string): void => {
//   console.log(a + b, c)
// } // c: number | string = 23 default value
// add(4, 28, 'hello')
// const minus = (a: number, b: number): number => a - b
// let result = minus(873, 1098)
// console.log(result)
// Tutorial 9 - Type Aliases
// type StringOrNum = string | number
// type objWithName = { name: string, uid: StringOrNum }
// const logDetails = (uid: StringOrNum, item: string) => console.log(`${item} has a user ID of ${uid}`)
// const greet = (user: objWithName) => console.log(`${user.name} says hello.`)
// logDetails(23, 'broom')
// greet({ name: 'chun-li', uid: 26 })
// Tutorial 10 - Function Signatures
// example 1
let greet;
greet = (name, greeting) => console.log(`${name} says ${greeting}`);
greet('luigi', 'hello');
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(78, 34, 'minus'));
// example 3
let logDetails;
logDetails = (ninja) => console.log(`${ninja.name} is ${ninja.age} years old.`);
logDetails({ name: 'luigi', age: 32 });
