# @absolunet/eslint-loader

[![npm](https://img.shields.io/npm/v/@absolunet/eslint-loader.svg)](https://www.npmjs.com/package/@absolunet/eslint-loader)
[![npm dependencies](https://david-dm.org/absolunet/node-eslint-loader/status.svg)](https://david-dm.org/absolunet/node-eslint-loader)
[![npms](https://badges.npms.io/%40absolunet%2Feslint-loader.svg)](https://npms.io/search?q=%40absolunet%2Feslint-loader)
[![Travis CI](https://api.travis-ci.org/absolunet/node-eslint-loader.svg?branch=master)](https://travis-ci.org/absolunet/node-eslint-loader/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> ESLint YAML configuration loader


## Install

```sh
$ npm i @absolunet/eslint-loader
```


## Usage

```js
const loader = require('@absolunet/eslint-loader');

module.exports = loader(__dirname);
```


## API

### loader(path)

Returns an `Object` of [ESLint](https://eslint.org) configuration.

#### path

*Required*
Type: `string`

Path where the `shareable-config.yaml` file is.



## License

MIT © [Absolunet](https://absolunet.com)
