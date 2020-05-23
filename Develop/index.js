const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing"
}

])
.then(function(answers){
    fs.writeFile("README.md", JSON.stringify(answers, null, 2), function(err){
        if (err) {
            return console.log(err);
        }
        console.log("Answers saved.") 
    })
})
// function writeToFile(fileName, data) {
// }

// function init() {
// }

// init();
