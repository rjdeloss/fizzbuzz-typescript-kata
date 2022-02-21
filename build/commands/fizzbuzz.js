"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
exports.command = 'fizzbuzz <number>';
exports.desc = 'runs fizzbuzz and prints all the valid numbers';
const builder = (yargs) => yargs.positional('number', { type: 'number' });
exports.builder = builder;
const handler = (argv) => {
    console.log(argv);
    const number = Number(argv.number);
    console.log(fizzbuzz(number));
    process.exit(0);
};
exports.handler = handler;
const fizzbuzz = (number) => {
    if (typeof number !== "number")
        return 'please enter a number';
    if (number < 1 || number > 100) {
        return 'Enter a number between 1 and 100';
    }
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }
};
