"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilityCommands = void 0;
const fs_1 = __importDefault(require("fs"));
class UtilityCommands {
    greet(name) {
        console.log(`Hello ${name}`);
    }
    fileInfo(filename) {
        if (!fs_1.default.existsSync(filename)) {
            console.log("File does not exist");
            return;
        }
        const stats = fs_1.default.statSync(filename);
        console.log("File Size:", stats.size);
        console.log("Created At:", stats.birthtime);
    }
    time() {
        console.log(new Date().toLocaleTimeString());
    }
    random() {
        console.log(Math.floor(Math.random() * 100));
    }
}
exports.UtilityCommands = UtilityCommands;
