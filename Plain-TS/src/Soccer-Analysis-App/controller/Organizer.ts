import { MatchData } from "../config/types";
// import { HTMLOutput } from "../view/HTMLOutput";
import { TeamAnalyzer } from "../model/TeamAnalyzer";
import { ConsoleOutput } from "../view/ConsoleOutput";

export interface Analyzer {
  runWonAnalysis(): number;
  runLostAnalysis(): number;
  runDrawnAnalysis(): number;
  runSummary(): string;
}

export interface TargetOutput {
  print(summary: string): void;
}

export class Organizer {
  // Pre-configured instance of the class
  static TeamAnalysisWithHTMLReport(
    teamName: string,
    matches: MatchData[],
    season: string
  ): Organizer {
    return new Organizer(
      new TeamAnalyzer(teamName, matches, season),
      new ConsoleOutput()
    );
  }

  constructor(public analyzer: Analyzer, public targetOutput: TargetOutput) {}

  analyzeAndPrintReport() {
    const summary: string = this.analyzer.runSummary();
    this.targetOutput.print(summary);
  }
}
