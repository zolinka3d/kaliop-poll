module.exports.plainTextInput = () => {
  return {
    blocks: [
      {
        type: "input",
        element: {
          type: "plain_text_input",
          multiline: true,
          action_id: "plain_text_input-action",
        },
        label: {
          type: "plain_text",
          text: "I'm sorry to hear that. What's wrong?",
          emoji: true,
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Send",
              emoji: true,
            },
            value: "click_me_123",
            action_id: "label",
          },
        ],
      },
    ],
  };
};
