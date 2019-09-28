const colors: string[] = ['red', 'green', 'blue']
const dates = [new Date(), new Date()]

const moreColors: string[][] = [
  ['black', 'blue'],
  ['green', 'red'],
  ['brown', 'yellow']
]

// Prevents incompatible values.
colors.push(100) /* Can't push a number. */

// Help with map()
colors.map(
  (color: string): string => {
    return color
  }
)

// Flexible Types
const importantDates: (Date | string)[] = [new Date(), '01-01-2019']
