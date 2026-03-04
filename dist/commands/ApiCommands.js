"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCommands = void 0;
const axios_1 = __importDefault(require("axios"));
const chalk_1 = __importDefault(require("chalk"));
class ApiCommands {
    async joke() {
        try {
            const res = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
            console.log(chalk_1.default.cyan(res.data.setup));
            console.log(chalk_1.default.cyan(res.data.punchline));
        }
        catch {
            console.log("Error fetching joke");
        }
    }
    async quote() {
        try {
            const res = await axios_1.default.get("https://zenquotes.io/api/random");
            console.log(chalk_1.default.green(res.data[0].q));
            console.log(`By: ${res.data[0].a}`);
        }
        catch {
            console.log("Error fetching quote");
        }
    }
    async github(username) {
        try {
            const res = await axios_1.default.get(`https://api.github.com/users/${username}`);
            const user = res.data;
            console.log(chalk_1.default.yellow(`Name: ${user.name}`));
            console.log(`Followers: ${user.followers}`);
            console.log(`Public Repos: ${user.public_repos}`);
        }
        catch {
            console.log("GitHub user not found");
        }
    }
    async weather(city) {
        try {
            const res = await axios_1.default.get(`https://wttr.in/${city}?format=3`);
            console.log(chalk_1.default.blue(res.data));
        }
        catch {
            console.log("Error fetching weather");
        }
    }
    async fact() {
        try {
            const res = await axios_1.default.get("https://uselessfacts.jsph.pl/random.json?language=en");
            console.log(chalk_1.default.magenta(res.data.text));
        }
        catch {
            console.log("Error fetching fact");
        }
    }
}
exports.ApiCommands = ApiCommands;
