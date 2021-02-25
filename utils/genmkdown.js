// is a basic outline of the markdown page and takes user input and places it into the coresponding areas
const generateMkd = (answers) => {
    return `# ${answers.title}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)


## Table of Contents
- [Installation](#Installation)
- [Usage](#Usages)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [License](#License)
- [contact](#Contact)

## Installation
${answers.instructions}

## Usages
${answers.usage}

## Contributors
${answers.contribute}

## Tests
${answers.tests}

### License
${answers.license}

#### Contact
${answers.github}
${answers.email} `
}

module.exports = generateMkd;