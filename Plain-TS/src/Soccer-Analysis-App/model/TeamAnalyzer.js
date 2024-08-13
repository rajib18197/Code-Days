"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamAnalyzer = void 0;
var types_1 = require("../config/types");
var TeamAnalyzer = /** @class */ (function () {
    function TeamAnalyzer(teamName, matches, season) {
        this.teamName = teamName;
        this.matches = matches;
        this.season = season;
    }
    TeamAnalyzer.prototype.runSummary = function () {
        var totalMatchesPlayed = this.totalMatchesPlayed();
        var wins = this.runWonAnalysis();
        var lose = this.runLostAnalysis();
        var draw = this.runDrawnAnalysis();
        var wonPercentage = this.wonPercentage();
        var lostPercentage = this.lostPercentage();
        var drawnPercentage = this.drawnPercentage();
        return "".concat(this.teamName, " - Season ").concat(this.season, ": Played ").concat(totalMatchesPlayed, " games, Won: ").concat(wins, " games (").concat(wonPercentage, "%), lost: ").concat(lose, " games (").concat(lostPercentage, "%) and drawn ").concat(draw, " games (").concat(drawnPercentage, "%).");
    };
    TeamAnalyzer.prototype.totalMatchesPlayed = function () {
        var totalMatches = 0;
        for (var _i = 0, _a = this.matches; _i < _a.length; _i++) {
            var match = _a[_i];
            if (match[1] === this.teamName || match[2] === this.teamName) {
                totalMatches++;
            }
        }
        return totalMatches;
    };
    TeamAnalyzer.prototype.wonPercentage = function () {
        var totalMatches = this.totalMatchesPlayed();
        var wins = this.runWonAnalysis();
        return (wins * 100) / totalMatches; // (10 * 100) / 20 = 50%
    };
    TeamAnalyzer.prototype.lostPercentage = function () {
        var totalMatches = this.totalMatchesPlayed();
        var lost = this.runLostAnalysis();
        return (lost * 100) / totalMatches; // (10 * 100) / 20 = 50%
    };
    TeamAnalyzer.prototype.drawnPercentage = function () {
        var totalMatches = this.totalMatchesPlayed();
        var drawn = this.runDrawnAnalysis();
        return (drawn * 100) / totalMatches; // (10 * 100) / 20 = 50%
    };
    TeamAnalyzer.prototype.runWonAnalysis = function () {
        var wins = 0;
        for (var _i = 0, _a = this.matches; _i < _a.length; _i++) {
            var match = _a[_i];
            if (match[1] === this.teamName && match[5] === types_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.teamName &&
                match[5] === types_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return wins;
    };
    TeamAnalyzer.prototype.runLostAnalysis = function () {
        var lose = 0;
        for (var _i = 0, _a = this.matches; _i < _a.length; _i++) {
            var match = _a[_i];
            if (match[1] === this.teamName && match[5] === types_1.MatchResult.AwayWin) {
                lose++;
            }
            else if (match[2] === this.teamName &&
                match[5] === types_1.MatchResult.HomeWin) {
                lose++;
            }
        }
        return lose;
    };
    TeamAnalyzer.prototype.runDrawnAnalysis = function () {
        var draw = 0;
        for (var _i = 0, _a = this.matches; _i < _a.length; _i++) {
            var match = _a[_i];
            if (match[1] === this.teamName && match[5] === types_1.MatchResult.Draw) {
                draw++;
            }
            else if (match[2] === this.teamName && match[5] === types_1.MatchResult.Draw) {
                draw++;
            }
        }
        return draw;
    };
    return TeamAnalyzer;
}());
exports.TeamAnalyzer = TeamAnalyzer;
