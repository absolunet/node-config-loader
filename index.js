//--------------------------------------------------------
//-- ESLint loader
//--------------------------------------------------------
'use strict';

const fs   = require('fs');
const yaml = require('js-yaml');

module.exports = () => {
	return yaml.safeLoad(fs.readFileSync(`./.eslintrc.yaml`, 'utf8'));
};
