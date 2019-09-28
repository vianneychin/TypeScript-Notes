import { OutputTarget } from '../Summary'

// Since we are implementing the interface of OutputTarget which contains a method of print(report:string): void,
// Out class ConsoleReport should contain a print method.
export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report)
  }
}
