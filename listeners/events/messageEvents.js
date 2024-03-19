const { textBlock } = require("../../templates/blocks/text/text");
const {
  button,
  basicButton,
  buttonAction,
} = require("../../templates/blocks/buttons/button");

module.exports.messageEvents = (app) => {
  app.message("open view", async ({ message, say }) => {
    let newBlock = [];
    newBlock.push(textBlock("Do you have time for a little poll?"));
    newBlock.push(button("open_modal_button", "Open a view"));
    await say({
      blocks: newBlock,
      text: "Do you have time for a little poll?",
    });
  });

  app.message("two buttons", async ({ message, say }) => {
    let newBlock = [];

    let button1 = basicButton("yes", "Yes");
    let button2 = basicButton("no", "No");
    let actionButtons = buttonAction([button1, button2]);
    let text = textBlock("Is everything okay?");
    newBlock.push(text);
    newBlock.push(actionButtons);

    // let button1 = button("yes", "Yes");
    // let button2 = button("no", "No");
    // let text = textBlock("Is everything okay?");
    // newBlock.push(text);
    // newBlock.push(button1);
    // newBlock.push(button2);
    await say({
      blocks: newBlock,
      // text: "Is everything okay?",
    });
  });
};
