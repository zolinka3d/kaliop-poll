const { modalWithSubmitButtons, modal } = require("../../../modals/modal");
const { options } = require("../../../blocks/helpers/helpers");
const { staticSelectInput } = require("../../../blocks/input/staticSelect");
const { multineInput, input } = require("../../../blocks/input/multilineInput");
const { radioButtons } = require("../../../blocks/input/radioButton");
const { openView, updateView } = require("../../../views/views");
const {
	multiConversationsSelect,
} = require("../../../blocks/input/staticSelect");

const {
	multiConversationsSelectSection,
} = require("../../../blocks/accesories/staticSelect");
const { textBlock } = require("../../../blocks/text/text");
const poll = require("../../../../config/poll.json");

module.exports.noInputView = (trigger_id) => {
	console.log("json file", JSON.stringify(poll));

	const newModal = modalWithSubmitButtons("no_ok_view_submitted", "Moody");

	const selectOptions = options(poll.inputValues.select.options);
	const selectBlock = staticSelectInput(
		"select_block",
		poll.inputValues.select.text,
		selectOptions,
		poll.inputValues.select.placeholder,
	);
	const multilineInput = multineInput(
		"no_input_block",
		"no_input",
		poll.inputValues.multilineInput.text,
	);
	const radioOptions = options(poll.inputValues.radioButtons.options);
	const radioBlock = radioButtons(
		"no_input_radio_buttons",
		"no_input_radio_buttons",
		radioOptions,
		poll.inputValues.radioButtons.text,
	);
	newModal.blocks.push(selectBlock);
	newModal.blocks.push(multilineInput);
	newModal.blocks.push(radioBlock);
	const newView = openView(trigger_id, newModal);
	console.log("no input view", JSON.stringify(newView));
	return newView;
};

module.exports.createPollView = (trigger_id) => {
	const newModal = modal("create_poll_view", "Moody");
	const converationSelect = multiConversationsSelectSection(
		//
		"conversation_select",
		"Select a conversation",
		"Select a conversation",
	);
	newModal.blocks.push(converationSelect);

	const newView = openView(trigger_id, newModal);

	return newView;
};

module.exports.updateCreatingPollViewError = (view_id, view_blocks, text) => {
	const newModal = modal("create_poll_view", "Moody");
	newModal.blocks = [view_blocks[0]];
	const newErrorBlock = textBlock(text);
	newModal.blocks.push(newErrorBlock);

	const newView = updateView(view_id, newModal);
	return newView;
};

module.exports.updateCreatingPollViewCorrect = (view_id, view_blocks) => {
	const newModal = modalWithSubmitButtons("create_poll_view", "Moody");
	newModal.blocks = [view_blocks[0]];
	const newView = updateView(view_id, newModal);
	return newView;
};
