// Declaring dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt user question's to populate the README.md
    promptUserQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Enter Project title? ",
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Explain commands for installation dependencies? ",
        },
        {
            type: "input",
            name: "tests",
            message: "Is a test included? "
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
            name: "usage",
            message: "What commands should be run to run test? "
        },
        {
            type: "input",
            name: "contributing",
            message: "What does user need to know about contributing to the repository?"
        },
        {
            type: "input",
            name: "questions",
            message: "Questions about using the repository? "
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
  init = async () =>  {
    try {
        // Asking user question's and generate responses
        const answers = await promptUserQuestions();
        const generateContent = generateMarkdown(answers);
        // Write new README.md to dist-directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successful! wrote to README.md');
    }   catch(err) {
        console.log('Error!');
    }
  }
  
  init();  

  