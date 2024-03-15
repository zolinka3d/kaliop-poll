module.exports.button = (action_id, text) => {
  return {
    type: "actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          text: text,
        },
        action_id: action_id,
      },
    ],
  };
};
