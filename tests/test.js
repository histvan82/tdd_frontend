var assert = require('chai').assert,
	InputValidator = require('../libs/inputValidator');
suite('test input validator', function() {
	setup(function() {
		this.inputValidator = new InputValidator();
		this.dataProvider = function() {
			return {

			};
		};
	});
	test('only string allowed', function() {
		var szoveg = "szoveg";
		var szam = 33;
		assert.strictEqual(this.inputValidator.isString(szoveg), true);
		assert.notStrictEqual(this.inputValidator.isString(szam), true);
	});
});