import fs from 'fs';

export default function(filePath) {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.R_OK, (err) => {
      if ( err ) {
        reject(`Either ${filePath} does not exist, or you do not have read permissions.`);
      } else {
        resolve(require(filePath));
      }
    });
  });
}