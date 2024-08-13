"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
var fs = require("fs");
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CSVFileReader.prototype.read = function () {
        this.data = fs
            .readFileSync(this.fileName, { encoding: "utf-8" })
            .split("\n")
            .map(function (row) {
            return row.split(",");
        });
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
