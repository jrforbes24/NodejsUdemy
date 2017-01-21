/*var obj = {
  name: "john"
};

var stringObj = JSON.stringify(obj);
console.log(typeof(stringObj));
console.log(stringObj);
*/

/*var personString = '{"name": "John", "age": 235}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);*/

const fs = require('fs');

var originalNote = {
  title: 'The First One',
  body: 'This is the first note in my notes-node app that I am creating with Node.js'
};

// originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// next get the note and parse then console.log the title of the object
var noteString = fs.readFileSync('notes.json');
var noteObj = JSON.parse(noteString);
console.log(typeof noteObj);
console.log(noteObj.title);
