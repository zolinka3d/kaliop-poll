const { textBlock, headerBlock } = require("../../templates/blocks/text/text");
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

    let button1 = basicButton("ok", "wszystko ok!");
    let button2 = basicButton("no", "mam sprawę");
    let actionButtons = buttonAction([button1, button2]);
    let text1 = headerBlock(
      "Cześć! Tu Moody! Twój kaliopowy bot nastrojowy.",
      true
    );
    let text2 = textBlock(
      "Jak co miesiąc chciałem zapytać czy wszystko w porządku i czy jest coś, czym chcesz się z nami podzielić?"
    );
    newBlock.push(text1);
    newBlock.push(text2);
    newBlock.push(actionButtons);
    await say({
      blocks: newBlock,
      // text: "Is everything okay?",
    });
  });
};
