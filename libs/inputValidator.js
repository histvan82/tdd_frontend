/**
 * InputValidator
 *
 * @constructor
 */
var InputValidator = function() {};
/**
 * Check if only string allowed
 *
 * @returns {boolean}
 */
InputValidator.prototype.isString = function(szoveg) {
	if (typeof szoveg === 'string') {
		return true;
	}
	else {
		return false;
	}
};
InputValidator.prototype.createArray = function(szoveg) {
	var tomb = szoveg.split(" ");
	return tomb;
};
InputValidator.prototype.createArray2 = function(szoveg) {
	var tomb = szoveg.split(',');
	return tomb;
};
InputValidator.prototype.createArrayByNL = function(szoveg) {
	var tomb = szoveg.split("\n");
	for(var i=0; i < tomb.length; i++) {
		tomb[i] = this.createArray2(tomb[i]);
	};
	return tomb;
};

module.exports = InputValidator;