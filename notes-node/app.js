console.log('Starting apps.js!');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') {
  console.log("Adding a new note.");
}
else if (command === 'list') {
  console.log("Listing all notes.");
}
else {
  console.log("Command not recognized.");
}
