#!/usr/bin/env node
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todo = [];
const showMenu = () => {
    console.log("\n 1: Add a task");
    console.log("\n 2: View all tasks");
    console.log("\n 3: Exit");
    rl.question("choose an option: ", handleInput);
}

const handleInput = (option) => {
    if (option === "1") {
        rl.question("Enter the task: ", (task) => {
            todo.push(task);
            console.log(`Task added:`, task);
            showMenu()
        })
    } else if (option === "2") {
        console.log("\nYour todo list:");
        todo.forEach((task, index) =>{
            console.log(`${index + 1}.${task}`);
        })
        showMenu();
    } else if (option === "3") {
        console.log("GoodBye!");
        rl.close();
    } else {
        console.log("Invalid option try again");
        showMenu();
    }
}

showMenu()