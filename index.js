//const emoji = require('node-emoji');
const readline = require("node:readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});
rl.question("Entrez un nombre :", (answer)=> {
    const number = Number(answer);
    console.log("Le nombre est :", number);

    rl.close();
}); 