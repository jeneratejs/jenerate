#! /usr/bin/env node

// General directives and requires

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
  handlers[command](args);
} else {
  console.log(`No handler or configuration exists for command ${command}!`);
}
