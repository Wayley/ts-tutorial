import { sayHello } from './greet'

function hello(from: string) {
  console.log('-----', `Hello from ${from}`)
}
hello('TYPESCRIPT')
const message = sayHello('ts')
console.log(message)

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName)
  elt.innerText = sayHello(name)
}
const eleId = 'greeting'
showHello(eleId, 'TypeScript_watch')
/*  */
