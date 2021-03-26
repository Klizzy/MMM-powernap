/* Magic Mirror
 * Node Helper: MMM-powernap
 *
 * By Steven Zemelka
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({

	// TODO set current stat for new `/state` route, which ruturnes the current state to homekit


	anotherFunction: function() {
		return {date: new Date()};
	},

	start: function() {
		this.expressApp.get('/MMM-powernap/show', (req, res) => {
			this.sendSocketNotification("MMM-powernap-SHOW-NAP-NOTICE", "Show Powernap message");
			values = this.anotherFunction();
			res.send(values);
		});

		this.expressApp.get('/MMM-powernap/remove', (req, res) => {
			this.sendSocketNotification("MMM-powernap-REMOVE-NAP-NOTICE", "Remove Powernap message");
			values = this.anotherFunction();
			res.send(values);
		});
	},
});
