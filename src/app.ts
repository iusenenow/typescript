// Tutorial 11 - The DOM & Type Casting
// const anchor = document.querySelector('a')!

// console.log(anchor)
// if (anchor) { console.log(anchor.href) }

// console.log(anchor.href)
// console.log(anchor?.href)

// interfaces
interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(a: number): number
}

const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void { console.log(text) },
  spend(amount: number): number {
    console.log('I spend', amount)
    return amount
  }
}

const greetPerson = (person: IsPerson) => {
  console.log('hello ', person.name)
}

greetPerson(me)

import { Invoice } from './classes/Invoice.js'

const invoiceOne = new Invoice('mario', 'work on the mario website', 250)
const invoiceTwo = new Invoice('luigi', 'work on the luigi website', 300)

let invoices: Invoice[] = []
invoices.push(invoiceOne)
invoices.push(invoiceTwo)
invoices.forEach(invoice => {
  console.log(invoice.client, invoice.amount, invoice.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement

console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  )
})