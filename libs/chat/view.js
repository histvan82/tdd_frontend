/**
 * @module views/chat
 */

var Backbone = require('backbone'),

	/**
	 * @class
	 * @extends external:Backbone.Marionette.View
	 */
		Chat = Backbone.Marionette.View.extend(
		/** @lends module:views/chat~chat.prototype */
		{
			ui : {
				chatBox    : '.chatBox',
				chatText   : '.chatText',
				sendButton : '.sendButton'
			},

			events : {
				'click @ui.sendButton'         : 'onSendButtonClick'
			},

			/**
			 * writing the message to the chat input
			 * @param {string} chatMessage The message what we want to send
			 */
			sendMessage : function(chatMessage) {
				var chatText = Backbone.$(this.ui.chatText)[0];
				chatText.value = chatMessage;
			},

			/**
			 * Handles onSendButtonClick, sending the message to validation and if ok writing it out in chatbox
			 */
			onSendButtonClick : function() {
				var chatText = Backbone.$(this.ui.chatText)[0],
					chatBox = Backbone.$(this.ui.chatBox)[0];
				if (this.validateMessage(chatText.value)) {
					Backbone.$('<p>', {
						class : 'message',
						text : chatText.value
					}).appendTo(chatBox);
					chatText.value = '';
				}
			},
			/**
			 * validates the message: can not be null or longer than 40 chrs
			 * @param {string} chatMessage The message what we want to validate.
			 * @returns {boolean} Is it valid or not?
			 */
			validateMessage : function(chatMessage) {
				return (!!chatMessage && chatMessage.length <= 40);
			}
}
	);

module.exports = Chat;
