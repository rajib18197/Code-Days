import { MatchData, MatchResult } from "../config/types";
import { Analyzer } from "../controller/Organizer";

export class TeamAnalyzer implements Analyzer {
  constructor(
    public teamName: string,
    public matches: MatchData[],
    public season: string
  ) {}

  runSummary(): string {
    const totalMatchesPlayed: number = this.totalMatchesPlayed();

    const wins: number = this.runWonAnalysis();
    const lose: number = this.runLostAnalysis();
    const draw: number = this.runDrawnAnalysis();

    const wonPercentage: number = this.wonPercentage();
    const lostPercentage: number = this.lostPercentage();
    const drawnPercentage: number = this.drawnPercentage();

    return `${this.teamName} - Season ${this.season}: Played ${totalMatchesPlayed} games, Won: ${wins} games (${wonPercentage}%), lost: ${lose} games (${lostPercentage}%) and drawn ${draw} games (${drawnPercentage}%).`;
  }

  private totalMatchesPlayed(): number {
    let totalMatches = 0;

    for (const match of this.matches) {
      if (match[1] === this.teamName || match[2] === this.teamName) {
        totalMatches++;
      }
    }

    return totalMatches;
  }

  private wonPercentage(): number {
    const totalMatches: number = this.totalMatchesPlayed();
    const wins: number = this.runWonAnalysis();

    return (wins * 100) / totalMatches; // (10 * 100) / 20 = 50%
  }

  private lostPercentage(): number {
    const totalMatches: number = this.totalMatchesPlayed();
    const lost: number = this.runLostAnalysis();

    return (lost * 100) / totalMatches; // (10 * 100) / 20 = 50%
  }

  private drawnPercentage(): number {
    const totalMatches: number = this.totalMatchesPlayed();
    const drawn: number = this.runDrawnAnalysis();

    return (drawn * 100) / totalMatches; // (10 * 100) / 20 = 50%
  }

  runWonAnalysis() {
    let wins = 0;

    for (const match of this.matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return wins;
  }

  runLostAnalysis() {
    let lose = 0;

    for (const match of this.matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.AwayWin) {
        lose++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.HomeWin
      ) {
        lose++;
      }
    }

    return lose;
  }

  runDrawnAnalysis() {
    let draw = 0;

    for (const match of this.matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.Draw) {
        draw++;
      } else if (match[2] === this.teamName && match[5] === MatchResult.Draw) {
        draw++;
      }
    }

    return draw;
  }
}
