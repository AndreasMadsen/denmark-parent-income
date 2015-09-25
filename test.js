
'use strict';
'use strong';

const test = require('tap').test;
const endpoint = require('endpoint');
const schools = require('./index.js');

test('keys are numbers and values are objects', function (t) {
  schools().pipe(endpoint({ objectMode: true }, function (err, items) {
    t.ifError(err);

    for (const item of items) {
      t.ok(typeof item === 'object' && item !== null, 'is object');
      t.ok(typeof item.instnr === 'number', 'is number');
    }

    t.end();
  }));
});
