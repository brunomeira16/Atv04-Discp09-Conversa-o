// user1.js

const readline = require('readline');

const user1Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Usuário 1: '
});

let user1Messages = [];

module.exports = { user1Interface, user1Messages };


// user2.js

const readline = require('readline');

const user2Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Usuário 2: '
});

let user2Messages = [];

module.exports = { user2Interface, user2Messages };


// main.js

const { user1Interface, user1Messages } = require('./user1');
const { user2Interface, user2Messages } = require('./user2');

console.log("Bem-vindos ao chat! Usuário 1 e Usuário 2 podem conversar aqui.");
user1Interface.prompt();

user1Interface.on('line', (line) => {
    user1Messages.push(line.trim());
    console.log(`Usuário 1 disse: ${line.trim()}`);
    console.log("Usuário 2, sua vez!");
    user2Interface.prompt();
}).on('close', () => {
    console.log("Usuário 1 saiu do chat.");
    process.exit(0);
});

user2Interface.on('line', (line) => {
    user2Messages.push(line.trim());
    console.log(`Usuário 2 disse: ${line.trim()}`);
    console.log("Usuário 1, sua vez!");
    user1Interface.prompt();
}).on('close', () => {
    console.log("Usuário 2 saiu do chat.");
    process.exit(0);
});
