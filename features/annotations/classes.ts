/*  Public and Private 
  --> If a method is 'public' it will be publicly available throughout your code.
  --> If a method is 'private' it will be privately available only in the class declaration.
  --> If a method is 'protected' it will be only available within the parent class Object OR the children classes.
*/

class Vehicle {
  constructor(public color: string) {
    this.color = color
  }
  protected honk(): void {
    console.log('beep beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log('vroom vroom')
  }
  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'black')
car.startDrivingProcess()
