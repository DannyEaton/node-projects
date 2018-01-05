console.log('Starting app');


const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
let user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);