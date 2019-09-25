import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

/* Sorting numbers */
const numbersCollection = new NumbersCollection([50, 3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

/* Sorting characters */
const charactersCollection = new CharactersCollection('good Morning America')
charactersCollection.sort()
console.log(charactersCollection.data)

/* Sorting Linked Lists */
const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.sort()
linkedList.print()
