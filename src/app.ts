// Tutorial 11 - The DOM & Type Casting
// const anchor = document.querySelector('a')!

// console.log(anchor)
// if (anchor) { console.log(anchor.href) }

// console.log(anchor.href)
// console.log(anchor?.href)

// interfaces
// interface IsPerson {
//   name: string
//   age: number
//   speak(a: string): void
//   spend(a: number): number
// }

// const me: IsPerson = {
//   name: 'shaun',
//   age: 30,
//   speak(text: string): void { console.log(text) },
//   spend(amount: number): number {
//     console.log('I spend', amount)
//     return amount
//   }
// }

// const greetPerson = (person: IsPerson) => {
//   console.log('hello ', person.name)
// }

// greetPerson(me)

import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter

  if (type.value === 'Invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')

})

// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
  uid: number
  resourceType: ResourceType
  data: T
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}

const docTwo: Resource<object> = {
  uid: 2,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'yoshi' }
}

console.log(docOne, docTwo)

// tuples

let student: [string, number]
student = ['chun-li', 231452]