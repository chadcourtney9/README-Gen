const fs = require("fs");
const inquirer = require("inquirer")
const util = require("util")

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter project title!"
        },
        {
            type: "input",
            name: "instructions",
            message: "Add installation instructions, usage, contributing and tests"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "github",
            message: "Enter GitHub username"
        },
        {
            type: "input",
            name: "Email",
            message: "Input email here"
        }
    ]);
    const generateMkd = (answers) => {
        ``
    }
}