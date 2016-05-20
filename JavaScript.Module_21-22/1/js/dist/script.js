"use strict";

var script = {
	myPow: function myPow(num, power) {

		if (power === 0) return 1;
		if (power % 2 === 1) return this.myPow(num, power - 1) * num;else {
			var b = this.myPow(num, power / 2);
			return b * b;
		}
	}
};

try {
	module.exports = script;
} catch (e) {

	var num = prompt("Enter Base Number");
	var power = prompt("Enter Exponent Number");
	var newResult = script.myPow(num, power);
	console.log("The result is " + newResult);
}

//# sourceMappingURL=script.js.map
//# sourceMappingURL=script.js.map
