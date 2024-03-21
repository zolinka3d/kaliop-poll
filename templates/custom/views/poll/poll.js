const { modalWithSubmitButtons } = require("../../../modals/modal");
const { options } = require("../../../blocks/helpers/helpers");
const { staticSelectInput } = require("../../../blocks/input/staticSelect");
const { multineInput } = require("../../../blocks/input/multilineInput");
const { radioButtons } = require("../../../blocks/input/radioButton");
const { openView } = require("../../../views/views");

const poll = require("../../../../config/poll.json");

module.exports.noInputView = (trigger_id) => {
  console.log("json file", JSON.stringify(poll));

  const newModal = modalWithSubmitButtons("no_ok_view_submitted", "Moody");

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
