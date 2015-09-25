#denmark-parent-income [![Build Status](https://travis-ci.org/denmark-io/denmark-parent-income.svg?branch=master)](https://travis-ci.org/denmark-io/denmark-parent-income)

> Get parent income mean and median given a schools institution number

## Installation

```sheel
npm install denmark-parent-income
```

## Documentation

On installation this module a CSV file containing data for parents income
in 2012 and 2011. This is then parsed and stored as a JSON file.

```javascript
const schools = require('denmark-parent-income')
```

`schools` is an object stream, with institution numbers information about
the parents income.

See http://statweb.uni-c.dk/InstRegV2/Fremfind.aspx?SearchType=AlphaInst for
what institution numbers are.

```javascript
schools().once('data', function (item) {
  // All money related values are in DKK and the brutto income
  item = {
    "instnr": 101001,
    "2012_mean": 566930,
    "2012_median": 499169,
    "2011_mean": 580395,
    "children": 465
  }
});
```

## Source

The source is this csv file:

https://www.google.com/fusiontables/DataSource?docid=1aDTKm1r0ngzu_Dl3djfNsDvXNSjMTbsRp9AEy4k#rows:id=1
