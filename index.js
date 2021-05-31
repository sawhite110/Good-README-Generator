// TODO: Include dependencies packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
    if (licenses === "APM[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)") {
        return "[APM][![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (licenses === "AUR") {
        return "AUR[![License: AUR](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (licenses === "BSD 3-Clause") {
        return "BSD 3-Clause[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (licenses === "BSD 2-Clause") {
        return "BSD 2-Clause[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (licenses === "Eclipse Marketplace License") {
        return "ECLIPSE[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (licenses === "GNU GPL v2") {
        return "GNU GPL v2[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    } else if (licenses === "GNU GPL v3") {
        return "GNU GPL v3[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (licenses === "IBM Public License") {
        return "IBM[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (licenses === "Mozilla") {
        return "Mozilla[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (licenses === "Unlicense") {
        return "Unlicense[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    } else {
        return " ";
    }
}

// TODO: Create a function that returns the license link from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba, Shields.io](http://shields.io/, & https://opensource.org/licenses/
// If there is no license, return an empty string
// function renderLicenseLink() {
//     if (licenses === "APM") {
//         return "[MIT license from:](https://opensource.org/licenses/MIT)";
//     } else if (licenses === "AUR") {
//         return "AUR license from: (https://opensource.org/licenses/Apache-2.0)";
//     } else if (licenses === "BSD 3-Clause") {
//         return "BSD 3-Clause license from: (https://opensource.org/licenses/BSD-3-Clause)";
//     } else if (licenses === "BSD 2-Clause") {
//         return "BSD 2-Clause license from: (https://opensource.org/licenses/BSD-2-Clause)";
//     } else if (licenses === "Eclipse Marketplace License") {
//         return "Eclipse Marketplace License license from: (https://opensource.org/licenses/EPL-1.0)";
//     } else if (licenses === "GNU GPL v2") {
//         return "GPL v2 license from: (https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
//     } else if (licenses === "GNU GPL v3") {
//         return "GPL v3 license from: (https://www.gnu.org/licenses/gpl-3.0)";
//     } else if (licenses === "IBM Public License") {
//         return "IPL 1.0 license from: (https://opensource.org/licenses/IPL-1.0)";
//     } else if (licenses === "Mozilla") {
//         return "MPL 2.0 license from: (https://opensource.org/licenses/MPL-2.0)";
//     } else if (licenses === "Unlicense") {
//         return "Unlicense license from: (http://unlicense.org/)";
//     } else {
//         return " ";
//     }
// }

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "project",
    },
    {
      type: "input",
      message: "Can you give a brief description explaining the why, what, and how of your project?",
      name: "description",
    },
    {
      type: "input", //"editor" will open up a text editor for large input information
      message: "Can you provide step-by-step details on how to install your project?",
      name: "installation",
    },
    {
      type: "input", //"editor" will open up a text editor for large input information
      message: "Please provide the usage information for your project?",
      name: "usage",
    },
    {
        type: 'list',
        message: 'Use the arrows and enter key to choose a license from the list below?',
        name: 'licenses',
        choices: [
          "APM",
          "AUR",
          "BSD 3-Clause",
          "BSD 2-Clause",
          "Eclipse Marketplace License",
          "GNU GPL v2",
          "GNU GPL v3",
          "IBM Public License",
          "Mozilla",
          "Unlicense",
          "None",
        ]
      },
      {
        type: "input",
        message: "Tell others how they can contribute to your project by entering in contribution guidelines.",
        name: "contributing",
      },
      {
        type: "input",
        message: "What are your test instructions for your project?",
        name: "tests",
      },
      {
      type: "input",
      message: "What is your gitHub username?",
      name: "gitHub",
    },
    {
      type: "input",
      message: "What is your preferred email address for your project?",
      name: "email",
    },
  ])
  .then((response) => {

    // TODO: Create a function to write README file
    fs.writeFile("README.md", returnMarkDown(response), (err) => err ? console.error(err) : console.log("Successfully created README.md!"));
  });

  //Function to setup the response markDown skeleton and answer placeholders
  // TODO: Create a function to initialize app
function returnMarkDown(responses) {

  //Create a destructuring the object for the responses for each user entry
  const {project, description, installation, usage, licenses, tests, contributing, gitHub, email } = responses;
  const licenseString = renderLicenseBadge(licenses);
  
  return `
  # Professional README: ${project}
  
  ## Description of Project:
  
  * ${description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  * The application will be invoked in your designated command-line by using the following command: 
  
  node index.js

  * ${installation}
  
  ## Usage
  
  * ${usage}
  
  ## License 
  
  * ${licenseString}
  
  * If you need further help indeciding a license to choose for your application, please checkout the following website: [https://choosealicense.com/](https://choosealicense.com/).
  
  ## Contributing

  * ${contributing}
  
  ## Tests

  * ${tests}
  
  * During testing, I went through the series if questions and received a generated README.md file with the results from my input. 
  
  ## Questions
  
  * For any questions about this repo, please contact me at: [GitHub Username:](https://${gitHub}) 
  
  * For any addition qestions, you can also reach out to me by email at: ${email}`
};