
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

    notes.addNote(argv.title,argv.body)

}else if(command === 'list'){

    notes.getAll();

}else if(command === 'read'){

    notes.getNote(argv.title);

}else if(command === 'remove'){

    notes.removeNote(argv.title);

}else{
    console.log("Command Not Recognized");
}
