# Braincorp's Tic Tac Toe Challenge

This is an implementation of Brain corp's Tic Tac Toe coding challenge based on my interpretation of the goals of the project. My motivation for this project is to demonstrate my general technical abilities with the intention of working together with Brain corp in the future.

Original Prompt:
Create a Tic Tac Toe game, using Front End technologies. This game should feature:

User vs. User functionality
An undo button that removes the last move.
Use as much vanilla JS as possible, production level code.
A Responsive Layout
When complete, please create a public git repo with a readme on how to run the app.
Bonus: 
In the fictional country of ‘Frontenddevlandia’, Tic-tac-toe enthusiasts do not use X’s and O’s for this sport, X’s in their culture are actually Vector-based Squares and O’s are known to be any variant of Sean Connery’s face from Zardoz. It’s a weird culture, but we must adapt! This is a must if we want to be included in the Tic Tac Toe World Championships of 2021. We need the ability to hot swap these pieces at any given time throughout the game. Please create the UI and functionality for this.

## Browser Compatibility

This app is currently only tested in Google Chrome 64.0.3282.186

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

The result is a build located under the `dist` directory which is subsequently ready for deployment to a HTTP server of your choosing.

## Deployment

First build the code, and then copy the contents of the build onto an http server of your choosing. This project does not currently include an automated deploy.

## Testing

To run the tests from the browser:
1. Start the dev server `npm run dev`
2. Open Chrome and go to the [test page](http://localhost:3000/tests)

## Post Challenge Reflections

This challenge made me very much appreciate the modularity of using the latest front end technologies and tools as well as the movie Zardoz (haha).

I believe this challenge code would be much more production ready and maintainable if it used React, Babel, Webpack, Eslint, modular CSS (or Sass), and many other tools which abstract some of the more tedious parts of development and make things clearer to read and better organized.

No build tools or transpiling were used in order to make it truly pure vanillaJS/HTML/CSS. The only exception was for development tools to leverage express for a generic web server and qunit for some testing.

**Design limitations:**
This project puts code in the global namespace. Doing this is generally a very bad idea and hurts readability and maintainability. To amend this limitation it is suggested that this code is rewritten using the react/redux design patterns.


**Technical limitations:**
This project works in limited browsers due to the use of some ES6 syntax which is currently not widely supported. Normally this would be transpiled into valid ES5 (and work across all major browsers). My intent with choosing this path was to demonstrate my knowledge of ES6 without using a build tool as much as possible at the unfortunate expense of browser compatibility.

**Design improvements:**
There should be a turn indicator on the PlayScreen to show who's turn it currently is. This originally was designed in to the game, but shelved due to time restrictions and can be planned for the next iteration/sprint if this project is continued.

**Technical improvements:**
This game should use a non static class for gameState which can be instantiated at the beginning of a game. This would then allow a way to restart the game without reloading the page to get a new gameState, or having a very specific resetGamestate function (which would not be ideal since there are any number of properties of the gameState that need to be reset as the game grows).

This technology stack should be re-examined on a whole with the team to decide if it's truly the best fit moving forward and a code review should be held to gain a deeper understanding technically as well as to create a shared set of team development habits.

## Authors

* **Trevor Alfstad**

## Acknowledgments

* Brain corp for coming up with this challenge
