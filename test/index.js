//--------------------------------------------------------
//-- Tester
//--------------------------------------------------------
'use strict';

const ava    = require('ava');
const tester = require('@absolunet/tester');
const loader = require('..');






tester.npmPackage.validate();

ava.test('File loads', (t) => {
	const data = loader(__dirname);
	t.deepEqual(data, { foo:'bar' }, 'File is badly loaded');
});
