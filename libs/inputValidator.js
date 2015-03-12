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
module.exports = InputValidator;