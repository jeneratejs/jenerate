#! /usr/bin/env node

// General directives and requires

import fs       from 'fs';
import path     from 'path';
import {argv}   from 'yargs';
import handlers from './handlers';

// TODO: These variable names are awful; decide on better vocabulary
const command = argv._[0];
const jenType = argv._[1];
const jenName = argv._[2];

console.log(`command: ${command}`);
console.log(`jenType: ${jenType}`);
console.log(`jenName: ${jenName}`);

if ( command === 'jen' ) {
  const possibleHandler = path.join(__dirname, 'handlers', jenType + '.js');

  console.log(possibleHandler);

  fs.access(possibleHandler, fs.R_OK, (err) => {
    if ( err ) {
      throw new Error('handler not found! please enter a valid handler.');
    }

    console.log(handlers[jenType]);
    handlers[jenType](jenName);
  });

} else {
  console.log(`No handler exists for command ${command} and type ${jenType}!`);
}

// TODO: add build task to restore backup package.json?