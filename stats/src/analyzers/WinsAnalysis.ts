import { Analyzer } from '../Summary'
import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'

// When implementing a interface into a class. The class must contain all the methods that along with it.
// Since the Analyzer interface contains a run method. Our WinsAnalysis class should have a run method that takes an argument of an array of matches: MatchData[]
export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0
    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (
        match[2] === 'Man United' &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++
      }
    }
    return `Team ${this.team} won ${wins} games`
  }
}
