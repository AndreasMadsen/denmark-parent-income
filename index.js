
'use strict';
'use strong';

const data = require('./data.json');

module.exports = new Map((function* () {
  for (const row of data) {
    yield [row.id, row];
  }
})());
