//--------------------------------------------------------
//-- Tester
//--------------------------------------------------------
'use strict';

const ava    = require('ava');
const tester = require('@absolunet/tester');
const loader = require('../index');






tester.lintJs();
tester.lintJson();
tester.lintYaml();

ava.test('File loads', (t) => {
	const data = loader(`${__dirname}/..`);
	t.deepEqual(data, { 'extends':'@absolunet/node' }, 'File is badly loaded');
});
