function printFormattedTime(uptime) {
	console.log('Uptime: ', Math.floor(uptime / 60), 'min ', Math.floor(uptime % 60), ' sec');
	console.log('Uptime: ', Math.floor(uptime / 3600), 'hours ', Math.floor((uptime % 3600) / 60), ' min', Math.floor((uptime % 3600) % 60), ' sec');
}
exports.print = printFormattedTime;