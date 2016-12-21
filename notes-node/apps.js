console.log('Starting apps.js!');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.add(10,32);
console.log(`The sum of 10 and 32 is ${res}.`);

/*var user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username} ! You are ${notes.age}.`);*/
