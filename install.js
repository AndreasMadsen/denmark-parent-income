
'use strict';
'use strong';

const fs = require('fs');
const path = require('path');
const https = require('https');
const csv = require('rfc-csv');

const url = 'https://www.google.com/fusiontables/exporttable' +
            '?query=select+*+from+1aDTKm1r0ngzu_Dl3djfNsDvXNSjMTbsRp9AEy4k' +
            '&o=csv';

const schools = [];

https.get(url, function (req) {
  req.pipe(csv(true))
    .on('data', function (item) {
      const instnr = parseInt(item[0], 10);
      if (Number.isNaN(instnr)) return;

      schools.push({
        id: instnr,
        '2012_mean': parseInt(item[1], 10),
        '2012_median': parseInt(item[5], 10),
        'children': parseInt(item[18], 10),
        '2011_mean': parseInt(item[26], 10)
      });
    })
    .on('end', function () {
      fs.writeFileSync(
        path.resolve(__dirname, 'data.json'),
        JSON.stringify(schools)
      );
    });
});
