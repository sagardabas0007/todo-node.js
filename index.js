#!/usr/bin/env node
import { program } from "commander" ;
import fs from "fs";
import path from "path";
import chalk from "chalk";

program
    .option("-f,--file <path>", "enter your file path");

program.parse(process.argv);
const options = program.opts();

if (!options.file) {
    console.log(chalk.red(`There is no file in that directory`));
    process.exit(1);
} 

const filePath = path.resolve(options.file); 

if (!fs.existsSync(filePath)) {
    console.log(chalk.red(`File not found! ${filePath}`));
    process.exit(1);
}

try {
    const data = fs.readFileSync(filePath, "utf-8");
    console.log(chalk.green(`The length of characters: `), chalk.bgGreen(`${data.length}`));
} catch (err) {
    console.log(chalk.red(`there was an error`), chalk.bgRed(`${err}`));
}