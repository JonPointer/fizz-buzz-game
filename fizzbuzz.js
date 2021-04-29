// const { Confirm } = require('enquirer');

// Loop to output fizz buzz game
// If # is divisable by 3, output fizz
// If # is divisible by 5, output buzz
// If # is divisible by 3 and 5 (15), ouput fizz-buzz

// Inquirer prompt to continue outputting every 10 numbers:
// const prompt = new Confirm({
//     name: 'question',
//     message: 'Continue?'
// });
// prompt.run()
//     .then(answer => console.log('Answer:', answer))
//     .catch(console.error);

for (let i = 1; i <= 100; i++) {
    if (((i % 3) === 0) && ((i % 5) !== 0)) {
        console.log("fizz");
    }
    else if (((i % 3) !== 0) && ((i % 5) === 0)) {
        console.log("buzz");
    }
    else if (((i % 3) === 0) && ((i % 5) === 0)) {
        console.log("fizz-buzz");
    }
    else {
        console.log(i)
    }

}
