# TypeScript

> To run a TypeScript file, simply run _parcel index.html._

    // Create a script tag in the index.html file that will look for
    // the index.ts file. Parcel-bundler will turn the index.ts
    // --> an index.js file.

> Install @type declaration files for all node_modules. Sometimes @type declaration files are included. _DefinitelyTyped_ from **npm** are JavaScript @type definition files.

CMD + _click — The imported variable to see the @type definitions. You can also click on types in the type definition file to navigate throughout._

> If you want to change the properties of a @type definition file, _i.e., you can just change a string into a number by parse floating it._

- If the @types contain a **?** this mean that the type/argument will be optional.
- If the @type is an **interface,** this indicates that the type definition is going to be an object {}

## 🏓 Classes

- Inside the constructor() method for the class, that is when the initialization of your definitions for the User will be declared. _i.e., the name will be from the randomly generated from the faker module._
- When you reference something back to the constructor() that is an object.. You must refer to the object first before naming the properties _i.e., this.location = { latitude: hi, longitude, hello }_
- After instantiating a Class, you would then create a new variable that holds the values of that Class. _i.e., Class User {...} and declare it like so, const user = new User()_

### 🗺 Google Maps

- You can create a new google.maps.Map() class by creating an element in the index.html file with an id of 'map' and also a style property that will help show the map. The arguments in the Map() class require you to grab the id of the element.

## 🚣‍♀️ Objects
