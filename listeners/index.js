const messageEvents = require("./events/messageEvents");
const buttonActions = require("./actions/buttonActions");

module.exports.registerListeners = (app) => {
  messageEvents.register(app);
  buttonActions.register(app);
};
