module.exports.register = (app) => {
  app.message("button", async ({ message, say }) => {
    const response = block(message);
    await say(response);
  });

  app.message("label", async ({ message, say }) => {
    const response = label(message);
    await say(response);
  });

  app.message("static_select", async ({ message, say }) => {
    const response = static_select(message);
    await say(response);
  });

  app.message("poll", async ({ message, say }) => {
    const response = poll(message);
    await say(response);
  });
};

const poll = (message) => {
  return {
    blocks: [
      {
        type: "section",
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
          action_id: "static_select-action",
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
            action_id: "send",
          },
        ],
      },
    ],
  };
};

const block = (message) => {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Hey there <@${message.user}>!`,
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
          },
          action_id: "button_click",
        },
      },
    ],
  };
};

const label = (message) => {
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
          text: "Label",
          emoji: true,
        },
      },
    ],
  };
};

const static_select = (message) => {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Pick an item from the dropdown list",
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
                text: "*plain_text option 0*",
                emoji: true,
              },
              value: "value-0",
            },
            {
              text: {
                type: "plain_text",
                text: "*plain_text option 1*",
                emoji: true,
              },
              value: "value-1",
            },
            {
              text: {
                type: "plain_text",
                text: "*plain_text option 2*",
                emoji: true,
              },
              value: "value-2",
            },
          ],
          action_id: "static_select-action",
        },
      },
    ],
  };
};
