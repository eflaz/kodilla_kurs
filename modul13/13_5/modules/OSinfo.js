var os = require('os');
var colors = require('colors');
var uptimeModule = require('./uptime');

function getOSinfo() {
	var type = os.type();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System:'.grey, type);
	console.log('Release:'.red, release);
	console.log('CPU model:'.white, cpu);
	console.log('Uptime: ~'.green, (uptime / 60).toFixed(0), 'min');
	console.log('User name:'.magenta, userInfo.username);
	console.log('Home dir:'.cyan, userInfo.homedir);
	uptimeModule.print();
}
exports.print = getOSinfo;