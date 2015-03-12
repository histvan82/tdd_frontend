var assert = require('chai').assert,
	_ = require('underscore'),
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

	test('created 2d array is good or not ', function() {
		var pelda4 = "211,22,35\n10,20,33";
		var pelda5 = "luxembourg,kennedy,44\nbudapest,expo ter,5-7\ngyors,fo utca,9";

		assert.deepEqual(this.inputValidator.createArrayByNL(pelda4),[['211','22','35'],['10','20','33']]);
		assert.deepEqual(this.inputValidator.createArrayByNL(pelda5),[['luxembourg','kennedy','44'],['budapest','expo ter','5-7'],['gyors','fo utca','9']]);
	});

});