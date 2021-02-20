const fs = require("fs");
const inquirer = require("inquirer")
const util = require("util")
const generateMkd = require("./utils/genmkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

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
            message: "Add installation instructions"
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usages here"
        },
        {
            type: "input",
            name: "contribute",
            message: "Enter Contritbutors",
        },
        {
            type: "input",
            name: "tests",
            message: "Enter tests here"
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
            name: "email",
            message: "Input email here"
        }
    ]);
}

async function init() {
    try {
        const answers = await promptUser();
        const populate = generateMkd(answers);
        await writeFileAsync("./dist/README.md", populate);
        console.log("Successful!")
    } catch (err) {
        console.log(err)
    }
}

init();