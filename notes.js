let addNote = (title,body) => {
    console.log(`adding note ${title} ${body}`);
};


let getAll = () => {
    console.log(`Getting all notes`);
};

let getNote = (title) =>{
  console.log(`Getting ${title}`);
};

let removeNote = (title) =>{
    console.log(`Removing ${title}`);
};


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};