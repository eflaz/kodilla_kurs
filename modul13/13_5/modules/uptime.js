var os = require('os');

function getUptime() {
	var uptime = os.uptime();
	console.log('Uptime: ', Math.floor(uptime / 60), 'min ', (uptime % 60).toFixed(0), ' sec');
	console.log('Uptime: ', Math.floor(uptime / 3600), 'hours ', Math.floor((uptime % 3600) / 60), ' min', ((uptime % 3600) % 60).toFixed(0), ' sec');
}
exports.print = getUptime;