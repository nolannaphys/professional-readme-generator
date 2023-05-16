// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [        {
    type: 'input',
    message: 'How would you describe your project?',
    name: 'Description'
},
{
    type: 'input',
    message: 'How would you describe your project?',
    name: 'Description'
}];

// TODO: Create a function to write README file
function writeToFile(readmeData) {
    fs.writeFile('README.md',  readmeData, (err) =>
        er ? console.error(err) : console.log('Success!')
        );
};

// TODO: Create a function to initialize app
function init(){
    inquirer
    .prompt(questions)

    .then( answers => {
        console.log(answers);

    })
};
// Function call to initialize app
init();
