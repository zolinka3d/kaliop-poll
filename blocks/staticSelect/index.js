module.exports.staticSelect = () => {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Hello! Is everything ok?",
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
