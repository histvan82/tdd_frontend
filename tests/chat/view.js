var assert = require('chai').assert,
	sinon = require('sinon'),
	Backbone = require('backbone'),
	testContent = require('./content/testcontent.html'),

	Chat = require('../../libs/chat/view');

suite('testing chat view', function() {
	setup(function() {
		Backbone.$('#sandbox').html(testContent);
		this.Chat = new Chat({el : '.PusheenChatApplet'});
	});

	test('test set input text', function() {
		var testMessage = 'test1',
			chatText = Backbone.$(this.Chat.ui.chatText)[0];
		this.Chat.sendMessage(testMessage);
		assert.isTrue(chatText.value === testMessage);
	});
	test('test send message', function() {
		var testMessage = 'test2',
			sendButton = Backbone.$(this.Chat.ui.sendButton),
			chatBox = Backbone.$(this.Chat.ui.chatBox)[0];
		this.Chat.sendMessage(testMessage);
		sendButton.trigger('click');
		assert.isTrue(chatBox.lastChild.innerHTML === testMessage);
	});
	test('test send message 2', function() {
		var testMessage = 'test3',
			sendButton = Backbone.$(this.Chat.ui.sendButton),
			chatBox = Backbone.$(this.Chat.ui.chatBox)[0];
		this.Chat.sendMessage('valami');
		sendButton.trigger('click');
		this.Chat.sendMessage(testMessage);
		sendButton.trigger('click');
		assert.isTrue(chatBox.lastChild.innerHTML === testMessage);
	});
	test('test message validation', function() {
		assert.isTrue(this.Chat.validateMessage('valid'));
	});
	test('test empty message validation', function() {
		assert.isFalse(this.Chat.validateMessage(''));
	});
	test('test maximum long message validation', function() {
		assert.isTrue(this.Chat.validateMessage(new Array(40 + 1).join('a')));
	});
	test('test too long message validation', function() {
		assert.isFalse(this.Chat.validateMessage(new Array(41 + 1).join('a')));
	});




});
