function sample(ratio, ease) {
	return ease(ratio);
}

function delayTable(duration, samples, ease) {

	var arr = [];
	for (var i = 0; i < samples; i++) {
		arr.push(sample(i / samples, ease) * duration);
	}
	return arr;
}

module.exports = delayTable;