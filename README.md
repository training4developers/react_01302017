# Welcome to React!

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:

- Monday - Wednesday: 9am to 5pm

Breaks:

- Morning: 10:25am to 10:35am
- Lunch: Noon to 1pm
- Afternoon #1: 2:15pm to 2:25pm
- Afternoon #2: 3:40pm to 3:50pm

## Course Outline

JavaScript topics will be included as needed into the React & Redux content

- Day 1 - Overview of React, JSX, Props + Validation, State, Immutable Programming
- Day 2 - Component Composition, Forms, Special Attributes
- Day 3 - Pure Component, Stateless Functions, Life Cycle Functions, Unit Testing

## Links

### Instructor's Resources

- [Accelebrate, Inc.](https://www.accelebrate.com/)
- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)
- [React Blog Posts - Post 4 - React Unit Tests](https://github.com/training4developers/react-flux-blog)
- [TopTal Videos](https://www.toptal.com/videos)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)
- [Redux Videos](https://egghead.io/courses/getting-started-with-redux)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)
- [Speaking JavaScript](http://speakingjs.com/es5/)
- [TC39 Process - Feature Stages](http://www.2ality.com/2015/11/tc39-process.html)
- [Official ES2016 Features](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Possible ES2017 Features](http://www.2ality.com/2016/02/ecmascript-2017.html)

## Overview

This project configuration bundles JavaScript files with Webpack transpiling ES2017 and JSX code to run in an ES5.1 environment.

## Application Setup

Step 1. Install Node.js version 7 or higher. To install Node.js click [here](https://nodejs.org).

Step 2. Download this repository. Extract the zip file to a working folder on your system.

Step 3. Open a terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
npm i && npm start
```

It could take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in those files. Then re-run the command above.

This setup has been completed successfully when you receive a message similar to this one:

```bash
[0] Hash: 22b8756ee9084e76420f
[0] Version: webpack 1.14.0
[0] Time: 3731ms
[0]                     Asset       Size  Chunks             Chunk Names
[0]                    app.js     906 kB       0  [emitted]  app
[0]                app.js.map    1.08 MB       0  [emitted]  app
[0] ../images/placeholder.txt   20 bytes          [emitted]
[0]             ../index.html  300 bytes          [emitted]
[0]     + 186 hidden modules
[1] [BS] File changed: dist/js/app.js
[1] [BS] File changed: dist/images/placeholder.txt
[1] [BS] File changed: dist/js/app.js.map
[1] [BS] File changed: dist/index.html
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 5. If a web browser did not open automatically for you, then open a web browser, and navigate to [http://localhost:5000](http://localhost:5000).  The React web application should load and be usable.

### To Modify the Web Application

Step 6. Open your favorite text editor (such as [Atom](https://atom.io/) or [Visual Studio Code (preferred)](https://code.visualstudio.com)), and modify the files in the **src** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets, and deploy it to the **dist** folder. To see the changes, reload your web browser.

#### Recommended Editor Packages/Extensions

For Visual Studio Code:

- HTMLHint (kaufman.HTMLHint)
- ESLint (dbaeumer.vscode-eslint)

Visual Studio Code has built-in support for React and a Terminal, no package needs to be installed

For Atom:

- PlatformIO IDE Terminal (platformio-ide-terminal)
- Linter (linter)
- Linter-ESLint (linter-eslint)
- Linter-HTMLHint (linter-htmlhint)
- React (react)

## NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - removes the dist folder, builds and deploys the web app, and starts the web app and the rest app
- **npm run clean** - removes the **dist** folder
- **npm run webpack:w** - runs webpack in watch mode so web app file changes are automatically processed, and deployed to the **dist** folder
- **npm run webpack** - runs webpack once to process web app files, and deploys them to the **dist** folder
- **npm run web** - starts the web server
- **npm run rest** - starts the rest server

## Useful Resources

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [React-Redux](https://github.com/reactjs/react-redux)
- [Redux-Thunk](https://github.com/gaearon/redux-thunk)
- [React Router](https://github.com/ReactTraining/react-router)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.github.io/)
- [SASS](http://sass-lang.com/)
- [Bootstrap](https://v4-alpha.getbootstrap.com/)
