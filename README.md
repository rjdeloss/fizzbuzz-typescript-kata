# FizzBuzz-TypeScript Kata

Implementing FizzBuzz Kata using a TypeScript cli

## Getting Started

prerequisite: [NodeJS](https://nodejs.org/) must be installed onto your computer. 

1. Clone this repository 
2. Navigate to the directory saved on your computer on your terminal. 
3. Execute `npm install` to install all of the project's dependencies. 
4. Run `npm run fizzbuzz <number>`

### Uninstall CLI Application 
Once you're done using it and no longer would like app on your computer, simply run `npm uninstall fizzbuzz` in teh file directory and the cli application will be uninstalled from your machine. 

## Final Thoughts
There's something about using prebuilt cli libraries like `yargs` that makes it challenging when dealing with negative numbers. The workaround that I've found from this is to use Commander CLI and pass the negative number via an options flag to then convert the value passed within the argument object. Not ideal but returns the desired result. 

## Resources Used

[Build a Node.js CLI with TypeScript](https://medium.com/geekculture/building-a-node-js-cli-with-typescript-packaged-and-distributed-via-homebrew-15ba2fadcb81)

[Rafi's typescript cli demo app](https://github.com/rjdeloss/cli-typescript-demo)