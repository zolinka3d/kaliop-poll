const {
  twoButtonsBlock,
  openViewButtons,
} = require("../../templates/custom/index");

module.exports.messageEvents = (app) => {
  app.message("open view", async ({ message, say }) => {
    await say({
      blocks: openViewButtons(),
      text: "Do you have time for a little poll?",
    });
  });

  app.message("two buttons", async ({ message, say }) => {
    await say({
      blocks: twoButtonsBlock(),
    });
  });
};
