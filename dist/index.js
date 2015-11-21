#! /usr/bin/env node


// General directives and requires

'use strict';

var fs = require('fs');
var path = require('path');
var argv = require('yargs').argv;
require('babel-core/register');

// TODO: These variable names are awful; decide on better vocabulary
var jenerateDirective = argv._[0];
var jenerateType = argv._[1];

console.log('directive: ', jenerateDirective);
console.log('type: ', jenerateType);

// jenerate jen build {name-of-build-task}
//  Functionality to modify 'scripts' section of package.json to add/remove build
//  tasks as a lightweight replacement for grunt/gulp

if (jenerateDirective && jenerateType === 'build') {
    // TODO: Move functionality to separate module(s)
    var copyFile = require('./utils/copy_file');
    var cwd = process.cwd();
    var packageJsonOriginal = path.join(cwd, 'package.json');
    var packageJsonCopy = path.join(cwd, 'package.old.json');

    fs.access(packageJsonOriginal, fs.R_OK && fs.W_OK, function (err) {
        // TODO: Recursively locate package.json, so you don't have to run jenerate
        //  from within root of project
        if (err) console.log('package.json not found! are you in the wrong directory?');

        // Copy package.json for backup before modifying new copy
        copyFile(packageJsonOriginal, packageJsonCopy).then(function () {
            // TODO: Add functionality to add/remove build tasks (from plugins?)
            console.log('package.json copied!');
        }, function () {
            console.log('package.json copy failed!');
        });
    });
} else {
    console.log('no jenerate directive and/or type specified!');
}

// TODO: add build task to restore backup package.json?