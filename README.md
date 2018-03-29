# Braincorp's Tic Tac Toe Challenge

This is an implementation of Brain corp's Tic Tac Toe coding challenge based on my interpretation of the goals of the project. My motivation for this project is to demonstrate my general technical abilities with the intention of working together with Brain corp in the future.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Below is a list of software you need to have installed on your development machine to run the development server:

* [Install NodeJS](https://nodejs.org/en/download/)

### Installing

From the root project directory run the following:

```
npm install
npm run dev
```

### Building

In lieu of using nodeJS to run a development server, or to create a build for deployment, create a build as follows:

```
npm run build
```

The result is a build located under the `dist` directory which is subsequently ready for deployment to an HTTP server of your choosing.

## Deployment

First build the code, and then copy the contents of the build onto an http server of your choosing.

## Post Challenge Reflections

linting, react/redux, babel/es6 and webpack, modular css in react components, no es6 functionality! destructuring, rest/spread operator, etc. makes things so much harder.
one of the reasons UI stuff has advanced so much in the past few years is because of the importance of libraries to support development. Attaching classes to the window object is not ideal. Mutability vs. functional programming. ES6 and lodash have excellent helper methods to to ensure you make all of your code immutable which minimizes debugging. ES6 Object short hand notation. no best practices. destructuring

assumptions i made:
- use minimal tools necessary, minimum libraries. no build/minimization tools.

## Authors

* **Trevor Alfstad**

## Acknowledgments

* Brain corp for coming up with this challenge
