const {
  modal,
  modalWithSubmitButtons,
} = require("../../templates/modals/modal");
const { text } = require("../../templates/blocks/text/text");
const { openView, updateView } = require("../../templates/views/views");

module.exports.firstView = (trigger_id) => {
  let newModal = modal("yes_no_modal", "Ok?");
  newModal.blocks.push({
    type: "section",
    text: {
      type: "mrkdwn",
      text: "Is everything OK?",
    },
    accessory: {
      type: "static_select",
      placeholder: {
        type: "plain_text",
        text: "Wybierz opcję",
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "Yes",
          },
          value: "yes",
        },
        {
          text: {
            type: "plain_text",
            text: "No",
          },
          value: "no",
        },
      ],
      action_id: "decision_select",
    },
  });

  let newView = openView(trigger_id, newModal);
  return newView;
};

module.exports.noViewUpdated = (view_id) => {
  let newModal = modalWithSubmitButtons(
    "no_view_id",
    "We're sorry to hear that"
  );
  newModal.blocks.push({
    type: "input",
    block_id: "block_no_id",
    element: {
      type: "plain_text_input",
      action_id: "info_input",
      multiline: true,
    },
    label: {
      type: "plain_text",
      text: "Tell us more about the problem: ",
    },
  });
  let newView = updateView(view_id, newModal);

  return newView;
};

module.exports.thanksView = (view_id) => {
  let newModal = modal("thanks_view", "Thank you!");
  newModal.blocks.push({
    type: "section",
    text: {
      type: "mrkdwn",
      text: "Thank you for your time. Have a good day!",
    },
  });
  let newView = updateView(view_id, newModal);
  return newView;
};
