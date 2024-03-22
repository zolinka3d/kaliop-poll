const { modal, modalWithSubmitButtons } = require("../../../modals/modal");
const { text, textBlock, headerBlock } = require("../../../blocks/text/text");
const { openView, updateView } = require("../../../views/views");
const { staticSelect } = require("../../../blocks/accesories/staticSelect");
const { radioButtons } = require("../../../blocks/input/radioButton");
const { multineInput } = require("../../../blocks/input/multilineInput");
const { button } = require("../../../blocks/buttons/button");
const { options } = require("../../../blocks/helpers/helpers");

module.exports.firstView = (trigger_id) => {
	const newModal = modal("yes_no_modal", "Ok?");
	const newOptions = options(["Yes", "No"]);
	const newBlock = staticSelect(
		"test_decision_select",
		"Is everything ok?",
		newOptions,
		"Wybierz opcję",
	);

	newModal.blocks.push(newBlock);

	const newView = openView(trigger_id, newModal);
	return newView;
};

module.exports.noViewUpdated = (view_id) => {
	const newModal = modalWithSubmitButtons(
		"response_no_ok_view",
		"We're sorry to hear that",
	);

	const newBlock = multineInput(
		"block_no_id",
		"info_input",
		"Tell us more about the problem: ",
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

module.exports.openViewButtons = () => {
	const newBlock = [];
	newBlock.push(textBlock("Do you have time for a little poll?"));
	newBlock.push(button("open_modal_test_button", "Open test poll"));
	return newBlock;
};
