module.exports.firstView = (trigger_id) => {
  return {
    trigger_id: trigger_id,
    view: {
      type: "modal",
      callback_id: "yes_no_modal",
      title: {
        type: "plain_text",
        text: "Ok?",
      },
      blocks: [
        {
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
        },
      ],
    },
  };
};

module.exports.noViewUpdated = () => {
  return {
    type: "modal",
    callback_id: "no_view_id",
    title: {
      type: "plain_text",
      text: "We're sorry to hear that",
    },
    submit: {
      type: "plain_text",
      text: "Submit",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
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
      },
    ],
  };
};

module.exports.thanksView = () => {
  return {
    type: "modal",
    callback_id: "yes_no_modal_updated",
    title: {
      type: "plain_text",
      text: "Thank you!",
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Thank you for your time. Have a good day!",
        },
      },
    ],
  };
};
