const { modal, modalWithSubmitButtons } = require("../modals/modal");
const { text, textBlock, headerBlock } = require("../blocks/text/text");
const { openView, updateView } = require("../views/views");
const {
  staticSelect,
  options,
  staticSelectInput,
} = require("../blocks/accesories/staticSelect");
const { radioButtons } = require("../blocks/accesories/radioButton");
const { multineInput } = require("../blocks/input/input");
const {
  basicButton,
  buttonAction,
  button,
} = require("../blocks/buttons/button");

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
  const newModal = modalWithSubmitButtons("no_input_view", "Moody");

  const selectOptions = options(["1", "2", "3", "4", "5"]);
  const selectBlock = staticSelectInput(
    "select_block",
    "Jak się czujesz?",
    selectOptions,
    "Wybierz ocenę swojego samopoczucia od 1 do 5"
  );
  const multilineInput = multineInput(
    "no_input_block",
    "no_input",
    "Czego dotyczy Twój problem? Jak możemy Ci pomóc?"
  );
  const radioOptions = options([
    "Tak, chcę pozostać anonimowy",
    "Nie, chcę się przedstawić",
  ]);
  const checkbox = radioButtons(
    "no_input_radio_buttons",
    "no_input_radio_buttons",
    radioOptions,
    "Czy chcesz pozostać anonimowy?"
  );
  newModal.blocks.push(selectBlock);
  newModal.blocks.push(multilineInput);
  newModal.blocks.push(checkbox);
  const newView = openView(trigger_id, newModal);
  console.log("no input view", JSON.stringify(newView));
  return newView;
};

module.exports.twoButtonsBlock = () => {
  const newBlock = [];

  const button1 = basicButton("ok", "wszystko ok!");
  const button2 = basicButton("no", "mam sprawę");
  const actionButtons = buttonAction([button1, button2]);
  const text1 = headerBlock(
    "Cześć! Tu Moody! Twój kaliopowy bot nastrojowy.",
    true
  );
  const text2 = textBlock(
    "Jak co miesiąc chciałem zapytać czy wszystko w porządku i czy jest coś, czym chcesz się z nami podzielić?"
  );
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
