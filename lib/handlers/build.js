import fs       from 'fs';
import path     from 'path';
import copyFile from '../utils/copy_file';

export default function() {
  // TODO: Move functionality to separate module(s)
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
}