//--------------------------------------------------------
//-- stylelint loader
//--------------------------------------------------------
'use strict';

const fs   = require('fs');
const yaml = require('js-yaml');

module.exports = (path) => {
	return yaml.safeLoad(fs.readFileSync(`${path}/extendable-config.yaml`, 'utf8'));
};
