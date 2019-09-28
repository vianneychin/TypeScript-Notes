"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Since we are implementing the interface of OutputTarget which contains a method of print(report:string): void,
// Out class ConsoleReport should contain a print method.
var ConsoleReport = /** @class */ (function () {
    function ConsoleReport() {
    }
    ConsoleReport.prototype.print = function (report) {
        console.log(report);
    };
    return ConsoleReport;
}());
exports.ConsoleReport = ConsoleReport;
