const profile = {
  name: 'Alex',
  age: 20,
  coordinates: {
    latitude: 0,
    longitude: 20
  },
  setAge(age: number): void {
    this.age = age
  }
}

const { age }: { age: number } = profile
const {
  coordinates: { latitude, longitude }
}: { coordinates: { latitude: number; longitude: number } } = profile
