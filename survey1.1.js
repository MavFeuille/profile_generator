//Devani loves listening to Ludovico Einaudi while coding, 
//devouring Yak Momos for brunch, prefers Tennis over any other sport, 
//and is amazing at dropping mad puns at inopportune times.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => { 
    rl.question("What do you listen while doing that? ", (music) => {
      rl.question("Which meal is your favourite (e.g.: dinner, brunch, etc. ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favFood) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your supoerpower? In a few words, tell us what you are amazing at! ", (superPower) => {
              
              console.log(`${name} loves listening to ${music} while coding, deavouring ${favFood} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});