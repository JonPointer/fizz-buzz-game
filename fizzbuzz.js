const { NumberPrompt } = require('enquirer');

// Loop to output fizz buzz game
// If # is divisible by 3, output fizz
// If # is divisible by 5, output buzz
// If # is divisible by 3 and 5, ouput fizz-buzz

// Inquirer prompt to enter number to loop to:

const prompt = new NumberPrompt({
    name: 'number',
    message: 'Please enter your max integer for the Fizz-Buzz Simulator (decimal numbers will be truncated):'
});

prompt.run()
    .then(answer => {
        // Fizz-Buzz Loop
        for (let i = 1; i <= answer; i++) {
            if (((i % 3) === 0) && ((i % 5) !== 0)) {
                console.log("Fizz");
            }
            else if (((i % 3) !== 0) && ((i % 5) === 0)) {
                console.log("Buzz");
            }
            else if (((i % 3) === 0) && ((i % 5) === 0)) {
                console.log("Fizz-Buzz");
            }
            else {
                console.log(i)
            }

        }
    })
    .catch(console.error);


