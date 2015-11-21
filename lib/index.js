#! /usr/bin/env node

// General directives and requires

import {argv}   from 'yargs';
import handlers from './handlers';

// TODO: These variable names are awful; decide on better vocabulary
const command = argv._[0];
const jenType = argv._[1];
const jenName = argv._[2];

console.log('command:', command);
console.log('jenType:', jenType);
console.log('jenName:', jenName);

if ( command === 'jen' && jenType in handlers ) {
  console.log(handlers[jenType]);
  handlers[jenType](jenName);
} else {
  console.log(`No handler exists for command ${command} and type ${jenType}!`);
}

// TODO: add build task to restore backup package.json?