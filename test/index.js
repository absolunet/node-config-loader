//--------------------------------------------------------
//-- Tester
//--------------------------------------------------------
'use strict';

const ava    = require('ava');
const tester = require('@absolunet/tester');


tester.npmPackage.validateMulti();

tester.npmPackage.multiPackagesPaths.forEach((path) => {
	const [name] = path.split('/').reverse();

	tester.npmPackage.validateSub({ cwd:path });

	ava.test(`Loader/${name}: File loads`, (t) => {
		const loader = require(path);  // eslint-disable-line global-require
		const data = loader(__dirname);

		t.deepEqual(data, { foobar:name }, 'File is badly loaded');
	});
});
