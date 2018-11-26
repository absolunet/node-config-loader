# @absolunet/stylelint-loader

[![npm](https://img.shields.io/npm/v/@absolunet/stylelint-loader.svg)](https://www.npmjs.com/package/@absolunet/stylelint-loader)
[![npm dependencies](https://david-dm.org/absolunet/node-stylelint-loader/status.svg)](https://david-dm.org/absolunet/node-stylelint-loader)
[![npms](https://badges.npms.io/%40absolunet%2Fstylelint-loader.svg)](https://npms.io/search?q=%40absolunet%2Fstylelint-loader)
[![Travis CI](https://api.travis-ci.org/absolunet/node-stylelint-loader.svg?branch=master)](https://travis-ci.org/absolunet/node-stylelint-loader/builds)
[![Code style](https://img.shields.io/badge/code_style-@absolunet/node-659d32.svg)](https://github.com/absolunet/eslint-config-node)

> stylelint YAML configuration loader


## Install

```sh
$ npm i @absolunet/stylelint-loader
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

Path where the `extendable-config.yaml` file is.



## License

MIT © [Absolunet](https://absolunet.com)
