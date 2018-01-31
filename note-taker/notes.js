console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () =>{
  try{
      let noteString = fs.readFileSync('notes-data.json');
      return JSON.parse(noteString);

  } catch(e){
      return[];
  }
};

let saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title,body) => {
    let notes = fetchNotes();
    let note = {
      title,
      body
    };

    let duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }else{
        console.log("Duplicate Title already exists, note not added");
    }

};


let getAll = () => {
    return fetchNotes();
};

let getNote = (title) =>{
    let notes = fetchNotes();
    let foundNote = notes.filter((note) => note.title === title);
    return foundNote[0];

};

let removeNote = (title) =>{
    let notes = fetchNotes();
    let filternotes = notes.filter((note) => note.title !== title);
    saveNotes(filternotes);

    return (notes.length !== filternotes.length);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};