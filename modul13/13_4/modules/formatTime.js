function getMinutes(uptime) {
	return Math.floor(uptime / 60) + ' min ' + Math.floor(uptime % 60) + ' sec';
}
function getHours(uptime) {
	return Math.floor(uptime / 3600) + ' hours ' + Math.floor((uptime % 3600) / 60) + ' min ' + Math.floor((uptime % 3600) % 60) + ' sec';
}
exports.getMinutes = getMinutes;
exports.getHours = getHours;