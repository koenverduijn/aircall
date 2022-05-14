## Aircall Config Manager
A React web application that uses all Aircall APIs to complete tasks that Aircall Dashboard cannot yet complete.

## Description
This web application is a project to:
- clean all phone numbers out of a csv file
- get all recordings via the [Aircall Search Calls API](https://developer.aircall.io/api-references/#search-calls) when the call data requested is up to 6 months or the [Aircall Retrieve Call API](https://developer.aircall.io/api-references/#retrieve-a-call) when the call data requested goes beyond the 6 months
- have bulk creation, updates or deletion of users, numbers, calls, contacts
- see the individual content of Aircall API webhooks

## Badges
[![forthebadge made-with-react](https://img.shields.io/badge/React-Built%20on%20React-orange)](https://reactjs.org/)
[![forthebadge made-by-aircall](https://img.shields.io/badge/aircall-Solution%20Engineering-brightgreen?style=for-the-badge&logo=appveyor)](https://www.aircall.io)

## Installation
To clone the repository please use:
```bash
git clone https://gitlab.com/aircall/hackathon/config-manager.git
```
And then provide
- GitLab Aircall username
- GitLab Aircall password

## Requirements & Usage
The script is written in React and uses some standard packages. To make sure that you can spin up the web application, check in your terminal:
```bash
npm react --v
```
Which should provide you with the version of the react installed. If it says command not found: react, please install react:
```bash
npm install react
```
If the terminal says: command not found: npm, please install node.js: https://nodejs.org/en/download/

Once everything is installed:
- Go to the folder in your terminal
- `npm start` to start the webpack web server
- Web application will start in your browser on local host: 8080

## Folder structure
This web application is using an intermediatery React folder structure:👇
```bash
├── node_modules # all the necessary node modules used by the web application 
├── README.md # this read me file
└── public # the basic html page that React uses with the favicon and manifest
└── package.json # setup for which modules should be loaded when
└── webpack.config.js # webpack server config
└── .babelrc # set up for babel Javascript config
└── .gitignore # which files git should ignore syncing with GitLab
└── src # all code folders
└──── assets # all pictures to be used in different page
└──── components # invididual Javascript components that are reused in multiple pages
└──── data # csv or JSON files containing data that can be used to test part of the application
└──── routes # individual pages with React JSX code
└──── styles # global and individual style sheets
└──── App.js # main HTML structure
└──── main.js # all the routes of the web application
└──── navigationItems.js # the navigation items with data structure in a JSON file
```

### Dependencies and libs

### Tests
For this web application, there are no tests. Everything can be debugged locally.