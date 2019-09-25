import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

/* Sorting numbers */
// const numbersCollection = new NumbersCollection([100, 10, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

/* Sorting characters */
const charactersCollection = new CharactersCollection('BigDog')
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)
