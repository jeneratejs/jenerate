'use strict';

var fs = require('fs');

module.exports = function (source, target) {
    return new Promise(function (resolve, reject) {
        var rd = fs.createReadStream(source);
        rd.on('error', reject);

        var wr = fs.createWriteStream(target);
        wr.on('error', reject);
        wr.on('finish', resolve);

        rd.pipe(wr);
    });
};