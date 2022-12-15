// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generatePage = require('./utils/generateMarkdown.js')
// array of questions for user input
const questions = [{

    // title of project
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
    validate: (value) => {
        if (value) { return true } else { return 'Please enter your project title.' }
    },
},
{
    // repo name
    type: 'input',
    name: 'repo',
    message: 'What is the repository name of your project?',
    validate: (value) => {
        if (value) { return true } else { return 'Please enter your repository name.' }
    },
},
{
    // for the description of the project
    type: 'input',
    name: 'description',
    message: 'What is the description of your project?',
    validate: (value) => {
        if (value) { return true } else { return 'Please enter description.' }
    },
},
{
    // installation of the project 
    type: 'input',
    name: 'installation',
    message: 'Enter instructions for installation',
    validate: (value) => {
        if (value) { return true } else { return 'Please enter instructions.' }
    },
},
{
    // usage of the project
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
    validate: (value) => {
        if (value) { return true } else { return 'Please enter usage information.' }
    },
},
{
    // contributers
    type: 'input',
    name: 'contribution',
    message: 'What are contribution guidelines?',
    validate: (value) => {
        if (value) { return true } else { return 'Please enter your contribution guidelines.' }
    },
},
{
    // test instructions
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
    validate: (value) => {
        if (value) { return true } else { return 'Please enter your test instructions.' }
    },
},
{
    // license used for project
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project?',
    choices: ["Apache", "BSD 3", "GNU GPLv3.0", "MIT", "No license"]
},
{
    // username for GitHub
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: (value) => {
        if (value) { return true } else { return 'Please enter your username.' }
    },
},
{
    // email
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: (value) => {
        if (value) {
            return true
        } else { return 'Please enter your email address.' }
    },
}
];

// function for the  write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Your README.md file has been generated in the assets folder. ')
    )
};



// function to initialize app
function init() {

    inquirer.prompt(questions)
        .then((answers) => {
            const readmePageContent = generatePage(answers);

            writeToFile('./assets/generatedREADME.md', readmePageContent);
        })
};

// Function call to initialize app
init();