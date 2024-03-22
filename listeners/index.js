const { messageEvents } = require("./events/messages");
const { buttonActions } = require("./actions/buttons");
const { selectActions } = require("./actions/selects");
const { viewActions } = require("./views/views");
const { homeOpened } = require("./events/homeOpened");
const { commands } = require("./commands/command");

module.exports.registerListeners = (app) => {
	messageEvents(app);
	buttonActions(app);
	viewActions(app);
	selectActions(app);
	homeOpened(app);
	commands(app);
};
