# to12Hours [![Build Status](https://travis-ci.com/ImedAdel/to12Hours.svg?branch=master)](https://travis-ci.com/ImedAdel/to12Hours)

> Convert 24 hour format to 12 hours.


## Install

```
$ npm install to12hours
```


## Usage

```js
const to12Hours = require('to12hours');

to12Hours('15:35');
//=> '3:35PM'
```


## API

### to12Hours(input, options?)

#### input

Type: `string`

The time in the 24-hour format.
