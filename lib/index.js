#! /usr/bin/env node

// General directives and requires

import fs     from 'fs';
import path   from 'path';
import {argv} from 'yargs';

// TODO: These variable names are awful; decide on better vocabulary
const jenerateDirective = argv._[0];
const jenerateType = argv._[1];

console.log('directive: ', jenerateDirective);
console.log('type: ', jenerateType);

// jenerate jen build {name-of-build-task}
//  Functionality to modify 'scripts' section of package.json to add/remove build
//  tasks as a lightweight replacement for grunt/gulp

if ( jenerateDirective && jenerateType === 'build' ) {
  // TODO: Move functionality to separate module(s)
  const copyFile = require('./utils/copy_file');
  const cwd = process.cwd();
  const packageJsonOriginal = path.join(cwd, 'package.json');
  const packageJsonCopy = path.join(cwd, 'package.old.json');

  fs.access(packageJsonOriginal, fs.R_OK && fs.W_OK, (err) => {
    // TODO: Recursively locate package.json, so you don't have to run jenerate
    //  from within root of project
    if ( err ) {
      console.log('package.json not found! are you in the wrong directory?');
    }

    // Copy package.json for backup before modifying new copy
    copyFile(packageJsonOriginal, packageJsonCopy).then(() => {
      // TODO: Add functionality to add/remove build tasks (from plugins?)
      console.log('package.json copied!');
    }, () => {
      console.log('package.json copy failed!');
    });
  });
} else {
  console.log('no jenerate directive and/or type specified!');
}

// TODO: add build task to restore backup package.json?