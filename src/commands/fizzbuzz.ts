import { Arguments, CommandBuilder } from "yargs";

type Options = { 
    number: number;
}

export const command: string = 'fizzbuzz <number>';
export const desc: string = 'runs fizzbuzz and prints all the valid numbers';

export const builder: CommandBuilder<Options> = (yargs) => 
    yargs.positional('number', {type: 'number'});

export const handler = (argv: Arguments<Options>): void => {
    console.log(argv)
    const number = Number(argv.number);
    
    console.log(fizzbuzz(number));
    process.exit(0)
}

const fizzbuzz = (number: number) => {
    if (typeof number !== "number") return 'please enter a number';
    if (number < 1 || number > 100 ) {
        return 'Enter a number between 1 and 100';
    }

    for(let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}