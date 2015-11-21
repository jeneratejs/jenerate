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

console.log(path.join(__dirname, 'handlers', 'build.js'));
console.log('wtf: ', fs.accessSync(path.join(__dirname, 'handlers', 'build.js')));

console.log(fs.statSync(path.join(__dirname, 'handlers', 'build.js')).isFile());

if ( command === 'jen' ) {
  // TODO: read config
// } else if ( !fs.accessSync(path.join(__dirname, 'handlers', 'build' + '.js'), fs.R_OK) ) {
} else {
  const handlerPath = path.join(__dirname, 'handlers');
  // const possibleHandler = path.join(__dirname, 'handlers', jenType + '.js');

  fs.stat(path.join(handlerPath, command + '.js'), (err, stats) => {
    if ( err ) {
      throw new Error('handler file does not exist!')
    }

    console.log('isFile: ', stats.isFile());
  });


  console.log('lol');

  // console.log(possibleHandler);

  // fs.access(possibleHandler, fs.R_OK, (err) => {
  //   if ( err ) {
  //     throw new Error('handler not found! please enter a valid handler.');
  //   }

  //   console.log(handlers[jenType]);
  //   handlers[jenType](jenName);
  // });
  console.log(`No handler or configuration exists for command ${command}!`);
}