// using arrow functions
const add = (a: number, b: number): number => {
  return a + b
}
const subtract = (a: number, b: number): number => {
  return a - b
}
const multiply = (a: number, b: number): number => {
  return a * b
}
const divide = (a: number, b: number): number => {
  return a / b
}

// using function keyword
function ADD(a: number, b: number): number {
  return a + b
}
function SUBTRACT(a: number, b: number): number {
  return a - b
}
function MULTIPLY(a: number, b: number): number {
  return a * b
}
function DIVIDE(a: number, b: number): number {
  return a / b
}

// void type
const logger = (message: string): void => {
  console.log(message)
  // a void type doesn't have to return anything, however
  //  it can return void or null.
}

// never type
//? the never type should never expect a return.
const throwError = (message: string): never => {
  throw new Error(message)
}

// void type
//? the void type doesn't expect us to return anything
//?   however there is a chance for us to return something.
const throwVoidError = (message: string): void => {
  if (!message) {
    throw new Error(message)
  }
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
}
const logWeather = ({
  date,
  weather
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}
