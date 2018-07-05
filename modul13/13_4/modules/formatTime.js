function getFormattedTime(seconds) {
	if (seconds >= 3600) {
		return Math.floor(seconds / 3600) + ' hours ' + Math.floor((seconds % 3600) / 60) + ' min ' + Math.floor((seconds % 3600) % 60) + ' sec';
	} else {
		return Math.floor(seconds / 60) + ' min ' + Math.floor(seconds % 60) + ' sec';
	}
}
exports.getFormattedTime = getFormattedTime;