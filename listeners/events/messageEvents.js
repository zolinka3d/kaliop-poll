const { text } = require("../../templates/blocks/text/text");
const { button } = require("../../templates/blocks/buttons/button");

module.exports.register = (app) => {
  app.message("open view", async ({ message, say }) => {
    let newBlock = [];
    newBlock.push(text("Do you have time for a little poll?"));
    newBlock.push(button("open_modal_button", "Open a view"));
    await say({
      blocks: newBlock,
      text: "Do you have time for a little poll?",
    });
  });

  app.message("test view", async ({ message, say }) => {
    let newBlocks = [];
    newBlocks.push(text("Test view?"));
    newBlocks.push(button("test_view", "Test view"));
    await say({
      blocks: newBlocks,
      text: "Test view?",
    });
  });
};
