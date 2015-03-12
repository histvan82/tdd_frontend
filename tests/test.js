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
	test('created array is array and good or not ', function() {
		var pelda1 = "a b c";
		var pelda2 = "100 982 444 990 1";
		var pelda3 = "Mark Anthony marka@lib.de";

		assert.isArray(this.inputValidator.createArray(pelda1));
		assert.isArray(this.inputValidator.createArray(pelda2));
		assert.isArray(this.inputValidator.createArray(pelda3));

		assert.deepEqual(this.inputValidator.createArray(pelda1),[ 'a', 'b', 'c' ]);
		assert.deepEqual(this.inputValidator.createArray(pelda2),[ '100', '982', '444', '990', '1' ]);
		assert.deepEqual(this.inputValidator.createArray(pelda3),[ 'Mark', 'Anthony', 'marka@lib.de' ]);

	});
});