//--------------------------------------------------------
//-- stylelint loader
//--------------------------------------------------------
'use strict';

const fss = require('@absolunet/fss');

module.exports = (path) => {
	return fss.readYaml(`${path}/extendable-config.yaml`);
};
