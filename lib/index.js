#! /usr/bin/env node

// General directives and requires

import fs       from 'fs';
import path     from 'path';
import {argv}   from 'yargs';
import handlers from './handlers';

// TODO: These variable names are awful; decide on better vocabulary
const command = argv._[0];
const args = argv._.slice(1);

console.log(`command: ${command}`);
console.log(`args: ${args}`);

if ( command === 'jen' ) {
  // TODO: read config
} else if ( command in handlers ) {
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
  console.log(`No handler or configuration exists for command ${command}!`);
}