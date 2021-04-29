const { Confirm } = require('enquirer');

// Loop to output fizz buzz game
// If # is divisable by 3, output fizz
// If # is divisible by 5, output buzz
// If # is divisible by 3 and 5 (15), ouput fizz-buzz

// Inquirer prompt to continue outputting every 10 numbers:
const prompt = new Confirm({
    name: 'question',
    message: 'Continue?'
});

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i === 10) {
        prompt.run()
            .then(answer => console.log('Answer:', answer))
            .catch(console.error);
    }
}
