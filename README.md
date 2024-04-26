# Bootcamp Challenge Week 19 - Basic JS Text Editor
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This web-application aims to create a web-based text editor that uses workbox to create a Progressive Web Application that users can download onto their local device. 

The application itself is a simple text editor complete with JavaScript syntax highlighting, the application saves the contents everytime the user breaks focus on the application to ensure that no content is lost.

The repository name is Basic JS Text Editor but the application itself is titled Just Another Text Editor or JATE for short.

## Table of Contents
    
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Testing](#testing)
- [Usage](#usage)
- [Screenshots/Video](<#screenshots--video-of-completed-challenge>)
- [License](#license)
- [Credits](#credits)
- [Questions / How to Contribute](#questions--how-to-contribute)

## User Story

```

AS A developer I WANT to create notes or code snippets with or without an internet connection SO THAT I  can reliably retrieve for later use.

```

## Acceptance Criteria

```
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Installation

Clone the repo to a local folder and then from the terminal inside the main directory, run the following commands to install the necessary dependancies, build the application and launch it.
       
    npm run install

    npm run build

    npm run dev
    

## Testing

No self tests exist for this application

## Usage
    
Open the terminal in the Root Folder and enter the following command.

    npm run dev

Then navigate to the link provided in the command line. 

    By default: http://localhost:8080

## GitHub repository
The GitHub repository can be found [here.](https://github.com/JakebJackson/Basic-JS-Text-Editor)

## Deployment
The deployed web application can be found [here.](https://basic-js-text-editor.onrender.com)

## Screenshots / Video of Completed Challenge
![completed application](/client/src/images/DeployedJATE.png)

## License
This project is licensed under the MIT.
    
## Questions / How to Contribute
    
If you have any questions about the repository, feel free to open an issue and I will do my best to answer. You can veiw my other work on GitHub [Jakeb Jackson.](https://github.com/JakebJackson)

## Credits

Monash University Full Stack Coding bootcamp


---
