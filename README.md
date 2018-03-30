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

### Demo

There is a demo of this code running via AWS S3 and Route53 at my personal site: [here](http://tictactoe.trevoralfstad.com)

## Deployment

First build the code, and then copy the contents of the build onto an http server of your choosing. This project does not currently include an automated deploy.

## Testing



## Post Challenge Reflections

This challenge made me very much appreciate the modularity of using the latest front end technologies and tools as well as the movie Zardoz (haha).

I believe this challenge code would be much more production ready and maintainable if it used React, Babel (ES6), Eslint (airbnb's config), modular CSS (to avoid global namespace and dead code), and many other tools which abstract some of the more tedious parts of development and make things clearer to read and better organized.

No build tools or transpiling were used in order to make it truly pure vanillaJS/HTML/CSS. The only exception was for development tools to leverage express for a generic web server.

## Authors

* **Trevor Alfstad**

## Acknowledgments

* Brain corp for coming up with this challenge
