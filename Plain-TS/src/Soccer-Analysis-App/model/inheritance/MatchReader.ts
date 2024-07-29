import { MatchResult } from "../../config/types";
import { transformDateStrToDate } from "../../utils/helpers";
import { CSVFileReader } from "./CSVFileReader";

// 1)
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CSVFileReader<MatchData> {
  // Further transformation for the requirement of our current application
  appSpecificFileDataTransformation(row: string[]): MatchData {
    return [
      transformDateStrToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}

const matchReader: MatchReader = new MatchReader("football.csv");
matchReader.read();
console.log(matchReader.data);

// 2)
// type RecipeData = [string, number, number, string, number];

// export class RecipeReader extends CSVFileReader<RecipeData> {
//   readAndTransformFileData(): void {
//     const fileData: string[][] = this.read();
//     // Further transformation for the requirement of our current application
//     this.data = fileData.map((row: string[]): RecipeData => {
//       return [row[0], Number(row[1]), Number(row[2]), row[3], Number(row[4])];
//     });
//   }
// }

// const recipeReader: RecipeReader = new RecipeReader("recipe.csv");
// recipeReader.readAndTransformFileData();
// console.log(recipeReader.data);
