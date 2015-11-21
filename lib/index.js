#! /usr/bin/env node

// General directives and requires
import {argv}   from 'yargs';
import readFile from './utils/read_file';
import handlers from './handlers';

const command = argv._[0];
const args = argv._.slice(1);

if ( command === 'jen' ) {
  readFile(`${process.cwd()}/jenerate.conf.js`).then((config) => {
    if ( args[0] in config ) {
      handlers['jen'](config[args[0]], args.slice(1));
    } else {
      console.log(`No configuration provided for '${args[0]}'`);
    }
  });
} else if ( command in handlers ) {
  handlers[command](args);
} else {
  console.log(`No handler exists for command '${command}'`);
}
