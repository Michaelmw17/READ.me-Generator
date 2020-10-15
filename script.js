// Declaring dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadMe = require("./utils/generateReadMe")
const writeFileAsync = util.promisify(fs.writeFile);


// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//Prompt user question's to populate the README.md
    promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Enter Project title? ",
        },
        {
            type: "input",
            name: "description",
            message: "Please Enter a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Explain commands for installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What commands should be run to run test "
        },
        {
            type: "list",
            name: "license",
            message: "Choose suitable license for this project: ",
            choices: [
                "Apache",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "What does user need to know about contributing to this repository?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is a test included? "
        },
        {
            type: "input",
            name: "questions",
            message: "What does the user know to know about using the repository? "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        }
    ]);
} 

// Async function using util.promisify 
  async function init() {
    try {
        // Asking user question's and generate responses
        const answers = await promptUser();
        const generateContent = generateReadMe(answers);
        // Write new README.md to dist-directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successful! wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  