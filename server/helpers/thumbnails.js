import fs from 'fs';
import sharp from 'sharp';
import path from 'path';

module.exports = function resize(path, format, width, height) {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(path);
    let transform = sharp();

    if (format) {
      transform = transform.toFormat(format);
    }

    if (width || height) {
      transform = transform.resize(width, height);
    }

    return resolve(readStream.pipe(transform));
  });
};
