const inquirer = require("inquirer");
const fs = require("fs");
const mdGen = require("./generateMarkdown.js")

inquirer.prompt([
{
    type: "input",
    message: "What is your github user name?",
    name: "username"
},
{
    type: "input",
    message: "What is your github email?",
    name: "email"
},
{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
},
{
    type: "input",
    message: "Please give a short description for your project:",
    name: "description"
},
{
    type: "input",
    message: "What license does your project have?",
    name: "license"
},
{
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation"
},
{
    type: "input",
    message: "What command should be run to run the tests?",
    name: "tests"
},
{
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage"
},
{
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing"
}

])
.then(function(answers){
    writeToFile("./README.md", answers);
})
function writeToFile(fileName, data) {
    fs.writeFile(fileName, mdGen.generateMarkdown(data), err => {
        if(err) console(err);
    })
}

function init() {
    fs.writeFile("./README.md", "", err => {
        if(err) console.log(err);
    })
}

init();
