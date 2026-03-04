#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const MathCommands_1 = require("./commands/MathCommands");
const ApiCommands_1 = require("./commands/ApiCommands");
const UtilityCommands_1 = require("./commands/UtilityCommands");
const program = new commander_1.Command();
const math = new MathCommands_1.MathCommands();
const api = new ApiCommands_1.ApiCommands();
const util = new UtilityCommands_1.UtilityCommands();
program
    .name("devcli")
    .description("Custom CLI tool built with Node + TypeScript")
    .version("1.0.0");
program
    .command("greet <name>")
    .description("Greeting")
    .action((name) => util.greet(name));
program
    .command("add <num1> <num2>")
    .description("Add two numbers")
    .action((a, b) => math.add(a, b));
program
    .command("sub <num1> <num2>")
    .description("Subtract two numbers")
    .action((a, b) => math.sub(a, b));
program
    .command("mul <num1> <num2>")
    .description("Multiply two numbers")
    .action((a, b) => math.mul(a, b));
program
    .command("div <num1> <num2>")
    .description("Divide two numbers")
    .action((a, b) => math.div(a, b));
program
    .command("joke")
    .description("Random Joke")
    .action(() => api.joke());
program
    .command("quote")
    .description("Random Quote")
    .action(() => api.quote());
program
    .command("github <username>")
    .description("GitHub user info")
    .action((u) => api.github(u));
program
    .command("weather <city>")
    .description("Weather of city")
    .action((c) => api.weather(c));
program
    .command("fact")
    .description("Random fact")
    .action(() => api.fact());
program
    .command("fileinfo <filename>")
    .description("Get file info")
    .action((f) => util.fileInfo(f));
program
    .command("time")
    .description("Current time")
    .action(() => util.time());
program
    .command("random")
    .description("Random number")
    .action(() => util.random());
program.parse();
