// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    license = `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    return license;
  }
  else if (license === 'Apache') {
    license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
    return license;
  }
  else if (license === 'ISC') {
    license = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
    return license;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
      license = `(https://opensource.org/licenses/MIT)`
      return license;
  }
  else if(license === 'Apache'){
      license = `(https://opensource.org/licenses/Apache-2.0)`
      return license;
  }
  else if(license === 'ISC'){
      license = `(https://opensource.org/licenses/ISC)`
      return license;
  }
  else{
      return '';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license)
};

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, credits, license, features, contribution, test}) {
  return `# ${title}
## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${renderLicenseSection(license)}

## Features
${features}

## How to Contribute 
${contribution}

## Test
${test}
`;
};


module.exports = generateMarkdown;
