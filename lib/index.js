#! /usr/bin/env node

import {argv}         from 'yargs';
import namedArguments from './utils/named_arguments';
import readFile       from './utils/read_file';
import handlers       from './handlers';

const command = argv._[0];
const args = argv._.slice(1);

if ( command === 'jen' ) {
  let moduleType = args[0];
  let moduleName = args[1];
  let namedArgs = namedArguments(argv);

  if ( !moduleType ) {
    throw new Error('No module type provided');
  } else if ( !moduleName ) {
    throw new Error(`No module name provided`);
  }

  readFile('/jenerate.conf.js').then((config) => {
    if ( moduleType in config ) {
      handlers['jen'](config[moduleType], moduleName, namedArgs);
    } else {
      throw new Error(`No configuration provided for '${moduleType}`);
    }
  }).catch((err) => {
    throw err;
  });
} else if ( command in handlers ) {
  handlers[command](args);
} else {
  throw new Error(`No handler exists for command '${command}'`);
}
