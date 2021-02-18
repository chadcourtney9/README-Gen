const generateMkd = (answers, data) => {
    return `# ${answers.title}
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)


## Table of Contents
- [Installation](#installation)
- [Usage](#usages)
- [Contributors](#contributors)
- [Tests](#tests)
- [License](#license)
- [contact](#contact)

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
email: ${answers.email} `
}

module.exports = generateMkd;