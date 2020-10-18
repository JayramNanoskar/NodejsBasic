const readline = require('readline');
const fs = require("fs");

// taking user input and writting into file
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('What is your name? ', (name) => {
    console.log(`Welcome: ${name}`);
    rl.close();
    writeGreetingToFile(name);
  });

const writeGreetingToFile = (name) => {
    fs.writeFile("./output.js", `console.log("Hello ${name}");`, (err) => {
        if(!err){
            console.log("Data Saved");
            // console.log(name);
        }
    });
};
