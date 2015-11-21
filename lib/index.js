#! /usr/bin/env node

// General directives and requires

import {argv}   from 'yargs';
import handlers from './handlers';

// TODO: These variable names are awful; decide on better vocabulary
const jenerateDirective = argv._[0];
const jenerateType = argv._[1];

console.log('directive: ', jenerateDirective);
console.log('type: ', jenerateType);

if ( jenerateDirective in handlers ) {
  handlers[jenerateDirective](jenerateType);
} else {
  console.log('no jenerate directive and/or type specified!');
}

// TODO: add build task to restore backup package.json?