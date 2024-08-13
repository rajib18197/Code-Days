"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizer = void 0;
// import { HTMLOutput } from "../view/HTMLOutput";
var TeamAnalyzer_1 = require("../model/TeamAnalyzer");
var ConsoleOutput_1 = require("../view/ConsoleOutput");
var Organizer = /** @class */ (function () {
    function Organizer(analyzer, targetOutput) {
        this.analyzer = analyzer;
        this.targetOutput = targetOutput;
    }
    // Pre-configured instance of the class
    Organizer.TeamAnalysisWithHTMLReport = function (teamName, matches, season) {
        return new Organizer(new TeamAnalyzer_1.TeamAnalyzer(teamName, matches, season), new ConsoleOutput_1.ConsoleOutput());
    };
    Organizer.prototype.analyzeAndPrintReport = function () {
        var summary = this.analyzer.runSummary();
        this.targetOutput.print(summary);
    };
    return Organizer;
}());
exports.Organizer = Organizer;
