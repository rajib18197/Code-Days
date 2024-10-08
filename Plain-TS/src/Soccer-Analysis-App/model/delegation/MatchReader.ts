const { MatchData, MatchResult } = require("../../config/types");
const { transformDateStrToDate } = require("../../utils/helpers");
const { CSVFileReader } = require("./CSVFileReader");

export interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  // Pre-configured instance of the class
  static fromCSV(fileName: string): MatchReader {
    return new MatchReader(new CSVFileReader(fileName));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        transformDateStrToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}

// Favor Object Composition over Class Inheritance.
// Delegation is one of the way to make Composition a powerful Principle.
// So Delegation is a way of implementation of a generic term Composition.
// So, Delegation is a design pattern and Composition is a Design principle.
