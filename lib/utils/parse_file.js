import path from 'path';
import fs   from 'fs';

export default function(relativeFilePath) {
  const filePath = path.join(process.cwd(), relativeFilePath);

  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.R_OK, (err) => {
      if ( err ) {
        reject(`Either ${filePath} does not exist, or you do not have read permissions.`);
      } else {
        fs.readFile(filePath, 'utf8', (err, data) => {
          if ( err ) { throw err; }
          resolve(data);
        });
      }
    });
  });
}