// import fs from "fs";

export const transformDateStrToDate = function (date: string): Date {
  // 10/08/2018
  const [day, month, year] = date.split("/").map((value: string): number => {
    return parseInt(value, 10);
  });
  return new Date(year, month - 1, day);
};

// export const readFile = function (fileName: string): string {
//   return fs.readFileSync(fileName, "utf-8");
// };

// export const CSVFileTransformer = function (file: string): string[][] {
//   return file.split("\n").map((row: string): string[] => {
//     return row.split(",");
//   });
// };
