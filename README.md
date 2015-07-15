#denmark-parent-income

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

`schools` is a `Map` object, with institution numbers as keys and associated
information as values.

See http://statweb.uni-c.dk/InstRegV2/Fremfind.aspx?SearchType=AlphaInst for
what institution numbers are.

```javascript
for (let [instnr, info] of zipcodes) {
  // instnr is a number
  instnr = 101001;

  // info is an object
  // All money related values are in DKK and the brutto income
  info = {
    "id": 101001,
    "2012_mean": 566930,
    "2012_median": 499169,
    "2011_mean": 580395,
    "children": 465
  }
}
```

## Source

The source is this csv file:

https://www.google.com/fusiontables/DataSource?docid=1aDTKm1r0ngzu_Dl3djfNsDvXNSjMTbsRp9AEy4k#rows:id=1

##License

**The software is license under "MIT"**

> Copyright (c) 2015 Andreas Madsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
