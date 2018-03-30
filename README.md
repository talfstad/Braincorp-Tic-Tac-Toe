# Braincorp's Tic Tac Toe Challenge

This is an implementation of Brain corp's Tic Tac Toe coding challenge based on my interpretation of the goals of the project. My motivation for this project is to demonstrate my general technical abilities with the intention of working together with Brain corp in the future.

### Demo

There is a demo of this code running via AWS S3 and Route53 at my personal site: [here](http://tictactoe.trevoralfstad.com)

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

First build the code, and then copy the contents of the build onto an http server of your choosing. This project does not currently include an automated deploy.

## Testing

To run the tests from the browser:
1. Start the dev server `npm run dev`
2. Open Chrome and go to the [test page](http://localhost:3000/tests)

## Post Challenge Reflections

This challenge made me very much appreciate the modularity of using the latest front end technologies and tools as well as the movie Zardoz (haha).

I believe this challenge code would be much more production ready and maintainable if it used React, Babel, Eslint, modular CSS (or Sass), and many other tools which abstract some of the more tedious parts of development and make things clearer to read and better organized.

No build tools or transpiling were used in order to make it truly pure vanillaJS/HTML/CSS. The only exception was for development tools to leverage express for a generic web server and qunit for some testing.

**Design limitations:**
This project puts code in the global namespace. Doing this is generally a very bad idea and hurts readability and maintainability. To amend this limitation it is suggested that this code is rewritten using the react/redux design patterns.

## Browser Compatibility

This app is currently only tested in Google Chrome 64.0.3282.186

## Authors

* **Trevor Alfstad**

## Acknowledgments

* Brain corp for coming up with this challenge
