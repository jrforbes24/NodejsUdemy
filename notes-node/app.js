console.log('Starting apps.js!');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(["john", 5, "john"]);

console.log(filteredArray);

/*console.log(_.isString(true));
console.log(_.isString('bigbadJohn'));
*/
/*var res = notes.add(10,32);
console.log(`The sum of 10 and 32 is ${res}.`);*/

/*var user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username} ! You are ${notes.age}.`);*/
