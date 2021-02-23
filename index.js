const inquirer = require('inquirer');
const fs = require("fs");

//Prompting the user questions to generate their README.md file.
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What programs and/or dependencies are required to install and run this web application?',
            name: 'installation',
        },
        //Not sure how to incorporate this here for the purposes of this README project
        /*{
            type: 'input',
            message: 'What data is used for this web application? Ask TAs to help define this question...',
            name: 'usage',
        },*/
        {
            type: 'input',
            message: 'How can other contribute to this project? What are the contribution guidlines?',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'How is testing performed on your web application/project?',
            name: 'testing',
        },
        {
            type: 'checkbox',
            message: 'Which type of license do you want to add to your project?',
            name: 'license',
            choices: ['MIT', 'ISC']
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'license',
        },
    ])

    //The following functions gets the user's answers and places populates the information required for the README file, using the README file template.
    //Note: JSON.stringify is required to convert the answers, which is an object, into a string to populate the README file.
    .then(answers => {
        console.log(answers);
        fs.appendFile("README.md", JSON.stringify(answers) + '\n', err =>
            err ? console.error(err) : console.log("Response added to file."));
    })

/*.catch(error => {
    if (error.isTtyError) {

    } else {

    }
});*/