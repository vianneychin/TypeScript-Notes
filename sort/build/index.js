"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
/* Sorting numbers */
// const numbersCollection = new NumbersCollection([100, 10, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)
/* Sorting characters */
const charactersCollection = new CharactersCollection_1.CharactersCollection('BigDog');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
