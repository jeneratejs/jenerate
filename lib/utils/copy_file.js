import fs from 'fs';

export default function(source, target) {
  return new Promise((resolve, reject) => {
    const rd = fs.createReadStream(source);
    rd.on('error', reject);

    const wr = fs.createWriteStream(target);
    wr.on('error', reject);
    wr.on('finish', resolve);

    rd.pipe(wr);
  });
}