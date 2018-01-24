# @absolunet/stylelint-loader

[![NPM version](https://img.shields.io/npm/v/@absolunet/stylelint-loader.svg)](https://www.npmjs.com/package/@absolunet/stylelint-loader)
[![Dependencies](https://david-dm.org/absolunet/node-stylelint-loader/status.svg)](https://david-dm.org/absolunet/node-stylelint-loader)

> stylelint yaml loader


## Install

```sh
$ npm install @absolunet/stylelint-loader
```


## Usage

```js
const loader = require('@absolunet/stylelint-loader');

module.exports = loader(__dirname);
```


## API

### loader(path)

Returns an `Object` of [stylelint](https://stylelint.io/) configuration.

#### path

*Required*  
Type: `string`  

Path where the `.stylelintrc.yaml` file is.



## License

MIT © [Absolunet](https://absolunet.com)
