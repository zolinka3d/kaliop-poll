const { modal, modalWithSubmitButtons } = require("../modals/modal");
const { text, textBlock, headerBlock } = require("../blocks/text/text");
const { openView, updateView } = require("../views/views");
const { staticSelect, options } = require("../blocks/accesories/staticSelect");
const { radioButtons } = require("../blocks/accesories/radioButton");
const { multineInput } = require("../blocks/input/input");
const {
  basicButton,
  buttonAction,
  button,
} = require("../blocks/buttons/button");

module.exports.firstView = (trigger_id) => {
  let newModal = modal("yes_no_modal", "Ok?");
  let newOptions = options(["Yes", "No"]);
  let newBlock = staticSelect(
    "decision_select",
    "Is everything ok?",
    newOptions,
    "Wybierz opcję"
  );

  newModal.blocks.push(newBlock);

  let newView = openView(trigger_id, newModal);
  return newView;
};

module.exports.noViewUpdated = (view_id) => {
  let newModal = modalWithSubmitButtons(
    "no_view_id",
    "We're sorry to hear that"
  );

  let newBlock = multineInput(
    "block_no_id",
    "info_input",
    "Tell us more about the problem: "
  );
  newModal.blocks.push(newBlock);
  let newView = updateView(view_id, newModal);

  console.log("no View updated", JSON.stringify(newView));

  return newView;
};

module.exports.thanksView = (view_id) => {
  let newModal = modal("thanks_view", "Dziękuję!");
  let newText = textBlock("Słyszymy się za miesiąc. Miłej pracy!");
  newModal.blocks.push(newText);
  let newView = updateView(view_id, newModal);
  return newView;
};

module.exports.noInputView = (trigger_id) => {
  let newModal = modalWithSubmitButtons("no_input_view", "Moody");
  let multilineInput = multineInput(
    "no_input_block",
    "no_input",
    "Czego dotyczy Twój problem? Jak możemy Ci pomóc?"
  );
  let newOptions = options([
    "Tak, chcę pozostać anonimowy",
    "Nie, chcę się przedstawić",
  ]);
  let checkbox = radioButtons(
    "no_input_checkbox",
    "no_input_checkbox",
    newOptions,
    "Czy chcesz pozostać anonimowy?"
  );
  newModal.blocks.push(multilineInput);
  newModal.blocks.push(checkbox);
  let newView = openView(trigger_id, newModal);
  console.log("no input view", JSON.stringify(newView));
  return newView;
};

module.exports.twoButtonsBlock = () => {
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

  return newBlock;
};

module.exports.openViewButtons = () => {
  let newBlock = [];
  newBlock.push(textBlock("Do you have time for a little poll?"));
  newBlock.push(button("open_modal_button", "Open a view"));
  return newBlock;
};
