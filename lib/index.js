#! /usr/bin/env node

// General directives and requires

'use strict';

require('babel-core/register');

console.log(process.argv);
console.log(__dirname);
console.log('cwd: ', process.cwd());

// jenerate jen build {name-of-build-task}
//  Functionality to modify 'scripts' section of package.json to add/remove build
//  tasks as a lightweight replacement for grunt/gulp

// TODO: Move functionality to separate module(s)

var fs = require('fs');
var path = require('path');
var copyFile = require('./utils/copy_file');

var cwd = process.cwd();
var packageJsonOriginal = path.join(cwd, 'package.json');
var packageJsonCopy = path.join(cwd, 'package.old.json');

console.log(packageJsonOriginal);
console.log(packageJsonCopy);

console.log(copyFile);



fs.access(packageJsonOriginal, fs.R_OK && fs.W_OK, function(err) {
    // TODO: Recursively locate package.json, so you don't have to run jenerate
    //  from within root of project
    if (err) console.log('package.json not found! are you in the wrong directory?');

    // Copy package.json for backup before modifying new copy
    copyFile(packageJsonOriginal, packageJsonCopy).then(function() {
        console.log('package.json copied!');
    }, function() {
        console.log('package.json copy failed!');
    });
});