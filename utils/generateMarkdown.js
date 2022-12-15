// function for license badges
function renderLicenseBadge(licenseBadge) {

    if (licenseBadge !== 'No license') {
      switch (licenseBadge) {
        case 'Apache':
          licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
          break;
        case 'BSD 3':
          licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
          break;
        case 'GNU GPLv3.0':
          licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
          break;
        case 'MIT':
          licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
          break;
        default:
          break;
      }
      return licenseBadge;
    } else {
      return ' ';
    }
  };
  
  
  // returns empty string if no license is used
  function renderLicenseLink(licenseLink) {
  
    if (licenseLink !== 'No license') {
      switch (licenseLink) {
        case 'Apache 2.0':
          licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
          break;
        case 'BSD 3-Clause':
          licenseLink = `(https://opensource.org/licenses/BSD-3-Clause)`;
          break;
        case 'GNU GPLv3.0':
          licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
          break;
        case 'MIT':
          licenseLink = `(https://opensource.org/licenses/MIT)`;
          break;
        default:
          break;
      }
      return licenseLink;
    } else {
      return ' ';
    }
  }
  
  // returns empty string if no license is used
  function renderLicenseSection(license) {
  
    if (license !== 'No license') {
      return `
         ${renderLicenseBadge(license)} & ${renderLicenseLink(license)}
          `;
    } else {
      return ' ';
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
   
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [Questions](#questions)
    * [License](#license)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contribution
    ${data.contribution}
    ## Tests
    ${data.test}
    ## Questions
    * Checkout my [GitHub profile](https://github.com/${data.github})
    
    * Any additional questions or feed back, feel free to [send an email](mailto:${data.email}). 
    ## License
    Copyright (c) [${data.github}](https://github.com/${data.github}). All rights reserved.
    
    Licensed under  ${renderLicenseSection(data.license)} license.
    
  `;
  }
  
  
  module.exports = generateMarkdown;