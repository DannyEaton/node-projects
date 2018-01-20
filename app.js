
// node js base packages and third party packages
const fs = require('fs');
const  _= require('lodash');
const yargs = require('yargs');
//my imported files
const notes = require('./notes.js');

// initialize argv object parsed by yargs library
const argv = yargs.argv;
// get initial main command from good old fashioned library
let command = process.argv[2];

if(command === 'add'){

    let add = notes.addNote(argv.title,argv.body);
    if(add){
        console.log(`${add.title} has been added`);
    }

}else if(command === 'list'){

    notes.getAll();

}else if(command === 'read'){

    let read = notes.getNote(argv.title);
    let message = read ? `Title: ${read.title} \nBody: ${read.body}` : 'Note not found';
    console.log(message);

}else if(command === 'remove'){

    let remove = notes.removeNote(argv.title);
    let message = remove ? 'Note was removed' : 'Note was not removed';
    console.log(message);

}else{
    console.log("Command Not Recognized");
}
