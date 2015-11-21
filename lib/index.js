#! /usr/bin/env node

// General directives and requires
import {argv}   from 'yargs';
import readFile from './utils/read_file';
import handlers from './handlers';

readFile(`${process.cwd()}/jenerate.conf.js`).then((config) => {
  const command = argv._[0];
  const args = argv._.slice(1);

  console.log(`command: ${command}`);
  console.log(`args: ${args}`);

  if ( command === 'jen' && args[0] in config ) {
    handlers['jen'](config[args[0]], args.slice(1));
  } else if ( command in handlers ) {
    handlers[command](args);
  } else {
    console.log(`No handler or configuration exists for command ${command}!`);
  }
});
