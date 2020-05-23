function generateMarkdown(data) {
  return `
# ${data.title}
![](https://img.shields.io/badge/LICENSE-${data.license}-<ORANGE>)
# Description
${data.description}

# Table of Contents
* [Installation](#Installation "Goto Installation")
* [Usage](#Usage "Goto Usage")
* [License](#License "Goto License")
* [Contributing](#Contributing "Goto Contributing")
* [Tests](#Tests "Goto Tests")
* [Questions](#Questions "Goto Questions")

# Installation
To install necessary dependencies, run the following command:
${data.installation}
# Usage
${data.usage}
# License
This project is licensed under the ${data.license} license.
# Contributing
${data.contributing}
# Tests
${data.tests}
# Questions
* github username: ${data.username}
* email: ${data.email}
`;
}

module.exports = {
  generateMarkdown: generateMarkdown
}
