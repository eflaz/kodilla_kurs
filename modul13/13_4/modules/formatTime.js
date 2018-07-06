function getFormattedTime(seconds) {
	var hours = Math.floor(seconds / 3600);
	var minutes = Math.floor((seconds % 3600) / 60);
	var restSeconds = Math.floor(seconds % 60);
	if (hours > 0) {
		return hours + " hours " + minutes + " minutes " + restSeconds + " seconds";
	}
	if (minutes > 0) {
		return minutes + " minutes " + restSeconds + " seconds";
	}
	return restSeconds + " seconds";
}
exports.getFormattedTime = getFormattedTime;