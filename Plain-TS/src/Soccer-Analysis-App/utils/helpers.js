"use strict";
// import fs from "fs";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDateStrToDate = void 0;
var transformDateStrToDate = function (date) {
    // 10/08/2018
    var _a = date.split("/").map(function (value) {
        return parseInt(value, 10);
    }), day = _a[0], month = _a[1], year = _a[2];
    return new Date(year, month - 1, day);
};
exports.transformDateStrToDate = transformDateStrToDate;
// export const readFile = function (fileName: string): string {
//   return fs.readFileSync(fileName, "utf-8");
// };
// export const CSVFileTransformer = function (file: string): string[][] {
//   return file.split("\n").map((row: string): string[] => {
//     return row.split(",");
//   });
// };
