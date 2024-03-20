const {
  twoButtonsBlock,
  openViewButtons,
} = require("../../templates/custom/index");

module.exports.messageEvents = (app) => {
  app.message("test", async ({ message, say }) => {
    await say({
      blocks: openViewButtons(),
      text: "Do you have time for a little poll?",
    });
  });

  app.message("poll", async ({ message, say }) => {
    await say({
      blocks: twoButtonsBlock(),
    });
  });
};
