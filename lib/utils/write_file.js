import path from 'path';
import fs   from 'fs';

export default function(outputDir, relativeFilePath, fileContentString) {
  const filePath = path.join(process.cwd(), outputDir, relativeFilePath);

  return new Promise((resolve, reject) => {
    console.log('filePath:', filePath);
    console.log('fileContentString:', fileContentString);
    fs.writeFile(filePath, fileContentString, (err) => {
      console.log('err:', err);
      if ( err ) { reject(err); }

      resolve();
    });
  });
}
