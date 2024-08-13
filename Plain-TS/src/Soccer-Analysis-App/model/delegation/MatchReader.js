"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var helpers_1 = require("../../utils/helpers");
var CSVFileReader_1 = require("./CSVFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    // Pre-configured instance of the class
    MatchReader.fromCSV = function (fileName) {
        return new MatchReader(new CSVFileReader_1.CSVFileReader(fileName));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                (0, helpers_1.transformDateStrToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
// Favor Object Composition over Class Inheritance.
// Delegation is one of the way to make Composition a powerful Principle.
// So Delegation is a way of implementation of a generic term Composition.
// So, Delegation is a design pattern and Composition is a Design principle.
