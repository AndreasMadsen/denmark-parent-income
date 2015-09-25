
'use strict';
'use strong';

const https = require('https');
const csv = require('rfc-csv');
const mappoint = require('mappoint');

const url = 'https://www.google.com/fusiontables/exporttable' +
            '?query=select+*+from+1aDTKm1r0ngzu_Dl3djfNsDvXNSjMTbsRp9AEy4k' +
            '&o=csv';

function denmarkParentIncome() {
  const ret = mappoint({ objectMode: true }, function (item, done) {
    const instnr = parseInt(item[0], 10);

    // Skip empty rows
    if (Number.isNaN(instnr)) return done(null, null);

    // Select and name properties
    done(null, {
      'instnr': instnr,
      '2012_mean': parseInt(item[1], 10),
      '2012_median': parseInt(item[5], 10),
      'children': parseInt(item[18], 10),
      '2011_mean': parseInt(item[26], 10)
    });
  });

  const req = https.get(url, function (res) {
    res.on('error', ret.emit.bind('error'));
    res.pipe(csv(true)).pipe(ret);
  });
  req.on('error', ret.emit.bind('error'));

  return ret;
}
module.exports = denmarkParentIncome;
