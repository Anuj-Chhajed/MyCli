"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathCommands = void 0;
const chalk_1 = __importDefault(require("chalk"));
class MathCommands {
    add(a, b) {
        if (isNaN(Number(a)) || isNaN(Number(b))) {
            console.log(chalk_1.default.red("Invalid numbers"));
            return;
        }
        console.log(chalk_1.default.green(Number(a) + Number(b)));
    }
    sub(a, b) {
        console.log(chalk_1.default.yellow(Number(a) - Number(b)));
    }
    mul(a, b) {
        console.log(chalk_1.default.blue(Number(a) * Number(b)));
    }
    div(a, b) {
        if (Number(b) === 0) {
            console.log(chalk_1.default.red("Division by zero"));
            return;
        }
        console.log(chalk_1.default.green(Number(a) / Number(b)));
    }
}
exports.MathCommands = MathCommands;
