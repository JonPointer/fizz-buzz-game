const { NumberPrompt } = require('enquirer');

// Loop to output fizz buzz game
// If # is divisible by 3, output fizz
// If # is divisible by 5, output buzz
// If # is divisible by 3 and 5, ouput fizz-buzz

// Inquirer prompt to enter number to loop to:

const prompt = new NumberPrompt({
    name: 'number',
    message: 'Please enter max number you would like output up to:'
});

prompt.run()
    .then(answer => {
        for (let i = 1; i <= answer; i++) {
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
    })
    .catch(console.error);


