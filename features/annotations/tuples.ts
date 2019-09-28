const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 30
}

/*
  The type declaration makes this array a tuple.
  The array that follows will always be required to have this order of sequence when being declared.
  string --> boolean --> number
*/
const pepsi: [string, boolean, number] = ['brown', true, 40]

/* You can also declare it before hand and assign it to an array later as a tuple. */
type Drink = [string, boolean, number]
const coke: Drink = ['brown', true, 40]
