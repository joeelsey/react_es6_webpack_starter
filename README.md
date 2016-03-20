# Welcome
This project is meant to serve as a starting point for [Node.js](https://nodejs.org)-based [React](https://facebook.github.io/react/) & [ES6](https://nodejs.org/en/docs/es6/) projects.

[Webpack](https://webpack.github.io/) is used to bundle all of the source files into a single JS file that can be loaded by the standalone web page ([./dist/index.html](./dist/index.html)). [Webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) is used to serve a local instance of the compiled application.

[Mocha](https://mochajs.org) is used for unit-testing our sample [React](https://facebook.github.io/react/) application. There is a test folder that contains a sample unit test for the App component as well as a React test helper file that uses shallow rendering for testing simple components.

Test coverage reports are generated with [babel-istanbul](https://www.npmjs.com/package/babel-istanbul) - a fork of the popular [Istanbul](https://www.npmjs.com/package/istanbul) code-coverage tool.

## Getting started
This project assumes you are familiar with [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com) (node package manager). If these are not installed on your system already, please do so before continuing on.

### Installation
After cloning this repo, you can install all necessary modules with:

    $ npm install

### Unit Tests
The goal of this application is to have 100% test coverage. We are using the popular [Istanbul](https://www.npmjs.com/package/istanbul) code-coverage tool. 

  To run the unit tests for this project and generate a code coverage report:

    $ npm test

  **BONUS**: To verify 100% of your code is covered by testing:

    $ npm run test:strict

### Bundling and Running Your React Application
If you are running this application for the first time, you can compile and view the sample application directly from your local environment with the built-in [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) by running:

    $ npm start

To view your sample app, open your web browser and view [http://localhost:8080/](http://localhost:8080/)

If you are incorporating this into another project and just want to have webpack running in the background, you can also run the build script with:

    $ npm run build

