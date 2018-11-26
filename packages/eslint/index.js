//--------------------------------------------------------
//-- ESLint loader
//--------------------------------------------------------
'use strict';

const fss = require('@absolunet/fss');

module.exports = (path) => {
	return fss.readYaml(`${path}/shareable-config.yaml`);
};
