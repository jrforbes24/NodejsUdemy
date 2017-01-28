console.log('Starting notes.js');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  notes.push(note);
};

var getAll  = () => {
  console.log("Getting all notes.");
}

var removeNote = (title) => {
  console.log("Removing note: " , title);
}

var getNote = (title) => {
  console.log("Getting note: " , title);
}

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
}
