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
    message: 'Will your readme need to have a table of contents?',
    name: 'Table of Contents'
},
{
    type: 'input',
    message: 'How do you install your project?',
    name: 'Installation'
},
{
    type: 'input',
    message: 'How do you use your project?',
    name: 'Usage'
},
{
    type: 'input',
    message: 'What are the credits of your project?',
    name: 'Credits'
},
{
    type: 'input',
    message: 'What license did you use?',
    name: 'License'
},
{
    type: 'input',
    message: 'What badges did you use for your project?',
    name: 'Badges'
},
{
    type: 'input',
    message: 'What features does your project have?',
    name: 'Features'
},
{
    type: 'input',
    message: 'How can others contribute to your project?',
    name: 'How to Contribute'
},
{
    type: 'input',
    message: 'What are the tests for your project?',
    name: 'Tests'
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
