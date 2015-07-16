var Ease = require('eases');
var delayTable = require('./');

var arr = delayTable(5, 20, Ease.cubicOut);

arr.forEach(function(sample) {
	console.log(sample);
});
