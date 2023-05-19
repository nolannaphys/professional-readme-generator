// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{

    type: 'input',
    message: 'What is your project called?',
    name: 'Title'
},
{
    type: 'input',
    message: 'How would you describe your project?',
    name: 'Description'
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
    type: 'list',
    message: 'Which license did you use?',
    name: 'License',
    choices: [
        {
            name: 'Apache',
            value: 'Apache'
        },
        {
            name: 'ICS',
            value: 'ICS'
        },
        {
            name: 'MIT',
            value: 'MIT'
        }
    ]
},
{
    type: 'input',
    message: 'What are the features of your project?',
    name: 'Features'
},
{
    type: 'input',
    message: 'How can others contribute to your project?',
    name: 'How to Contribute'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README successfully saved')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMePageContent = generateMarkdown(answers)

            writeToFile('README.md', readMePageContent);
        });
}

// Function call to initialize app
init();