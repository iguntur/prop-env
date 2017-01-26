'use strict';
const fs = require('fs');
const path = require('path');

module.exports = (key, val, envFile) => {
	envFile = envFile || path.join(process.cwd(), '.env');

	if (fs.existsSync(envFile)) {
		fs.readFileSync(envFile, 'utf8')
			.split('\n')
			.filter(val => val.length)
			.forEach(val => {
				val = val.split('=');

				val[0] = val[0].trim();
				val[1] = val[1].trim();

				if (val[1]) {
					process.env[val[0]] = val[1];
				}
			});
	}

	if (!process.env[key] && val) {
		process.env[key] = val;
	}

	return process.env[key];
};
