const { messageEvents } = require("./events/messageEvents");
const { buttonActions } = require("./actions/buttonActions");
const { viewActions } = require("./view/viewActions");
const { selectActions } = require("./actions/selectActions");
const { homeOpened } = require("./events/homeOpened");

module.exports.registerListeners = (app) => {
  messageEvents(app);
  buttonActions(app);
  viewActions(app);
  selectActions(app);
  homeOpened(app);
};
