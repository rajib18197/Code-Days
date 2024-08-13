"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLOutput = void 0;
var fs_1 = require("fs");
var HTMLOutput = /** @class */ (function () {
    function HTMLOutput(season) {
        this.season = season;
    }
    HTMLOutput.prototype.print = function (summary) {
        var html = "\n        <div>\n            <h2>Summary of Season - ".concat(this.season, "</h2>\n            <div>\n                <p>").concat(summary, "</p>\n            </div>\n        </div>\n    ");
        this.writeFile("report-".concat(this.season, ".html"), html);
    };
    HTMLOutput.prototype.writeFile = function (fileName, data) {
        fs_1.default.writeFileSync(fileName, data);
    };
    return HTMLOutput;
}());
exports.HTMLOutput = HTMLOutput;
