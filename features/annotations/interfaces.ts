interface Vehicle {
  name: string
  year: Date
  broken: boolean
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return 'hey this is an example of using a method in a interface'
  }
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`name: ${vehicle.name}`)
  console.log(`year: ${vehicle.year}`)
  console.log(`broken: ${vehicle.broken}`)
  console.log(`broken: ${vehicle.summary()}`)
}

printVehicle(oldCivic)
