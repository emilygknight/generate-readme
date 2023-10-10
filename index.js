// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs") // this si alibrary that deals with creating files or editing files etc..
const generateLicense = require('./utils/generateMarkdown.js');

// console.log(generateLicense.renderLicenseBadge);


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Whats the title of your application?'
    }, {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    }, {
        type: "input",
        name: "installation",
        message: "What are the instructions to install your application?"
    }, {
        type: "input",
        name: "usage",
        message: "How do you use this application?"
    }, {
        type: "input",
        name: "contributions",
        message: "What contributions did you use?"
    }, {
        type: "input",
        name: "tests",
        message: "How do you test this application?"
    }, {
        type: "list",
        name: "license",
        message: "What license did you use for this project?",
        choices: ["MIT", "APACHE", "GNU GPLv3"]
    }, {
        type: "input",
        name: "questions",
        message: "Enter Your GitHub Username Here"
    }, {
        type: "input",
        name: "email",
        message: "Enter your Email Here"
    }
];

// TODO: Create a function to write README file
function writeToFile(answers) {

    fs.writeFile('README.md', answers, (err) =>
    err ? console.log(err) : console.log('Successfully created readme!')
  );

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            console.log("THE ANSWERS!!!! ", answers);
            console.log("This is title ", answers.title)

            var template = `# ${answers.title}\n## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Decsption \n- ${answers.description}
## Installation \n- ${answers.installation}
## Usage \n- ${answers.usage}
## Screenshots \n- ![Image 10-9-23 at 7 21 PM](https://github.com/emilygknight/readme-generator/assets/138501781/a36ccc08-b706-4a35-bb1d-4c5bcc8d4796)
- ![Image 10-9-23 at 7 22 PM](https://github.com/emilygknight/readme-generator/assets/138501781/a3d6dc06-cd2b-4d25-ac40-833744b2fb58)
- ![Image 10-9-23 at 7 22 PM](https://github.com/emilygknight/readme-generator/assets/138501781/30ecc670-168a-4569-93d6-da6d7e7b1fc1)
- ![Image 10-9-23 at 7 23 PM](https://github.com/emilygknight/readme-generator/assets/138501781/78aac97e-4e67-4322-9be1-6214174a22aa)
- ![Image 10-9-23 at 9 00 PM](https://github.com/emilygknight/readme-generator/assets/138501781/28223fc7-f4c3-4221-92ca-01520f705015)
- ![Image 10-9-23 at 9 00 PM (1)](https://github.com/emilygknight/readme-generator/assets/138501781/d35f5ed1-11fa-4835-aa85-efafc0787016)
## Contributions \n- ${answers.contributions}
## Tests \n- ${answers.tests}
\n${generateLicense.renderLicenseSection(answers.license)}\n
## Questions \n- GitHub: https://github.com/${answers.questions}\n- Email: ${answers.email}`
            
           
            writeToFile(template);

        })


}

// Function call to initialize app
init();

