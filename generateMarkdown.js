//This file is used to generate the template of the README.md using the answers provided by the user in index.js.

function generateMarkdown(answers) {
    return `
    
# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contribution)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)

## Installation
The following NPM dependences are required to be installed for the use of this program: ${answers.installation} 

## Usage
${answers.usage}

## Contributing 
${answers.contribution}

## Testing
${answers.testing}

## License
Licensed under ${answers.license}

## Questions
If you have questions regarding this program, please contact ${answers.email}.
If you have questions regarding the repository in general or would like to see more of my work, please see https://github/com/${answers.username}/

    `
}

module.exports = generateMarkdown;