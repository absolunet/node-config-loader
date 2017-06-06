# @absolunet/eslint-loader

[![NPM version](https://img.shields.io/npm/v/@absolunet/eslint-loader.svg)](https://www.npmjs.com/package/@absolunet/eslint-loader)
[![Dependencies](https://david-dm.org/absolunet/node-eslint-loader/status.svg)](https://david-dm.org/absolunet/node-eslint-loader)

> ESLint yaml loader


## Install

```sh
$ npm install @absolunet/eslint-loader
```


## Usage

```js
const loader = require('@absolunet/eslint-loader');

module.exports = loader(__dirname);
```


## API

### loader(path)

Returns an `Object` of [ESLint](http://eslint.org) configuration.

#### path

*Required*  
Type: `string`  

Path where the `.eslintrc.yaml` file is.



## License

MIT © [Absolunet](https://absolunet.com)
