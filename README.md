# TypeScript Notes

### 🌵 Enviroment Setup

    npm install -g parcel-bundler
    npm install -g typescript
    npm install -g ts-node

    For HTML files:
    --> parcel index.html

    For TypeScript --> JavaScript Files:
    --> tsc --init
    --> tsc index.ts

### ⚙️ tsconfig.json

- Uncomment rootDir and tell the config file where the root index.ts file is.
- Uncomment outDir and tell the config file where to store the build javascript files of typescript files.
- ! After doing this, simply run:
  - —> tsc
  - —> tsc -w
    - This command watches if there is any changes in the root index.ts file and automatically compiles the code into the build folder as well as checks for errors.

## ⛅️ Dev. Environment Node Setup

    yarn add --dev concurrently nodemon

- Add some scripts to the package.json.

  { "scripts": { "start:build": "tsc -w", "start:run": "nodemon build/index.js", "start": "concurrently npm:start:\*" }, }

  <-- For HTML files: -->

    <head>
    	<script src="./src/index.ts"/>
    </head>

### 🗒 @type/declaration Notes

> @type/declaration files are sometimes included with the NPM modules. If not, manually install them.

> DefinitelyTyped files from NPM are labeled as JavaScript @type/declaration files.

> CMD + 🖱 the imported variable to see the @type/definition file in your Visual Studio Code editor.

### 📓 TypeScript Notes

- **type**
  - Tuple used to define the type of contents/index of an array for a return value.
- **const & let**
  - When declaring a variable with a method, TypeScript will automatically convert the variable with a Type.
    - i.e., const characters = this.data.split('')
      - Because split returns an array with strings, TypeScript will add a rule that characters will be an array of strings.
- **?** — Optional argument.
- **| —** Or argument
  - Could use as an additional clause if the Classes has the same property for a function.
  - When attached to a function that expects to return either a string or array, the OR operator will only allow features of methods that are both able to use on strings and arrays.
    - Strings will receive an error since strings are not mutable with bracket notation like arrays, even though you can access characters with bracket notation.
- **generics <T>**
  - Like function arguments, but for types in class/function definitions.
  - Allows us to define the type of a property/argument/return value at a future point.
  - Used heavily when writing reusable code.
- \*inheritance**\*/abstract** _classes_
  - Sets up a contract between different classes.
  - Use when we are trying to build up a definition of an object.
  - Strongly couples classes together.
- **interface**
  - Sets up a contracts between different classes.
  - Use when we have very different objects that we want to work together.
  - Promotes loose coupling.
- **implements**
  - i.e., _class User implements someInterface {...}_
    - This requires the class to adhere to all the TypeScript rules on that interface.
- **private** — \*\*\*\*Disallows any other engineers from using certain methods in an API. This reduces the complexity of our application and makes it certain to what we can or cannot do in our application.
- **public** — These two snippets of code are equivalent when using a public.

  export class NumbersCollection { data: number[] constructor(data: number[]) { this.data = data } }

  export class NumbersCollection { constructor(public data: number[]) {} }

- **Type Guards**

  - Adding a TypeGuard allows TypeScript to understand that we could use restricted variables if used with a conditional within the function that is expecting either a string or an array. You will also be able to use the array's custom JavaScript methods without errors.
    - i.e., collection: number[] | string ⇒ {}
      - if (collection instanceof Array) {}
      - if (collection instanceof String) {}
  - **instanceof**

    > _for every other value, i.e., Array, String, Object, Date, and (Class name)_

    [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

  - **typeof**

    > _for 'number', 'string', 'boolean', and 'symbol'_

    [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

- **get**
  - Allows you to call a function in a Class without calling it like a method. i.e., collection.sayHello in lieu of collection.sayHello()
- **enum** — _enumeration_
  - i.e., enum MatchResult { hi = 'hello', bye = 'goodbye}
  - Practically used to signal to other engineers that it's a collection of related values for other functions so your code is clearer.

### Inheritance vs Composition

- Favor object composition over class inheritance. In summary this means that you should create references to a parent class over to several children rather than creating a tree of inheriting properties.
