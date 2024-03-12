const { staticSelect } = require("../../blocks/staticSelect");

module.exports.register = (app) => {
  app.message("poll", async ({ message, say }) => {
    const response = staticSelect();
    await say(response);
  });

  app.message("open view", async ({ message, say }) => {
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Do you have time for a little poll?",
          },
        },
        {
          type: "actions",
          elements: [
            {
              type: "button",
              text: {
                type: "plain_text",
                text: "Start a poll",
              },
              action_id: "open_modal_button",
            },
          ],
        },
      ],
      text: "Do you have time for a little poll?",
    });
  });
};

const view = {
  type: "modal",
  callback_id: "modal-identifier",
  title: {
    type: "plain_text",
    text: "My App",
  },
  blocks: [
    {
      type: "section",
      block_id: "section-identifier",
      text: {
        type: "mrkdwn",
        text: "You can add a plain-text input here.",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "Click Me",
        },
        action_id: "button-identifier",
      },
    },
  ],
};
