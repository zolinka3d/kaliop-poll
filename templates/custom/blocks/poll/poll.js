const { basicButton, buttonAction } = require("../../../blocks/buttons/button");
const { headerBlock, textBlock } = require("../../../blocks/text/text");

const welcomeMessage = require("../../../../config/welcomeMessage.json");

module.exports.twoButtonsBlock = () => {
  const newBlock = [];

  const button1 = basicButton("response_ok", welcomeMessage.buttons[0].text);
  const button2 = basicButton("response_no_ok", welcomeMessage.buttons[1].text);
  const actionButtons = buttonAction([button1, button2]);
  const text1 = headerBlock(welcomeMessage.header, true);
  const text2 = textBlock(welcomeMessage.text);
  newBlock.push(text1);
  newBlock.push(text2);
  newBlock.push(actionButtons);

  return newBlock;
};
