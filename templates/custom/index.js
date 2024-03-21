const { modal, modalWithSubmitButtons } = require("../modals/modal");
const { text, textBlock, headerBlock } = require("../blocks/text/text");
const { openView, updateView } = require("../views/views");
const { staticSelect } = require("../blocks/accesories/staticSelect");
const { radioButtons } = require("../blocks/input/radioButton");
const { multineInput } = require("../blocks/input/multilineInput");
const {
  basicButton,
  buttonAction,
  button,
} = require("../blocks/buttons/button");
const { staticSelectInput } = require("../blocks/input/staticSelect");
const { options } = require("../blocks/helpers/helpers");

const poll = require("../../config/poll.json");
const welcomeMessage = require("../../config/welcomeMessage.json");

module.exports.firstView = (trigger_id) => {
  const newModal = modal("yes_no_modal", "Ok?");
  const newOptions = options(["Yes", "No"]);
  const newBlock = staticSelect(
    "decision_select",
    "Is everything ok?",
    newOptions,
    "Wybierz opcję"
  );

  newModal.blocks.push(newBlock);

  const newView = openView(trigger_id, newModal);
  return newView;
};

module.exports.noViewUpdated = (view_id) => {
  const newModal = modalWithSubmitButtons(
    "no_view_id",
    "We're sorry to hear that"
  );

  const newBlock = multineInput(
    "block_no_id",
    "info_input",
    "Tell us more about the problem: "
  );
  newModal.blocks.push(newBlock);
  const newView = updateView(view_id, newModal);

  console.log("no View updated", JSON.stringify(newView));

  return newView;
};

module.exports.thanksView = (view_id) => {
  const newModal = modal("thanks_view", "Thank you!");
  const newText = textBlock("See you next month");
  newModal.blocks.push(newText);
  const newView = updateView(view_id, newModal);
  return newView;
};

module.exports.noInputView = (trigger_id) => {
  console.log("json file", JSON.stringify(poll));

  const newModal = modalWithSubmitButtons("no_input_view", "Moody");

  const selectOptions = options(poll.inputValues.select.options);
  const selectBlock = staticSelectInput(
    "select_block",
    poll.inputValues.select.text,
    selectOptions,
    poll.inputValues.select.placeholder
  );
  const multilineInput = multineInput(
    "no_input_block",
    "no_input",
    poll.inputValues.multilineInput.text
  );
  const radioOptions = options(poll.inputValues.radioButtons.options);
  const radioBlock = radioButtons(
    "no_input_radio_buttons",
    "no_input_radio_buttons",
    radioOptions,
    poll.inputValues.radioButtons.text
  );
  newModal.blocks.push(selectBlock);
  newModal.blocks.push(multilineInput);
  newModal.blocks.push(radioBlock);
  const newView = openView(trigger_id, newModal);
  console.log("no input view", JSON.stringify(newView));
  return newView;
};

module.exports.twoButtonsBlock = () => {
  const newBlock = [];

  const button1 = basicButton("ok", welcomeMessage.buttons[0].text);
  const button2 = basicButton("no", welcomeMessage.buttons[1].text);
  const actionButtons = buttonAction([button1, button2]);
  const text1 = headerBlock(welcomeMessage.header, true);
  const text2 = textBlock(welcomeMessage.text);
  newBlock.push(text1);
  newBlock.push(text2);
  newBlock.push(actionButtons);

  return newBlock;
};

module.exports.openViewButtons = () => {
  const newBlock = [];
  newBlock.push(textBlock("Do you have time for a little poll?"));
  newBlock.push(button("open_modal_button", "Open test poll"));
  return newBlock;
};
