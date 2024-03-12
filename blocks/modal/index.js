module.exports.firstModal = () => {
  return {
    // Twój obiekt view
    type: "modal",
    callback_id: "modal-identifier",
    title: {
      type: "plain_text",
      text: "Hello!",
    },
    submit: {
      type: "plain_text",
      text: "Send",
    },
    close: {
      type: "plain_text",
      text: "Cancel",
    },
    blocks: [
      {
        type: "section",
        block_id: "first_modal",
        text: {
          type: "mrkdwn",
          text: "Is everything ok?",
        },
        accessory: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select an item",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "yes",
                emoji: true,
              },
              value: "yes",
            },
            {
              text: {
                type: "plain_text",
                text: "no",
                emoji: true,
              },
              value: "no",
            },
          ],
          action_id: "static_select_action",
        },
      },
    ],
  };
};
